export default {
    trackMenu(){
        let menu = document.createElement('div'),
            items = ['添加图片','添加视频','添加音频', '删除轨道', '退出菜单'],
            callback = {
                el: menu,
                fn: null
            };
        menu.className = 'track-menu';

        items.forEach((item, index)=>{
            items[index] = document.createElement('div');
            items[index].className = 'track-menu-item';
            items[index].innerHTML = item;
            menu.appendChild(items[index]);
            items[index].onclick = function () {
                if(typeof callback.fn === 'function') callback.fn(index);
                if(menu.parentNode) menu.parentNode.removeChild(menu);
            }
        });
        return callback;
    }
}