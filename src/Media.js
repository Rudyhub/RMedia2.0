const childprocess = require('child_process');
const fs = require('fs');

import user from './user.js';

let THUMB_TEMP_FILE = 'thumb.temp';
// let CONCAT_TEMP_LIST_FILE = utils.path(config.temp+'\\concat_temp_list_file.txt');

const reg = {
    duration: /^duration\s*:\s*([\s\S]*?)\s*,[\s\S]*?bitrate\s*:\s*([\d.]+)\s*kb\/s$/i,
    scaleline: /^stream\s+#(\d+:\d+)[\s\S]*?video\s*:\s*([\s\S]*?)$/i,
    scale: /,\s*(\d+)x(\d+)/i,
    fps: /,\s*([\d.]+)\s*fps\s*,/i,
    bitv: /,\s*([\d.]+)\s*kb\/s/i,
    audioline: /^stream\s+#(\d+:\d+)[\s\S]*?audio\s*:\s*([\s\S]*?)$/i,
    aclayout: /stereo|mono/i,
    bita: /,\s*([\d.]+)\s*kb\/s/i,
    end: /(^stream\s*mapping)|(^output)/i
};

module.exports = {
    image: [['jpg','jpeg','png','gif','webp','ico','bmp','jps','mpo'],['tga','psd','iff','pbm','pcx','tif']],
    video: [['mp4','ogg','webm','mpeg','mkv'],['ts','flv','rm','mov','wmv','avi','rmvb']],
    audio: [['mp3','wav','mpeg'],['wma','mid']],
    ffmpeg: null,
    getType(format){
        let types = ['audio','image','video'],
            i = types.length;
        for(; i--;){
            if(this[types[i]][0].includes(format) || this[types[i]][1].includes(format)) return types[i];
        }
    },
    metadata(url,success,fail){
        let ext = url.slice(url.lastIndexOf('.')+1).toLowerCase(),
            json = {
                duration: 0,
                bit: 0,
                bitv: 0,
                bita: 0,
                width: 0,
                height: 0,
                fps: 0,
                ext: ext,
                type: null,
                vchannel: '',
                achannel: '',
                aclayout: 0
            },
            status = true;

        childprocess.exec(user.ffmpegPath+' -hide_banner -i "'+url+'" -vframes 1 -f null -', (err,stdout, stderr)=>{
            let lines = stderr.split(/\n/), i = 0, len = lines.length, line, match;
            for(; i < len; i++){
                line = lines[i].trim();
                if(reg.end.test(line)) break;

                if(( match = reg.duration.exec( line ))){
                    let times = match[1].toString().split(':');
                    json.duration = parseInt(times[0])*3600 + parseInt(times[1])*60 + parseFloat(times[2]);
                    json.bit = parseFloat(match[2]);
                }
                else if((match = reg.scaleline.exec( line ))){
                    let scale, fps, bitv;
                    json.vchannel = match[1];
                    if( (scale = reg.scale.exec(match[2])) ){
                        json.width = parseFloat(scale[1]);
                        json.height = parseFloat(scale[2]);
                    }
                    if( (fps = reg.fps.exec(match[2])) ){
                        json.fps = parseFloat(fps[1]);
                    }
                    if( (bitv = reg.bitv.exec(match[2])) ){
                        json.bitv = parseFloat(bitv[1]);
                    }
                }
                else if((match = reg.audioline.exec( line )) ){
                    let aclayout, bita;
                    json.achannel = match[1];
                    if((aclayout = reg.aclayout.exec(match[2])) ){
                        json.aclayout = aclayout[0] === 'stereo' ? 2 : 1;
                    }
                    if((bita = reg.bita.exec(match[2])) ){
                        json.bita = parseFloat(bita[1]);
                    }
                }
            }

            if(json.width > 0 && json.height > 0){
                if(json.fps === 0 || json.ext === 'gif'){
                    json.type = 'image';
                    json.duration = 0;
                }else{
                    json.type = 'video'; 
                }
            }else if(json.bita > 0){
                json.type = 'audio';
            }

            if(json.bit <= 0){
                json.bit = json.bita + json.bitv;
            }
        }).once('close',(a,b)=>{
            if(a === 0){
                if(success) success(json);
            }else{
                if(status && fail){
                    status = false;
                    fail(a,b);
                }
            }
        }).once('error', (err)=>{
            if(status && fail){
                status = false;
                fail(err);
            }
        });
    },
    preview(uniqid, input, time){
        if(!fs.existsSync('temp/'+uniqid)){
            childprocess.execSync('md temp\\'+uniqid);
        }
        let path = 'temp/'+uniqid+'/'+time+'.jpg';
        if(!fs.existsSync(path)){
            try{
                childprocess.execSync(user.ffmpegPath+' -ss '+time+' -i "'+input+'" -vframes 1 -y  -f image2 "'+path+'"');
            }catch (e) {
                console.log(e)
            }
        }
        return path;
    },
    deltemp(uniqid){
        try{
            childprocess.execSync('rd /s /q temp\\'+uniqid);
        }catch (e) {
            console.log(e);
        }
    },
    thumb(o){
        let wmax = o.widthLimit || 480,
            w = o.width || wmax,
            h = o.height || wmax*.5625,
            format = o.format === 'jpg' ? 'image2' : (o.format === 'gif' ? 'gif': 'apng'),
            status = true,
            thumb;

        if(w > wmax){
            h = Math.round((o.height/o.width)*wmax);
            w = Math.round(wmax);
        }
        if(h%2 !== 0) h--;
        if(w%2 !== 0) w--;

        fs.writeFileSync(THUMB_TEMP_FILE, '');

        childprocess.exec(user.ffmpegPath+(o.time ? ' -ss '+o.time: '')+' -i "'+o.input+'" -vframes 1 -s '+w+'x'+h+' -y  -f '+format+' "'+THUMB_TEMP_FILE+'"',(err)=>{
            if(!err){
                thumb = window.URL.createObjectURL(new Blob([fs.readFileSync(THUMB_TEMP_FILE)], {type:'image/'+o.format}));
            }else{
                if(status && o.fail){
                    status = false;
                    o.fail(err);
                }
            }
        }).once('close', (a,b)=>{
            if(a === 0){
                o.success(thumb);
            }else{
                if(status && o.fail){
                    status = false;
                    o.fail(a,b);
                }
            }
        }).once('error', (e)=>{
            if(status && o.fail){
                status = false;
                o.fail(e);
            }
        });
    },
    /*
    useThumb(item){
        if(!item) return;
        this.thumb({
            input: item.path,
            time: item.currentTime,
            success(src){
                item.thumb = src;
            },
            fail(){
                utils.dialog.show = true;
                utils.dialog.title = '错误！';
                utils.dialog.body = '无法生成预览。';
            }
        });
    },
    */
    info(o){
        let self = this;
        if(!o.input) {
            alert('no path');
            // utils.dialog.show = true;
            // utils.dialog.title = '地址错误：';
            // utils.dialog.body = '<p>无效媒体文件地址!</p>';
            return;
        }
        if(!o.success) return;
        self.metadata(o.input,(json)=>{
            json.thumb = '';
            if(json.type === 'audio'){
                json.thumb = user.audioThumb;
                o.success(json);
            }else{
                if(self.image[0].includes(json.ext)){
                    json.thumb = o.input;
                    o.success(json);
                }else{
                    self.thumb({
                        widthLimit: o.widthLimit,
                        format: o.format,
                        input: o.input,
                        width: json.width,
                        height: json.height,
                        success(thumb){
                            json.thumb = thumb;
                            o.success(json);
                        },
                        fail(a,b){
                            o.fail(a,b);
                        }
                    });
                }
            }
        }, o.fail);
    },
    /*
    killAll(fn){
        if(this.ffmpeg) this.ffmpeg.signalCode = '强制退出所有';
        childprocess.exec('TASKKILL /F /IM ffmpeg.exe', (err,stdout, stderr)=>{
            if(fn) fn(stderr.toString('utf-8'));
        });
    },
    end(signalCode){
        if(this.ffmpeg){
            this.ffmpeg.stdin.write('q\n');
            this.ffmpeg.signalCode = signalCode;
        }
    },
    command(item, outFolder){
        let bita, bitv, w, h, total, outPath, result, exists;

        bita = item.bita < config.output.bita ? item.bita : config.output.bita;
        bitv = Math.round(item.quality*(item.bitv+item.bita)/100 - bita);
        w = Math.round(item.towidth);
        h = Math.round(item.toheight);
        total = item.endTime - item.startTime;
        outPath = utils.path(outFolder + '\\' + item.toname);
        result = {
            error: null,
            cmd: []
        };
        exists = [];

        //时间
        if(item.startTime > 0) result.cmd.push('-ss', item.startTime);
        if(total > 0 && item.endTime !== item.duration) result.cmd.push('-t', total);

        //输入
        if(item.type === 'image' && item.series){
            if(item.totype === 'image' && item.toformat !== 'gif'){
                result.error = new Error(`在文件“${item.path}”选中了序列图，所以输出格式必须是视频或gif。请选好后再继续？`);
                result.error.code = 1;
                return result;
            }
            let reg = new RegExp('(\\d+)\\.'+item.format+'$','i'),
                match = reg.exec(item.path);
            if(match && match[1]){
                result.cmd.push('-r', 25, '-i', item.path.replace(reg, function($0,$1){
                    return '%0'+$1.length+'d.'+item.format;
                }));
            }else{
                result.error = new Error(`<p>选中了序列图，但输入的文件“${item.path}”不符合！</p>
                <p>序列图名称必须是有规律、等长度、末尾带序列化数字的名称。</p>
                <p>如：001.png、002.png、003.png... 或 img01.png、img02.png、img03.png...</p>
                <p>然后只需要选择第一张图片即可</p>`);
                result.error.code = 1;
                return result;
            }
        }else{
            result.cmd.push('-i', item.path);
        }

        //1.判断输入文件是否存在，有中途被转移或删除的情况
        if(!utils.has(item.path)){
            result.error = new Error('输入文件“'+item.path+'”不存在，可能文件路径被更改或文件被删除。');
            result.error.code = 1;
            return result;
        }

        //如果输出音频
        if(item.totype === 'audio'){
            if(item.achannel){
                if(bita) result.cmd.push('-ab', bita+'k');
                if(item.split && item.aclayout > 1){
                    //2.判断如果文件已存在，把已存在的暂存到exists中，方便枚举到error中，外部可用以提示是否覆盖。以下同里
                    if(utils.has(outPath+'_left.mp3')) exists.push('_left.mp3');
                    if(utils.has(outPath+'_right.mp3')) exists.push('_right.mp3');

                    result.cmd.push('-map_channel', item.achannel.replace(':','.')+'.0', outPath+'_left.mp3', '-map_channel', item.achannel.replace(':','.')+'.1', outPath+'_right.mp3');
                    return result;
                }
                if(item.type !== 'audio') result.cmd.push('-vn');
                //2...
                if(utils.has(outPath+'.'+item.toformat)) exists.push('.'+item.toformat);

                result.cmd.push(outPath+'.'+item.toformat);
                return result;
            }
            result.error = new Error(`输入的文件“${item.path}”无音频数据或者无法解析音频数据。`);
            result.error.code = 1;
            return result;
        }

        //尺寸
        if(w>0 && h>0){
            if(w%2 !== 0) w--;
            if(h%2 !== 0) h--;

            let filters = '[0:v]scale='+w+':'+h;
            //如果有水印
            if(item.logo && !item.series){
                //1...
                if(!utils.has(item.logo)){
                    result.error = new Error('输入文件“'+item.path+'”不存在，可能文件路径被更改或文件被删除。');
                    result.error.code = 1;
                    return result;
                }

                result.cmd.push('-i', item.logo);

                let lw = Math.round(item.logoSize/100 * w),
                    lh = Math.round(lw * item.logoScale),
                    lt = Math.round(item.logoY/100 * h),
                    ll = Math.round(item.logoX/100 * w),
                    st = item.logoEnd>item.logoStart ? item.logoStart-item.startTime : 0,
                    et = item.logoEnd>item.logoStart ? item.logoEnd-item.startTime : 0;
                if(st >= 0) ll = 'if(gte(t,'+Math.round(st)+'),'+ll+',NAN)';
                if(st >= 0 && et > 0) lt = 'if(lte(t,'+Math.round(et)+'),'+lt+',NAN)';
                filters += '[media];[1:v]scale='+lw+':'+lh+'[logo];[media][logo]overlay=\''+ll+'\':\''+lt+'\'';
            }
            result.cmd.push('-filter_complex', filters);
        }

        //如果输出视频
        if(item.totype === 'video'){
            if(item.type === 'video'){
                if(bitv) result.cmd.push('-vb', bitv+'k');
            }
            if(item.type !== 'image'){
                if(bita) result.cmd.push('-ab', bita+'k');
            }
            if(item.type !== 'audio') result.cmd.push('-pix_fmt', 'yuv420p');

            if(item.split){
                if(item.vchannel) result.cmd.push('-map', item.vchannel);

                result.cmd.push(outPath+'.'+item.toformat);

                if(item.achannel){
                    if(item.aclayout > 1){
                        //2...
                        if(utils.has(outPath+'_left.mp3')) exists.push('_left.mp3');
                        if(utils.has(outPath+'_right.mp3')) exists.push('_right.mp3');
                        result.cmd.push('-map_channel', item.achannel.replace(':','.')+'.0', outPath+'_left.mp3', '-map_channel', item.achannel.replace(':','.')+'.1', outPath+'_right.mp3');
                    }else{
                        //2...
                        if(utils.has(outPath+'.'+item.toformat)) exists.push('.mp3');
                        result.cmd.push('-map', item.achannel, outPath+'.mp3');
                    }
                }
            }else{
                //2...
                if(utils.has(outPath+'.'+item.toformat)) exists.push('.'+item.toformat);
                result.cmd.push(outPath +'.'+ item.toformat);
            }
        }
        
        //如果输出图片
        if(item.totype === 'image'){
            //2...
            if(utils.has(outPath+'.'+item.toformat)) exists.push('.'+item.toformat);
            if(item.toformat !== 'gif') result.cmd.push('-vframes',1);
            result.cmd.push(outPath +'.'+ item.toformat);
        }

        //如果有预览图
        if(item.cover && !item.series){
            w = item.coverWidth;
            h = Math.round(w * item.scale);
            if(w%2 !== 0) w--;
            if(h%2 !== 0) h--;

            result.cmd.push('-map', item.vchannel);
            if(item.coverTime > 0) result.cmd.push('-ss', item.coverTime - item.startTime);
            if(item.duration > 0) result.cmd.push('-vframes', 1);
            //2...
            if(utils.has(outPath+'.'+item.toformat)) exists.push('_thumb.jpg');
            result.cmd.push('-s', w+'x'+h, outPath+'_thumb.jpg');
        }

        //如果文件已存在，枚举所有
        if(exists.length){
            let i = 0, len = exists.length, msg = '<p><b>输出的以下文件已存在：</b></p><ol>';
            for(; i<len; i++){
                msg += `<li>${outPath+exists[i]}</li>`;
            }
            msg += '</ol>';
            result.error = new Error(msg);
            result.error.code = 2;
        }
        exists = null;
        return result;
    },
    convert(o){
        let self = this,
            line,
            ffmpeg;

        if(!o.command) return;
        if(!o.command.length) return;

        o.command.unshift('-hide_banner','-y');

        ffmpeg = childprocess.spawn(config.ffmpegPath, o.command);
        ffmpeg.stderr.on('data', (stderr)=>{
            line = stderr.toString().trim();
            //console.log(line); //debug
            if(o.progress){
                line = /time=\s*([\d\:\.]+)?/.exec(line);
                if(line) o.progress( utils.timemat(line[1]) / 1000 );
            }
        });
        ffmpeg.once('close', (a, b)=>{
            self.ffmpeg = null;
            if(o.complete) o.complete(a, b);
        });
        ffmpeg.once('error', (err)=>{
            self.ffmpeg = null;
            if(o.complete) o.complete(2, '启动失败 '+err);
        });
        self.ffmpeg = ffmpeg;
    },
    concat(type,items, output){
        let _this = this,
            listExt = type === 'video' ? '.ts' : '.mp3',
            w = Math.round(items[0].towidth),
            h = Math.round(items[0].toheight),
            total = 0,
            allTotal = 0,
            i = 0,
            command = [],
            list = null,
            bitv = 0,
            bita = 0;

        if(w%2 !== 0) w--;
        if(h%2 !== 0) h--;

        try{
            fs.unlinkSync(CONCAT_TEMP_LIST_FILE);
        }catch(err){}

        list = fs.createWriteStream(CONCAT_TEMP_LIST_FILE, {
            flags: 'a',
            encoding: 'utf-8',
            mode: '0666'
        });

        utils.dialog.show = true;
        if(items[i]){
            utils.dialog.title = '处理进度';
            utils.dialog.body = '准备就绪...';
            recycle(items[i]);
        }else{
            utils.dialog.body = '文件输入错误!';
        }

        function recycle(item){
            bita = item.bita < config.output.bita ? item.bita : config.output.bita;
            bitv = Math.round(item.quality*(item.bitv+item.bita)/100 - bita);
            command.splice(0,command.length);

            total = item.endTime - item.startTime;
            allTotal += total;
            if(total > 0){
                if(item.startTime > 0) command.push('-ss', item.startTime);
                if(item.endTime < item.duration) command.push('-t', total);
            }

            command.push('-i', item.path)
            if(w && h) command.push('-s', w+'x'+h);
            if(type === 'video') command.push('-pix_fmt', 'yuv420p', '-filter_complex', 'setsar=1/1');
            if(type === 'video' && bitv) command.push('-vb', bitv+'k');
            command.push(utils.path(config.temp+'\\'+i+listExt));

            list.write(`file '${config.temp}/${i+listExt}'\n`);

            _this.convert({
                command,
                progress(time){
                    utils.dialog.body = '正在处理“'+item.path+'”...'+Math.round(time/total * 100) + '%';
                },
                complete(code, msg){
                    if(code === 0){
                        i++;
                        if(items[i]){
                            recycle(items[i]);
                        }else{
                            list.end();
                            command.splice(0, command.length);
                            command.push('-f', 'concat', '-i', CONCAT_TEMP_LIST_FILE);
                            if(type === 'video') command.push('-q', 1);
                            command.push(output);

                            _this.convert({
                                command,
                                progress(time){
                                    utils.dialog.body = '正在拼接...' + Math.round(time/allTotal * 100) + '%';
                                },
                                complete(c, m){
                                    if(c === 0) utils.dialog.body = '拼接完成 100%。文件位置：“'+output+'”。';
                                    else utils.dialog.body = '拼接失败！失败信息：' + m;
                                }
                            });
                        }
                    }else{
                        utils.dialog.show = true;
                        utils.dialog.body = '拼接失败:'+msg;
                    }
                }
            });
        }
    },
    mix(type, items, output) {
        let len = items.length,
            i = 0,
            command = [],
            total = 0,
            countTotal = 0,
            w = 0,
            h = 0,
            item;
        for (; i < len; i++) {
            item = items[i];
            total = item.endTime - item.startTime;
            if (total > 0) {
                if (item.startTime > 0) command.push('-ss', item.startTime);
                if (item.endTime < item.duration) command.push('-t', total);
            }
            command.push('-i', item.path);
            if(item.type === 'video'){
                if(!w && !h){
                    w = Math.round(item.towidth);
                    h = Math.round(item.toheight);
                    if(w%2 !== 0) w--;
                    if(h%2 !== 0) h--;
                }
                if(!countTotal) countTotal = total;
            }
        }
        command.push('-filter_complex', 'amix=inputs=' + len);
        if(w>0 && h>0) command.push('-s', w+'x'+h);
        command.push('-shortest', output);

        utils.dialog.show = true;
        utils.dialog.title = '处理进度';
        utils.dialog.body = '准备就绪...';
        this.convert({
            command,
            progress(time){
                utils.dialog.body = '正在混合...' + Math.round(time/countTotal * 100) + '%';
            },
            complete(code, msg){
                if(code === 0) utils.dialog.body = '拼接完成 100%。文件位置：“'+output+'”。';
                else utils.dialog.body = '拼接失败！失败信息：' + msg;
            }
        });
    }*/
};