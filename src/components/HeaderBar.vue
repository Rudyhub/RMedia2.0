<template>
    <header>
        <title-bar/>
        <menu-bar/>
    </header>
</template>

<script>
    import TitleBar from './TitleBar.vue';
    import MenuBar from './MenuBar.vue';

    export default {
        name: 'header-bar',
        components: {
            TitleBar,
            MenuBar
        }
    }
</script>