<template>
    <div class="item">
        <div class="item-inner">{{item}}</div>
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
        height: 30vw;
        background: transparent;
        box-sizing: border-box;
        padding: 5px;
        float: left;
    }
    .item-inner{
        width: 100%;
        height: 100%;
        background: #fff;
        font-size: .2vw;
        border-radius: 4px;
    }
</style>