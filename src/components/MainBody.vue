<template>
    <main class="main">
        <list-item v-for="(item, key) in items" :key="key" :item="item"/>
    </main>
</template>

<script>
    import ListItem from './ListItem.vue';
    import els from '../els.js';

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
                index = 0;

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
            els.vue.$on('inputFile', f=>{
                console.log(f);
                _this.$set(_this.items, 4, 'msagd');
            });
        },
        data(){
            return {
                items: {
                    0: 'msg0',
                    1: 'msg1',
                    2: 'msg2',
                    3: 'msg3',
                    4: 'msg4',
                    5: 'msg1',
                    6: 'msg2',
                    7: 'msg3',
                    8: 'msg4',
                    9: 'msg1',
                    10: 'msg2',
                    11: 'msg3',
                    12: 'msg4'
                }
            }
        },
        comments: {
            ListItem
        },
        methods: {

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