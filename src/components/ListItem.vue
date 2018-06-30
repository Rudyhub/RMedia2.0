<template>
    <div class="item">
        <div class="item-inner">
            <div class="item-view" :class="{alpha: item.alpha}"
             :style="{
                    padding: item.scale<viewScale ? (viewWidth*(viewScale-item.scale)/2+'px 0') : ('0 '+viewWidth*(1-viewScale/item.scale)/2+'px'),
                    height: (viewWidth * viewScale)+'px'
                }">
                <div class="item-media-box">
                    <img class="item-media" :src="item.thumb" alt="" v-show="!item.playing">
                    <video ref="v" class="item-media" v-if="item.thumb" v-show="item.playing" :src="item.path" @timeupdate="timeupdate"></video>
                    <div class="loading" v-else><i class="loading-icon icon icon-spinner9"></i></div>
                </div>
                <div class="item-time" v-if="item.duration">{{item.currentTime | timemat}} / {{item.duration | timemat}}</div>
            </div>
            <div class="item-controls">
                <div class="item-controls-media float-l" :class="item.canplay?'':'disabled'">
                    <i class="item-tool v-mid icon" :class="item.playing ? 'icon-pause active':'icon-play2'" @click="play"></i>
                    <i class="item-tool v-mid icon icon-previous" :title="'后退'+framestep+'帧'" @click="prevFrames"></i>
                    <input class="item-frame-step v-mid" type="number" v-model="framestep" title="微调帧数">
                    <i class="item-tool v-mid icon icon-next" :title="'前进'+framestep+'帧'" @click="nextFrames"></i>
                    <span class="item-txt v-mid">{{item.currentTime*item.fps | mathRound}} / {{item.duration*item.fps | mathRound}}</span>
                </div>
                <div class="float-r">
                    <i class="item-tool v-mid icon icon-pushpin" v-on:click="$parent.toolsFn($event,uniqid,'lock')" title="锁定/解锁" :class="{active: item.lock}"></i>
                    <i class="item-tool v-mid icon icon-contrast" v-on:click="$parent.toolsFn($event,uniqid,'alpha')" title="显示/隐藏alpha通道" :class="{active: item.alpha}"></i>
                    <i class="item-tool v-mid icon icon-bin" v-on:click="$parent.toolsFn($event,uniqid,'delete')" title="删除"></i>
                </div>
            </div>
            <div class="item-tracks-bar">
                <div class="item-range-hand" :style="'left:'+item.currentTime/item.duration*100+'%'"></div>
                <input v-if="item.duration" class="item-controls-range" type="range" title="时间" :value="item.currentTime" min="0" :max="item.duration" step="0.001"
                       :style="'background-image: linear-gradient(90deg, var(--rangeLoaded), var(--rangeLoaded) '+item.currentTime/item.duration*100+'%, transparent '+item.currentTime/item.duration*100+'%)'"
                       @input="rangeInput">
                <div class="item-tracks" @contextmenu.prevent="tracksContextmenu">
                    <div class="item-track" v-for="(track, trackId) of tracks" :key="trackId" :title="track.name" :dataId="track.id" :dataType="track.type">
                        {{track.name}}
                    </div>
                </div>
            </div>
            <div v-for="(v, k) in item" v-bind:key="k">
                {{k+': '+v}}
            </div>
        </div>
    </div>
</template>

<script>
    /* globalss nw */
    import user from "../user";
    import Media from '../Media';
    import utils from "../utils";

    const trackMenu = utils.trackMenu();

    export default {
        name: "list-item",
        props: ['item','uniqid'],
        data(){
            return {
                viewWidth: (window.innerWidth * 33.3)/100 - 14,
                viewScale: user.viewScale,
                framestep: 2,
                tracks: []
            }
        },
        methods:{
            thumb(time){
                let _this = this;
                window.URL.revokeObjectURL(_this.item.thumb);
                _this.item.thumb = Media.preview(_this.uniqid, _this.item.path, time);
                /*

                Media.thumb({
                    time: time,
                    input: _this.item.path,
                    format: 'jpg',
                    success(src){
                        _this.item.thumb = src;
                    }
                });
                */
            },
            play(){
                let _this = this,
                    video = _this.$refs.v;

                video.currentTime = _this.item.currentTime;

                if(video.paused){
                    video.play();
                }else{
                    video.pause();
                    _this.thumb(video.currentTime);
                }
                _this.item.playing = !video.paused;
            },
            timeupdate(){
                this.item.currentTime = this.$refs.v.currentTime;
            },
            rangeInput(e){
                let _this = this,
                    currentTime = e.currentTarget.value;
                if(_this.$refs.v.paused){
                    _this.thumb(currentTime);
                    _this.item.currentTime = parseFloat(currentTime);
                }
            },
            prevFrames(){
                let _this = this,
                    step = (1/this.item.fps)*this.framestep;
                if(_this.item.currentTime > step){
                    _this.item.currentTime -= step;
                }else{
                    _this.item.currentTime = 0;
                }
                _this.thumb(_this.item.currentTime);
            },
            nextFrames(){
                let _this = this,
                    step = (1/this.item.fps)*this.framestep;
                if(_this.item.currentTime < _this.item.duration - step){
                    _this.item.currentTime += step;
                }else{
                    _this.item.currentTime = this.item.duration;
                }
                _this.thumb(_this.item.currentTime);
            },
            tracksContextmenu(e){
                trackMenu.el.style.top = e.clientY + 'px';
                trackMenu.el.style.left = e.clientX + 'px';
                trackMenu.fn = (code)=>{
                    if(code === 0){
                        this.tracks.push({
                            id: 'a',
                            name: 'asgddash',
                            type: 'video'
                        });
                    }
                    console.log(code);
                };
                document.body.appendChild(trackMenu.el);
            }
        },
        filters: {
            mathRound(v){
                return Math.round(v);
            },
            timemat(time){
                if(isNaN(time)) return '00:00:00';
                let h = Math.floor( time/3600 ).toString(),
                    m = Math.floor( (time%3600) / 60 ).toString(),
                    s = Math.floor( time%60 ).toString();
                return h.padStart(2,'0') + ':' + m.padStart(2,'0') + ':' + s.padStart(2,'0');
            }
        }
    }
</script>

<style>
    .item{
        width: 33.3vw;
        background: transparent;
        box-sizing: border-box;
        padding: 5px;
        float: left;
    }
    .item-inner{
        width: 100%;
        height: 100%;
        background-color: var(--itemInnerBg);
        font-size: 1vw;
        border-radius: 4px;
        padding: 2px;
        box-sizing: border-box;
    }
    .item-view{
        box-sizing: border-box;
        width: 100%;
        height: calc((33.3vw - 14px) * .5625);
        position: relative;
        background-color: var(--itemViewBg);
    }
    .item-time{
        position: absolute;
        color: #fff;
        bottom: 0;
        left: 0;
        padding: 5px;
        font-size: 14px;
        line-height: 1;
        z-index: 1;
    }
    .item-media-box{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .item-media{
        width: 100%;
        height: 100%;
        display: block;
    }
    .item-controls{
        color: var(--controlColor);
        background-color: var(--controlBg);
        padding: 4px;
        line-height: 1;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
    }
    .item-controls-media{
        width: calc(100% - 80px);
    }
    .item-frame-step{
        width: 3em;
        padding: 0;
        border-radius: 2px;
        text-align: center;
        border: 1px solid var(--controlColor);
        box-sizing: border-box;
    }
    .disabled .item-frame-step{
        color: var(--controlBg);
        background-color: var(--controlColor);
    }
    .item-tool{
        cursor: pointer;
        border-radius: 2px;
        padding: 3px;
    }
    .item-tool:hover{
        background-color: var(--controlIconHoverBg);
    }
    .item-tool.active,
    .item-tool:active{
        color: var(--controlIconActive);
        background-color: var(--controlIconActiveBg);
    }
    .item-tracks-bar{
        position: relative;
        height: 120px;
        overflow: auto;
    }
    .item-controls-range{
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10px;
        box-sizing: border-box;
        -webkit-appearance: none;
        outline: none;
        margin: 0;
        background-color: var(--rangeBg);
        cursor: pointer;
        display: block;
    }
    .item-controls-range::-webkit-slider-runnable-track{
        background: transparent;
    }
    .item-controls-range::-webkit-slider-thumb{
        width: 6px;
        height: 10px;
        opacity: 0;
        background-color: var(--rangeLoaded);
        -webkit-appearance: none;
        display: block;
    }
    .item-range-hand{
        position: absolute;
        left: 0;
        top: 0;
        border-left: var(--rangeHand);
        width: 0;
        height: 100%;
    }
    .item-tracks{
        background-color: #eee;
        height: calc(100% - 10px);
    }
    .item-track{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        width: 100%;
        height: 14px;
        line-height: 14px;
        border: 1px solid #ddd;
        box-sizing: border-box;
        background-color: #fff;
    }
    .track-menu{
        font-size: 14px;
        background-color: #fff;
        box-shadow: #555 0 0 3px;
        text-align: center;
        position: fixed;
        border-radius: 4px;
        color: #333;
        overflow: hidden;
    }
    .track-menu-item{
        border-bottom: #ddd 1px solid;
        padding: 3px 10px;
        cursor: pointer;
    }
    .track-menu-item:hover{
        background-color: #ddd;
    }
</style>