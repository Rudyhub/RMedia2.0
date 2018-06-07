<template>
  <div id="app">
    <HeaderBar :store="store"/>
  </div>
</template>

<script>
import g from './global';
import config from './config';
import HeaderBar from './components/HeaderBar'

const nw = g.nw;
export default {
    name: 'app',
    data(){
        return {
            store:{
                output: config.output.folder,
                items: {},
                viewWidth: screen.availWidth * .19,
                viewScale: .5625,
                isStarted: false,
                winToggle: true,
                batchParams: {
                    speed: 'slow',
                    nameAll: nw.App.manifest.name,
                    widthLimit: config.output.width,
                    heightLimit: config.output.height,
                    sizeLimit: 0,
                    logo: ''
                },
                toolbar: {
                    drop: 0,
                    toggle: {
                        lock: 1,
                        alpha: 1
                    },
                    x: 0,
                    y: 0
                },
                active: {
                    mainSubmenu: ''
                },
                capParams: {
                    mode: 0,
                    bitv: config.output.bitv,
                    bita: config.output.bita,
                    widthLimit: config.output.width,
                    width: screen.width,
                    height: screen.height,
                    x: 0,
                    y: 0,
                    fps: config.output.fps,
                    audioDevices: [],
                    audioDevice: ''
                },
                sprite: {
                    preview: false,
                    align: 1,
                    items: [],
                    listCss: '',
                    itemCss: '',
                    imgCss: ''
                },
                framestep: 2
            }
        }
    },
    components: {
        HeaderBar
    }
}
</script>

<style>

</style>
