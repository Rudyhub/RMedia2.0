/* global nw */
import cp from 'child_process';
import fs from 'fs';
import path from 'path';

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

let readFile = fs.readFileSync(path.join(appRoot,'user.json'), 'utf-8'),
	user;
if(readFile){
	user = JSON.parse(readFile);
}else{
	user = {};
}

user.appRoot = appRoot;
user.ffmpegPath = ffmpegPath;
user.audioThumb = path.join(appRoot, 'icons','audio.jpg');
user.outPath = path.join(nw.process.env.USERPROFILE,'desktop');

export default user;