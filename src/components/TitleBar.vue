<template>
    <div class="titlebar gradient-bar-top">
        <h1 class="title draggable">{{title}}</h1>
        <div class="titlebar-tool">
            <button v-on:click="minimize">&minus;</button>
            <button v-on:click="toggle" class="full"><i></i></button>
            <button v-on:click="close">&times;</button>
        </div>
    </div>
</template>

<script>
    import vars from '../vars.js';
    import user from '../user.js';

    const win = vars.win;
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
    .titlebar{
        border-bottom: 1px solid var(--gray4);
    }
    .title{
        font-size: 20px;
        color: var(--gray7);
    }
    .titlebar-tool{
        float: right;
    }
</style>