// const path = require('path');
// import config from './config.js';
const inputEl = document.createElement('input');
const outputEl = document.createElement('input');

inputEl.type = outputEl.type = 'file';
inputEl.multiple = true;
outputEl.nwdirectory = true;

/*
function listItems(files){
    let i = 0,
        item,
        hex,
        key;

    function recycle(file){
        item = {
            path: file.path,
            thumb: '',
            canplay: false,
            playing: 0,
            progress: 0,
            lock: store.toolbar.toggle.lock,
            alpha: store.toolbar.toggle.alpha,
            type: '',
            series: false,
            logo: '',
            logoX: 1,
            logoY: 2,
            logoScale: 0,
            logoSize: 12,
            logoStart: 0,
            logoEnd: 0,

            duration: 0,
            startTime: 0,
            endTime: 0,
            currentTime: 0,
            coverTime: 0,
            cover: false,
            coverWidth: 480,

            name: file.name,
            toname: '',

            bitv: 0,
            bita: 0,

            size: (parseInt(file.size) || 0),
            quality: 0,

            scale: 0,
            width: 0,
            towidth: 0,
            height: 0,
            toheight: 0,

            format: '',
            toformat: '',

            fps: 0,
            tofps: 0,

            split: false,
            achannel: '',
            aclayout: 0,
            vchannel: ''
        };

        hex = crypto.createHash('md5');
        hex.update(file.path);
        key = hex.digest('base64');
        vue.$set(vue.items, key, item);

        Media.info({
            input: file.path,
            success: (json)=>{
                item.thumb = json.thumb;
                item.type = json.type;

                item.duration = json.duration;

                item.bitv = json.bitv || json.bit;
                item.bita = json.bita;

                item.scale = (json.height / json.width) || vue.viewScale;
                item.width = json.width;
                item.height = json.height;

                item.format = json.ext;
                item.canplay = (/(mp4|mp3|ogg|mpeg|mkv|wav|webm)/i.test(json.ext));
                item.fps = json.fps;

                item.achannel = json.achannel;
                item.aclayout = json.aclayout;
                item.vchannel = json.vchannel;

                vue.reItem(item);

                i++;
                if(files[i]) recycle(files[i]);
            },
            fail: (err)=>{
                utils.dialog.show = true;
                utils.dialog.body = `<p>文件：“${file.name}”可能不支持！是否保留以尝试转码？</p>
                    <details class="dialog-details">
                        <summary>详细错误</summary>
                        <p>${err}</p>
                    </details>`;
                utils.dialog.setBtn('是','否');
                utils.dialog.callback = function(code){

                    if(code === 1){
                        window.URL.revokeObjectURL(vue.items[key].thumb);
                        vue.$delete(vue.items, key);
                    }
                    i++;
                    if(files[i]) recycle(files[i]);
                };
            }
        });
    }

    if(files.length){
        recycle(files[0]);
    }
}*/
export default {
    // eslint-disable-next-line
    nw,
    // eslint-disable-next-line
    win: nw.Window.get(),
    inputEl,
    outputEl
    // listItems,
    // store
}