<template>
    <div class="item">
        <div class="item-inner">
            <img :src="item.thumb" alt="">
            <div v-for="(v, k) in item" v-bind:key="k">
                {{k+': '+v}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list-item",
        props: ['item']
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
</style>