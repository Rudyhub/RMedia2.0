<template>
    <ul class="submenu">
        <li class="submenu-item" v-for="(val, k) of items" v-bind:key="k" :class="(val.items && val.items.length) ? 'submenu-trg':''" :data-name="val.id || k">
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
    .submenu{
        position: absolute;
        left: 100%;
        top: 0;
        margin: 0;
        padding: 0;
        list-style: none;
        display: none;
        background: var(--submenuBg);
        z-index: 100;
        border: 1px solid var(--submenuBorder);
        border-radius: 3px;
    }
    .submenu-item{
        position: relative;
        padding: 6px 12px;
        border-bottom: 1px solid var(--subItemBorder);
        min-width: 60px;
        font-size: 14px;
    }
    .submenu-item:last-child{
        border-bottom: none;
    }
    .submenu-item:hover{
        background: var(--subItemHoverBg);
    }
    .submenu-item:hover>.submenu{
        display: block;
        transform-origin: left;
        animation: slideToRight .5s;
        animation-fill-mode: forwards;
    }
    .submenu-trg:after{
        content: '';
        display: block;
        border-left: 8px solid;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        position: absolute;
        right: 1px;
        top: 7px;
    }
</style>