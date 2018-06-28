<template>
    <div class="item">
        <div class="item-inner">
            <div class="item-view" :class="{alpha: item.alpha}"
             :style="{
                    padding: item.scale<viewScale ? (viewWidth*(viewScale-item.scale)/2+'px 0') : ('0 '+viewWidth*(1-viewScale/item.scale)/2+'px'),
                    height: (viewWidth * viewScale)+'px'
                }">
                <div class="item-media-box">
                    <video class="item-media" v-if="item.thumb" :src="item.path" :poster="item.thumb"></video>
                    <div class="loading" v-else><i class="loading-icon icon icon-spinner9"></i></div>
                </div>
            </div>
            <div class="media-control">
                <i class="icon icon-play3"></i>
                <i class="icon icon-previous2" :title="'后退'+framestep+'帧'"></i>
                <input type="number" v-model="framestep" title="微调帧数">
                <i class="icon icon-next2" :title="'前进'+framestep+'帧'"></i>
                <span>{{item.currentTime*item.fps | mathRound}} / {{item.duration*item.fps | mathRound}}</span>

                <div class="item-tools float-r">
                    <i class="item-tool icon icon-pushpin" v-on:click="$parent.toolsFn($event,uniqid,'lock')" title="锁定/解锁" :class="{active: item.lock}"></i>
                    <i class="item-tool icon icon-contrast" v-on:click="$parent.toolsFn($event,uniqid,'alpha')" title="显示/隐藏alpha通道" :class="{active: item.alpha}"></i>
                    <i class="item-tool icon icon-bin" v-on:click="$parent.toolsFn($event,uniqid,'delete')" title="删除"></i>
                </div>
            </div>
            <div>
                <span class="item-time">{{item.currentTime | timemat}} / {{item.duration | timemat}}</span>
            </div>
            <div v-for="(v, k) in item" v-bind:key="k">
                {{k+': '+v}}
            </div>
        </div>
    </div>
</template>

<script>
    import user from "../user";

    export default {
        name: "list-item",
        props: ['item','uniqid'],
        data(){
            return {
                viewWidth: (window.innerWidth * 33.3)/100 - 14,
                viewScale: user.viewScale,
                framestep: 2
            }
        },
        methods:{

        },
        filters: {
            mathRound(v){
                return Math.round(v);
            },
            timemat(time){
                if(isNaN(time)) return '00:00:00';
                let t = time / 1000,
                    h = Math.floor( t/3600 ).toString(),
                    m = Math.floor( (t%3600) / 60 ).toString(),
                    s = Math.floor( t%60 ).toString();
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
    .media-control{
        color: var(--controlColor);
        background-color: var(--controlBg);
        padding: 4px;
        line-height: 1;
    }
    .media-control i,
    .media-control input,
    .media-control span{
        vertical-align: middle;
    }
    .media-control input{
        border: none;
        width: 3em;
        padding: 0;
    }
    .media-control i{
        cursor: pointer;
    }
    .media-control i:hover{
        background-color: var(--controlIconHoverBg);
    }
    .media-control i:active{
        background-color: var(--controlIconActiveBg);
    }
    .media-control span{
        font-size: 14px;
    }
    .item-tools{
        font-size: 14px;
        padding: 3px;
    }
    .item-time{
        padding: 3px 0;
    }
    .item-tool{
        margin: 0 2px;
    }
    .item-tool.active{
        color: #28a745;
    }
</style>