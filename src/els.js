const inputEl = document.createElement('input');
const outputEl = document.createElement('input');

inputEl.type = outputEl.type = 'file';
inputEl.multiple = true;
outputEl.nwdirectory = true;

export default {
    inputEl,
    outputEl,
    open(){
        inputEl.value = '';
        inputEl.click();
    },
    inChange(fn){
        inputEl.addEventListener('change', fn);
    }
}