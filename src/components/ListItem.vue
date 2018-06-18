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
        props: ['item'],
        data(){
            return {
                viewWidth: screen.availWidth * .33 - 14,
                viewScale: user.viewScale
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
        background: #fff;
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

</style>