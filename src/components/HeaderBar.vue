<template>
    <header>
        <title-bar/>
        <menu-bar/>
        <!--<sub-menu :toolbar="store.toolbar"/>-->
        <!--<batch-panel :store="store"/>-->
    </header>
</template>

<script>
    import TitleBar from './TitleBar.vue';
    import MenuBar from "./MenuBar.vue";
    // import SubMenu from "./SubMenu.vue";
    // import BatchPanel from "./BatchPanel.vue";

    export default {
        name: "header-bar",
        components: {
            TitleBar,
            MenuBar
        }
    }
</script>