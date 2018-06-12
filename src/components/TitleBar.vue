<template>
    <div class="title-bar gradient-bar-top drag">
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
        border-bottom: 1px solid var(--gray5);
        height: 35px;
        line-height: 35px;
        position: relative;
    }
    .title{
        font-size: 16px;
        color: var(--gray8);
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
        color: #fff;
        margin: 0 5px;
        cursor: pointer;
        border: 1px solid #aaa;
    }
    .win-minimize{
        background: #e4ab2c;
    }
    .win-toggle{
        background: #28a745;
    }
    .win-toggle i{
        display: block;
        width: 8px;
        height: 8px;
        border: 1px solid #fff;
        margin: 5px;
    }
    .win-close{
        background: #e34c26;
    }
    .win-minimize:hover{
        background: #d0971c;
    }
    .win-toggle:hover{
        background: #1d9439;
    }
    .win-close:hover{
        background: #cf4b1c;
    }
</style>