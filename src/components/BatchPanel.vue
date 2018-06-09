<template>
    <div class="drop-panel" :class="{'zoom-in':store.toolbar.drop=='batch'}" :style="{top:store.toolbar.y+'px',left:store.toolbar.x+'px'}" v-drag>
        <div data-drag class="drag-bar"></div>
        <div class="drop-panel-group">
            <p>
                压缩速度级别：
                <select v-model="store.batchParams.speed" title="设定压缩速度">
                    <option value="ultrafast">无敌快</option>
                    <option value="superfast">超级快</option>
                    <option value="veryfast">非常快</option>
                    <option value="faster">比较快</option>
                    <option value="fast">正常快</option>
                    <option value="medium">普通</option>
                    <option value="slow">正常慢</option>
                    <option value="slower">比较慢</option>
                    <option value="veryslow">非常慢</option>
                    <option value="placebo">超级慢</option>
                </select>
                （速度越慢效果越好）
            </p>
            <p>
                宽度上限(<i class="icon icon-pushpin" title="只对锁定项目生效"></i>)：
                <input type="number" min="0" v-on:input="batchParamsFn($event,'widthLimit')" :value="store.batchParams.widthLimit" ref="widthLimitEl">
                &times;
                高度上限(<i class="icon icon-pushpin" title="只对锁定项目生效"></i>)：
                <input type="number" min="0" v-on:input="batchParamsFn($event,'heightLimit')" :value="store.batchParams.heightLimit" ref="heightLimitEl">
            </p>
            <p>
                大小上限(<i class="icon icon-pushpin" title="只对锁定项目生效"></i>)：
                <input type="number" min="0" ref="sizeLimitEl" value="0"> MB
            </p>
        </div>
        <div class="drop-panel-group">
            <!--<control-logo v-on:logo="logoFn"></control-logo>-->
        </div>
        <div class="drop-panel-group">
            <p>
                输出名称(<i class="icon icon-pushpin" title="只对锁定项目生效"></i>)：
                <input type="text" v-model="store.batchParams.nameAll" title="名称末尾用0填充，如“00”表示01，02，03...">
                <button class="btn-s" v-on:click="nameAllFn(1)">移动</button>
                <button class="btn-s" v-on:click="nameAllFn(2)">复制</button>
            </p>
            <b>名称以最末尾的数字串为序列号累加，如：</b>
            <p class="tip">
                “000”表示：001，002，003，...<br>
                “11”表示：12，13，14，...<br>
                “00”为默认值：01，02，03...
            </p>
            <b>以mp4为例预览：</b>
            <p class="tip">{{store.batchParams.nameAll | viewNamemat}}</p>
        </div>
        <div class="drop-panel-group text-center">
            <button class="btn-s" v-on:click="batchParamsFn($event,0)">确定</button>
            <button class="btn-s" v-on:click="batchParamsFn($event,1)">重置</button>
            <button class="btn-s" v-on:click="batchParamsFn($event,-1)">取消</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Batch-Panel",
        props: ['store'],
        methods: {
            batchParamsFn(){

            },
            nameAllFn(){

            }
        },
        filters: {
            viewNamemat(val){
                return val;
            }
        }
    }
</script>