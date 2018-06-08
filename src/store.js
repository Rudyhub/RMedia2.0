import vars from './vars.js';
import defaults from './defaults.js';

const store = {
    output: defaults.output.folder,
    items: {},
    viewWidth: screen.availWidth * .19,
    viewScale: .5625,
    isStarted: false,
    winToggle: true,
    batchParams: {
        speed: 'slow',
        nameAll: vars.nw.App.manifest.name,
        widthLimit: defaults.output.width,
        heightLimit: defaults.output.height,
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
        bitv: defaults.output.bitv,
        bita: defaults.output.bita,
        widthLimit: defaults.output.width,
        width: screen.width,
        height: screen.height,
        x: 0,
        y: 0,
        fps: defaults.output.fps,
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
};

export default store;