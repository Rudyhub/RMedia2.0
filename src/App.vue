<template>
    <div id="app">
        <header-bar/>
        <main-body/>
    </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import MainBody from './components/MainBody.vue';

export default {
    name: 'app',
    components: {
        HeaderBar,
        MainBody
    }
}
</script>
<style>
    #app{
        height: 100%;
    }
</style>
