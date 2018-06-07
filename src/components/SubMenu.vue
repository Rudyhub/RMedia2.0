<template>
    <ul class="submenu" :class="{'zoom-in':drop==='more'}" :style="{top:toolbar.y+'px',left:toolbar.x+'px'}" v-drag>
        <li data-drag class="drag-bar"></li>
        <li class="submenu-item">
            <button class="submenu-btn" name="capture" v-on:click="submenuFn" :class="{'active-1': drop === 'capture'}">
                <i class="icon icon-camera"></i> 屏幕录制
            </button>
        </li>
        <li class="submenu-item">
            <button class="submenu-btn" name="pdf2pic" v-on:click="submenuFn">
                <i class="icon icon-library"></i> PDF转图片
            </button>
        </li>
        <li class="submenu-item">
            <button class="submenu-btn" name="sprite" v-on:click="submenuFn" :class="{'active-1': drop === 'sprite'}">
                <i class="icon icon-table2"></i> 图片拼接
            </button>
        </li>
        <li class="submenu-item">
            <button class="submenu-btn" name="concat" v-on:click="submenuFn">
                <i class="icon icon-loop"></i> 音/视频拼接
            </button>
        </li>
        <li class="submenu-item">
            <button class="submenu-btn" name="mix" v-on:click="submenuFn">
                <i class="icon icon-shuffle"></i> 音/视频混合
            </button>
        </li>
        <li class="submenu-item">
            <button class="submenu-btn" name="firstAid" v-on:click="submenuFn">
                <i class="icon icon-aid-kit"></i> 崩溃急救
            </button>
        </li>
        <li class="submenu-item">
            <button class="submenu-btn" name="helpBook" v-on:click="submenuFn">
                <i class="icon icon-book"></i> 帮助文档
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "sub-menu",
        props: ['drop'],
        methods: {
            submenuFn(){

            }
        }
    }
</script>

<style scoped>

</style>