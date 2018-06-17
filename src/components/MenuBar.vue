<template>
    <div class="menu-bar">
        <div class="menu-item" v-on:click="showSubmenu" data-name="files">
            文件(Alt+F)
            <sub-menu :items="fileSubmenu"/>
        </div>
        <div class="menu-item" v-on:click="showSubmenu" data-name="setter">
            设置(Alt+S)
            <sub-menu :items="setterSubmenu"/>
        </div>
        <div class="menu-item" v-on:click="showSubmenu" data-name="fun">
            功能(Alt+U)
            <sub-menu :items="funSubmenu"/>
        </div>
        <div class="menu-item" v-on:click="showSubmenu" data-name="about">
            关于(Alt+A)
            <sub-menu :items="aboutSubmenu"/>
        </div>
    </div>
</template>

<script>
    import SubMenu from './SubMenu.vue';
    import els from '../els.js';

    export default {
        name: "menu-bar",
        data(){
            return {
                fileSubmenu: [
                    {id: 'open', name: '打开文件(Ctrl+O)'},
                    {id: 'save', name: '输出到(Ctrl+S)'},
                    {id: 'clear', name: '清空文件(Ctrl+Delete)'},
                    {id: 'exit', name: '退出程序(Ctrl+Q)'}
                ],
                setterSubmenu: [],
                funSubmenu: [
                    {id: 'capture', name: '屏幕录制'},
                    {id: 'pdf2img', name: 'PDF转图片'},
                    {id: 'imgJoin', name: '图片拼接'},
                    {id: 'mediaJoin', name: '音/视频拼接'},
                    {id: 'mediaMix', name: '音/视频混合'}
                ],
                aboutSubmenu: [
                    {id: 'aid', name: '急救卡机'},
                    {id: 'help', name: '帮助文档'},
                    {id: 'version', name: '版本更新'}
                ]
            }
        },
        mounted(){
            let el = this.$el,
                items = el.querySelectorAll('.menu-item'),
                len = items.length;
            function clearActive(skip){
                for(let i=0; i<len; i++){
                    if(items[i] === skip) continue;
                    items[i].classList.remove('active');
                }
            }
            document.addEventListener('click', (e)=>{
                if(!el.contains(e.target)){
                    clearActive();
                }
            });
            document.addEventListener('keyup', (e)=>{
                if(e.altKey){
                    switch (e.key.toLowerCase()){
                        case 'f':
                            clearActive(items[0]);
                            items[0].classList.toggle('active');
                            break;
                        case 's':
                            clearActive(items[1]);
                            items[1].classList.toggle('active');
                            break;
                        case 'u':
                            clearActive(items[2]);
                            items[2].classList.toggle('active');
                            break;
                        case 'a':
                            clearActive(items[3]);
                            items[3].classList.toggle('active');
                            break;
                    }
                }
                if(e.ctrlKey){
                    switch (e.key.toLowerCase()){
                        case 'o':
                            els.open();
                            break;
                        case 's':
                            els.outputEl.click();
                            break;
                        case 'delete':
                            break;
                        case 'q':
                            break;
                    }
                }
            });
        },
        components: {
            SubMenu
        },
        methods: {
            showSubmenu(e){
                let el = this.$el,
                    items = el.querySelectorAll('.menu-item'),
                    len = items.length;
                for(let i=0; i<len; i++){
                    if(items[i] !== e.currentTarget)
                        items[i].classList.remove('active');
                }
                e.currentTarget.classList.toggle('active');
                switch (e.target.dataset.name){
                    case 'open':
                        els.open();
                        break;
                    case 'save':
                        els.outputEl.click();
                        break;
                }
            }
        }
    }
</script>
<style>
    .menu-bar{
        height: 30px;
        font-size: 0;
        user-select: none;
        -webkit-user-drag: none;
        white-space: nowrap;
        background: var(--menubarBg);
        border-bottom: 1px solid var(--menubarBorderBottom);
    }
    .menu-item{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        padding: 3px 4px;
        color: var(--menuItemText1);
        font-size: 15px;
        line-height: 1;
        margin: 4px;
        cursor: pointer;
        border-radius: 3px;
        transition: all .5s;
    }
    .menu-item:hover,
    .menu-item.active{
        background: var(--menuItemHover1);
    }
    .menu-item>.submenu{
        top: 100%;
        left: 0;
    }
    .menu-item.active>.submenu{
        display: block;
        transform-origin: top;
        animation: slideToBottom .5s;
        animation-fill-mode: forwards;
    }
</style>
