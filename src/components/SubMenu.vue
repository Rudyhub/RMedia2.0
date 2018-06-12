<template>
    <ul class="submenu">
        <li class="submenu-item" v-for="(val, k) of items" v-bind:key="k">
            {{val.name}}
            <sub-menu v-if="val.items" :items="val.items"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "sub-menu",
        props: ['items']
    }
</script>

<style>

</style>