<template>
    <div class="toolbar">
        <button class="toolbar-item" name="chosefile" v-on:click="menuFn" :class="{'active-1': store.toolbar.drop === 'chosefile'}">
            <i class="icon icon-folder-open"></i> 选择文件
        </button>
        <button class="toolbar-item" name="chosedir" v-on:click="menuFn" :title="'选择输出目录，当前：'+output" :class="{'active-1': store.toolbar.drop === 'chosedir'}">
            <i class="icon icon-floppy-disk"></i> 保存目录
        </button>
        <button class="toolbar-item" name="batch" v-on:click="menuFn" :class="{'active-1': store.toolbar.drop === 'batch'}">
            <i class="icon icon-cog"></i> 批量设置
        </button>
        <button class="toolbar-item" name="more" v-on:click="menuFn" :class="{'active-1': store.toolbar.drop === 'more'}">
            <i class="icon icon-list"></i> 更多功能
        </button>
        <button class="toolbar-item" v-on:click="convertFn" :class="{'active-1': store.isStarted}">
            <i class="icon icon-stack"></i> {{store.isStarted ? '停止':'开始'}}
        </button>
        <!--<input class="toolbar-item" type="range" min=".19" max=".98" step="0.01" v-on:input="zoomItemFn">-->
    </div>
</template>

<script>
    import vars from '../vars.js';

    const nw = vars.nw;
    const win = vars.win;

    export default {
        name: "menu-bar",
        props: ['store'],
        mounted(){
            let store = this.store;
            function cancelFn(){
                store.toolbar.drop = '';
            }
            vars.outputEl.addEventListener('cancel', cancelFn);
            vars.inputEl.addEventListener('cancel', cancelFn);
        },
        methods: {
            menuFn(e) {
                let store = this.store;

                let target = e.currentTarget,
                    name = target.name;

                if(store.toolbar.drop === name){
                    store.toolbar.drop = '';
                }else{
                    store.toolbar.drop = name;
                    store.toolbar.x = e.x;
                    store.toolbar.y = e.y+30;
                }
                switch(name){
                    case 'chosefile':
                        vars.inputEl.value = '';
                        vars.inputEl.click();
                        break;
                    case 'chosedir':
                        vars.outputEl.click();
                        break;
                    case 'pdf2pic':
                        nw.Window.open('plugins/pdf2pic/pdf2pic.html',{
                            id: 'pdf2pic',
                            position: 'center',
                            new_instance: false,
                            focus: true,
                            frame: false,
                            width: Math.round(win.width*.8),
                            height: Math.round(win.height*.8)
                        });
                        break;/*
                    case 'concat':
                    {
                        let tmpType,
                            items = [],
                            output = vue.output+'\\'+vue.batchParams.nameAll;
                        //检查是否被允许
                        for(key in vue.items){
                            item = vue.items[key];
                            if(item.lock){
                                if(!tmpType) tmpType = item.type;
                                if(item.type !== tmpType || item.type === 'image'){
                                    utils.dialog.show = true;
                                    utils.dialog.body = '所选文件“'+item.path+'”不可拼接！音、视频不能混合拼接，且不支持图片。';
                                    return false;
                                }else{
                                    items.push(item);
                                }
                            }
                        }
                        if(tmpType === 'video'){
                            output += '.mp4';
                        }else{
                            output += '.mp3';
                        }
                        if(items.length > 1){
                            if(utils.has(output)){
                                utils.dialog.show = true;
                                utils.dialog.body = '文件“'+output+'”已存在，是否覆盖？';
                                utils.dialog.setBtn('覆盖','否');
                                utils.dialog.callback = (code)=>{
                                    if(code === 0) Media.concat(tmpType, items, output);
                                }
                            }else{
                                Media.concat(tmpType, items, output);
                            }
                        }else{
                            utils.dialog.show = true;
                            utils.dialog.body = '无法拼接，要实现拼接至少两个文件。';
                        }
                    }
                        break;
                    case 'mix':
                    {
                        let tmpType,
                            items = [],
                            output = vue.output+'\\'+vue.batchParams.nameAll;
                        for(key in vue.items){
                            item = vue.items[key];
                            if(item.lock){
                                if(!tmpType && item.type === 'video') tmpType = item.type;
                                if(item.type === 'image') {
                                    utils.dialog.show = true;
                                    utils.dialog.body = '所选文件“' + item.path + '”不可混合，不支持图片。';
                                    return false;
                                }
                                items.push(item);
                            }
                        }
                        if(!tmpType) tmpType = 'audio';
                        if(tmpType === 'video'){
                            output += '.mp4';
                        }else{
                            output += '.mp3';
                        }
                        if(items.length > 1){
                            if(utils.has(output)){
                                utils.dialog.show = true;
                                utils.dialog.body = '文件“'+output+'”已存在，是否覆盖？';
                                utils.dialog.setBtn('覆盖','否');
                                utils.dialog.callback = (code)=>{
                                    if(code === 0) Media.mix(tmpType, items, output);
                                }
                            }else{
                                Media.mix(tmpType, items, output);
                            }
                        }else{
                            utils.dialog.show = true;
                            utils.dialog.body = '无法拼接，要实现拼接至少两个文件。';
                        }
                    }
                        break;
                    case 'firstAid':
                        utils.dialog.show = true;
                        utils.dialog.title = '严重提示！';
                        utils.dialog.body = '<p>为了避免失误操作，必须谨慎选择是否真的启用急救，不到万不得已，请不要轻易启用！当然，它也可以强制中止正在处理的程序。</p>';
                        utils.dialog.setBtn('启用','关闭');
                        utils.dialog.callback = function(code){
                            if(code === 0){
                                Media.killAll();
                            }
                            target.classList.remove('active-1');
                        };
                        break;
                    case 'helpBook':
                        //nw.Shell.openExternal(config.usercfg.documentation);
                        break;*/
                }
            },
            convertFn() {

            },
            zoomItemFn() {

            }
        }
    }
</script>

<style scoped>

</style>