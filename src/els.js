import Vue from 'vue';
const inputEl = document.createElement('input');
const outputEl = document.createElement('input');
const vue = new Vue();

inputEl.type = outputEl.type = 'file';
inputEl.multiple = true;
outputEl.nwdirectory = true;

inputEl.addEventListener('change', function () {
    vue.$emit('inputFile', inputEl.files);
});

export default {
    inputEl,
    outputEl,
    open(){
        inputEl.value = '';
        inputEl.click();
    },
    vue
}