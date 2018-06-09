<template>
  <div id="app">
    <header-bar :store="store"/>
    <dialog-bar :dialog="store.dialog"/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar';
import store from './store.js';
import DialogBar from './components/DialogBar';

export default {
    name: 'app',
    data(){
        return {
            store
        }
    },
    components: {
        HeaderBar,
        DialogBar
    }
}
</script>

<style>

</style>
