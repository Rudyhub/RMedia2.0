<template>
    <header>
        <title-bar :store="store"/>
        <menu-bar :store="store"/>
    </header>
</template>

<script>
    import TitleBar from './TitleBar';
    import MenuBar from "./MenuBar";

    export default {
        name: "header-bar",
        props: ['store'],
        components: {
            MenuBar,
            TitleBar,
        }
    }
</script>