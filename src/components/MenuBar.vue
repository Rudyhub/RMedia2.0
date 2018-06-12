<template>
    <div class="menu-bar">
        <div class="menu-item" v-on:click="showSubmenu">
            文件
            <sub-menu :items="fileSubmenu"/>
        </div>
        <div class="menu-item" v-on:click="showSubmenu">
            设置
            <sub-menu :items="setterSubmenu"/>
        </div>
        <div class="menu-item">功能</div>
        <div class="menu-item">关于</div>
    </div>
</template>

<script>
    import SubMenu from './SubMenu.vue';

    export default {
        name: "menu-bar",
        data(){
            return {
                fileSubmenu: [
                    {name: 'Item 1'},
                    {name: 'Item 2'},
                    {name: 'Item 3',items: [{name: 'subitem 1'}, {name: 'subItem 2'}]}
                ],
                setterSubmenu: [
                    {name: 'Item 1'},
                    {name: 'Item 2'},
                    {name: 'Item 3',items: [{name: 'subitem 1'}, {name: 'subItem 2'}]}
                ]
            }
        },
        components: {
            SubMenu
        },
        methods: {
            showSubmenu(e){
                e.currentTarget.classList.toggle('active');
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
