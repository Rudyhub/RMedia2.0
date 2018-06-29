<template>
    <main class="main">
        <list-item v-for="(item, key) in items" :key="key" :uniqid="key" :item="item"/>
    </main>
</template>

<script>
    import ListItem from './ListItem.vue';
    import user from '../user.js';
    import els from '../els.js';
    import Media from '../Media.js';

    function resetItem(item){
        let tobitv = item.bitv <= user.bitv ? item.bitv : user.bitv,
            tobita = item.bita <= user.bita ? item.bita : user.bita,
            quality = (tobitv+tobita)/(item.bitv+item.bita)*100;

        item.quality = quality ? quality.toFixed(2) : 100;
        item.toname = user.names+item.name.slice(0, -item.format.length-1);
        item.toformat = item.type !== 'image' || !Media.image.includes(item.format) ?  user[item.type] : item.format;
        item.startTime = 0;
        item.endTime = item.duration;
        item.cover = false;
        item.coverTime = 0;
        item.towidth = item.width > user.width ? user.width : item.width;
        item.toheight = Math.round(item.towidth * item.scale);
        item.tofps = item.fps;
        item.totype = Media.getType(item.toformat);
        item.logoStart = 0;
        item.logoEnd = item.duration;
    }

    export default {
        name: "main-body",
        components: {ListItem},
        mounted(){
            let _this = this,
                space = /^\s+$/,
                scrollTop = 0,
                startY = 0,
                timer = null,
                constant = 4,
                dis = 40,
                arr = [0,0],
                index = 0,
                regCanplay = /mp4|mp3|ogg|mpeg|mkv|wav|webm/i,
                uniqid = 0;

            function downHanler(e) {
                scrollTop = _this.$el.scrollTop;
                startY = e.clientY;
                _this.$el.addEventListener('mousemove', moveHandler);
                _this.$el.addEventListener('mouseup', upHandler);
                clearInterval(timer);
            }
            function moveHandler(e){
                _this.$el.scrollTop =  startY - e.clientY + scrollTop;

                //获取缓冲速度
                arr[index] = e.clientY;
                index = index === 1 ? 0 : 1;
            }
            function upHandler(e){
                _this.$el.removeEventListener('mousemove', moveHandler);
                _this.$el.removeEventListener('mouseup', upHandler);

                //缓冲
                inertia(Math.abs(arr[0] - arr[1]) * constant, e.clientY - startY > 0 ? -1 : 1);
            }
            //实现缓冲
            function inertia(i, dir){
                clearInterval(timer);
                timer = setInterval(()=>{
                    i *= .9;
                    _this.$el.scrollTop += i*dir;
                    if(i < 3){
                        clearInterval(timer);
                    }
                },16);
            }

            _this.$el.addEventListener('wheel', function (e) {
                let dir = e.deltaY>0 ? 1 : -1;
                _this.$el.scrollTop += dir * dis;
                inertia(dis, dir);
            });

            document.addEventListener('keydown', function (e){
                if(space.test(e.key)){
                    _this.$el.classList.add('main-scrollable');
                    _this.$el.addEventListener('mousedown', downHanler);
                }
            });

            document.addEventListener('keyup', ()=>{
                _this.$el.classList.remove('main-scrollable');
                _this.$el.removeEventListener('mousedown', downHanler);
                _this.$el.removeEventListener('mousemove', moveHandler);
            });


            //定义inputFile事件
            els.vue.$on('inputFile', files=>{
                let file = files[0], i = 0;
                function setItem() {
                    let item = {
                        path: file.path,
                        thumb: '',
                        canplay: false,
                        playing: 0,
                        progress: 0,
                        lock: true,
                        alpha: false,
                        type: '',
                        series: false,
                        logo: '',
                        logoX: 1,
                        logoY: 2,
                        logoScale: 0,
                        logoSize: 12,
                        logoStart: 0,
                        logoEnd: 0,

                        duration: 0,
                        startTime: 0,
                        endTime: 0,
                        currentTime: 0,
                        coverTime: 0,
                        cover: false,
                        coverWidth: 480,

                        name: file.name,
                        toname: '',

                        bitv: 0,
                        bita: 0,

                        size: (parseInt(file.size) || 0),
                        quality: 0,

                        scale: 0,
                        width: 0,
                        towidth: 0,
                        height: 0,
                        toheight: 0,

                        format: '',
                        toformat: '',

                        fps: 0,
                        tofps: 0,

                        split: false,
                        achannel: '',
                        aclayout: 0,
                        vchannel: ''
                    };

                    _this.$set(_this.items, uniqid, item);

                    Media.info({
                        input: file.path,
                        success: (json) => {
                            item.thumb = json.thumb;
                            item.type = json.type;

                            item.duration = json.duration;

                            item.bitv = json.bitv || json.bit;
                            item.bita = json.bita;

                            item.scale = (json.height / json.width) || user.viewScale;
                            item.width = json.width;
                            item.height = json.height;

                            item.format = json.ext;
                            item.canplay = regCanplay.test(json.ext);
                            item.fps = json.fps;

                            item.achannel = json.achannel;
                            item.aclayout = json.aclayout;
                            item.vchannel = json.vchannel;

                            resetItem(item);
                            uniqid++;

                            i++;
                            if((file = files[i])) setItem();
                        },
                        fail: (err) => {
                            if(!window.confirm('可能不支持！是否保留以尝试转码？\n\n详情：'+err)){
                                window.URL.revokeObjectURL(_this.items[uniqid].thumb);
                                _this.$delete(_this.items, uniqid);
                            }else{
                                uniqid++;
                            }
                            i++;
                            if((file = files[i])) setItem();
                        }
                    });
                }

                if(file) setItem();
            });

        },
        data(){
            return {
                items: {}
            }
        },
        comments: {
            ListItem
        },
        methods: {
            toolsFn(e, uniqid, name){
                if(name === 'delete'){
                    this.$delete(this.items, uniqid);
                    if(e.ctrlKey){
                        for(let k in this.items){
                            this.$delete(this.items, k);
                        }
                    }
                }else{
                    this.items[uniqid][name] = !this.items[uniqid][name];
                    if(e.ctrlKey){
                        for(let k in this.items){
                            this.items[k][name] = this.items[uniqid][name];
                        }
                    }
                }
            }
        }
    }
</script>

<style>
    .main{
        height: calc(100% - 67px);
        overflow: hidden;
        position: relative;
    }
    .main::-webkit-scrollbar{
        width: 0;
    }
    .main-scrollable{
        cursor: pointer;
        user-select: none;
    }
</style>