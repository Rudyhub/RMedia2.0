<template>
    <div class="dialog-outer" :class="{'dialog-show': dialog.show}">
        <div class="dialog-inner">
            <div class="dialog-header">
                <span v-html="dialog.title"></span> <i class="icon icon-cross dialog-close" v-on:click="dialogFn($event, -1)"></i>
            </div>
            <div class="dialog-body" v-html="dialog.body"></div>
            <div class="dialog-footer">
                <button class="dialog-btn" v-for="(btn,code) in dialog.btns" :key="code" v-on:click="dialogFn($event, code)">{{btn}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dialog-bar",
        props: ['dialog'],
        methods: {
            setBtn(){
                this.dialog.btns.splice(0, this.btns.length);
                this.dialog.btns.push(...arguments);
            },
            dialogFn(e, code){
                this.dialog.show = false;
                this.dialog.title = '';
                this.dialog.body = '';
                this.dialog.btns.splice(0, this.dialog.btns.length);
                if(typeof this.dialog.callback === 'function'){
                    this.dialog.callback.call(e.currentTarget, code);
                }
            }
        }
    }
</script>