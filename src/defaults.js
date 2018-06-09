import cp from 'child_process';
import fs from 'fs';
import path from 'path';
import vars from './vars';

const nw = vars.nw;

let appRoot = path.dirname(nw.process.execPath),
	ffmpegPath = path.join(appRoot,'ffmpeg', 'ffmpeg.exe'),
	checkPath = cp.spawnSync(ffmpegPath,['-version']);

if(checkPath.error){
	appRoot = nw.process.cwd();
	ffmpegPath = path.join(appRoot,'ffmpeg','ffmpeg.exe');
	checkPath = cp.spawnSync(ffmpegPath, ['-version']);
	if(checkPath.error){
		alert('核心文件丢失，请确保安装目录下的文件夹“ffmpeg/”内有ffmpeg.exe。');
	}
}

//======== 准备临时文件夹 =================

let TEMP_FOLDER = 'temp';
if(fs.existsSync(TEMP_FOLDER)){
    cp.exec('rd /s /q '+TEMP_FOLDER, (err)=>{
        if(err){
            alert('清除临时文件夹时发生了错误。信息如：'+err.message.toString('utf-8'));
		}else{
            fs.mkdirSync(TEMP_FOLDER);
		}
	});
}else{
    fs.mkdirSync(TEMP_FOLDER);
}

nw.process.on('exit',()=>{
	cp.execSync('rd /s /q '+TEMP_FOLDER);
});

let readFile = fs.readFileSync(path.join(appRoot,'config.json'), 'utf-8'),
	usercfg;
if(readFile){
	usercfg = JSON.parse(readFile);
}else{
	usercfg = {};
}

export default {
	appRoot,
	ffmpegPath,
    usercfg,
	temp: TEMP_FOLDER,
    audioThumb: path.join(appRoot, 'icons','audio.jpg'),
	output: {
		folder: path.join(nw.process.env.USERPROFILE,'desktop'),
		width: 1280,
		height: 720,
		bitv: 2048,
		bita: 128,
		fps: 25,
		format: {
			image: 'jpg',
			video: 'mp4',
			audio: 'mp3'
		}
	}
};