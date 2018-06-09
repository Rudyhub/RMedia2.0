<template>
    <header>
        <title-bar/>
        <menu-bar :store="store"/>
        <sub-menu :toolbar="store.toolbar"/>
        <batch-panel :store="store"/>
    </header>
</template>

<script>
    import TitleBar from './TitleBar';
    import MenuBar from "./MenuBar";
    import SubMenu from "./SubMenu";
    import BatchPanel from "./BatchPanel";

    export default {
        name: "header-bar",
        props: ['store'],
        components: {
            BatchPanel,
            SubMenu,
            MenuBar,
            TitleBar,
        }
    }
</script>