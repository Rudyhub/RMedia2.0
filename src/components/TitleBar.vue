<template>
    <div class="title-bar drag">
        <img class="logo" :src="'./favicon.ico'" alt="">
        <span class="title">{{title}}</span>
        <div class="title-btn-group no-drag">
            <span class="title-btn win-minimize" v-on:click="minimize">&minus;</span>
            <span class="title-btn win-toggle" v-on:click="toggle"><i></i></span>
            <span class="title-btn win-close"  v-on:click="close">&times;</span>
        </div>
    </div>
</template>

<script>
    /* global nw */
    import user from '../user.js';
    const win = nw.Window.get();

    export default {
        name: "title-bar",
        data(){
            return {
                title: user.title || ''
            }
        },
        methods: {
            minimize(){
                win.minimize();
            },
            toggle(e){
                let classList = e.currentTarget.classList,
                    w = screen.width * .8,
                    h = Math.round(w * .5625),
                    x = (screen.width - w) / 2,
                    y = (screen.height - h) / 2;
                classList.toggle('full');
                if(classList.contains('full')){
                    win.maximize();
                }else{
                    win.moveTo(x, y);
                    win.resizeTo(w, h);
                }
            },
            close(){
                win.close(true);
            }
        }
    }
</script>
<style>
    .title-bar{
        background: var(--titleBar2) -webkit-linear-gradient( top, var(--titleBar1), var(--titleBar2) 90%);
        border-bottom: 1px solid var(--titleBarBorder1);
        height: 35px;
        line-height: 35px;
        position: relative;
    }
    .title{
        font-size: 16px;
        color: var(--titleText);
        vertical-align: middle;
        height: 96%;
    }
    .logo{
        vertical-align: middle;
        margin: 0 10px;
    }
    .title-btn-group{
        position: absolute;
        right: 10px;
        top: 0;
    }
    .title-btn{
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        overflow: hidden;
        font-size: 20px;
        text-align: center;
        line-height: 16px;
        color: var(--winBtnText);
        margin: 0 5px;
        cursor: pointer;
        border: 1px solid var(--color5);
    }
    .win-minimize{
        background: var(--winBtn1);
    }
    .win-toggle{
        background: var(--winBtn2);
    }
    .win-toggle i{
        display: block;
        width: 8px;
        height: 8px;
        border: 1px solid var(--winBtnText);
        margin: 5px;
    }
    .win-close{
        background: var(--winBtn3);
    }
    .win-minimize:hover{
        background: var(--winBtnHover1);
    }
    .win-toggle:hover{
        background: var(--winBtnHover2);
    }
    .win-close:hover{
        background: var(--winBtnHover3);
    }
</style>