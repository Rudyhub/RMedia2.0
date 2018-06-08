<template>
  <div id="app">
    <header-bar :store="store"/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar';
import store from './store.js';

export default {
    name: 'app',
    data(){
        return {
            store
        }
    },
    components: {
        HeaderBar
    }
}
</script>

<style>

</style>
