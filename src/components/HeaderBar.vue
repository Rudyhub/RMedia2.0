<template>
    <header>
        <title-bar title="标题"></title-bar>
        <menu-bar></menu-bar>
        <sub-menu></sub-menu>
    </header>
</template>

<script>
    import TitleBar from './TitleBar';
    import MenuBar from './MenuBar';

    export default {
        name: "header-bar",
        props: ['store'],
        components: {
            TitleBar,
            MenuBar
        }
    }
</script>

<style>

</style>