function animate(el,target){
    clearInterval(el.timer);
    el.timer= setInterval(function(){
        // 加密思想
        var flag = true;
        // 遍历
        for(name in target){
            if(name == 'zIndex'){
                el.style.zIndex = target[name];
                // 停止当前循环,继续下一次
                continue;
            }
            // 设置当前样式
            var leader = getStyle(el,name);
            // 某一个样式为
            var targetV = target[name];
            if(name == 'opacity'){
                // 则从原值中提取并浮点
                leader = parseFloat(window.getComputedStyle(el,null).opacity);
                leader *= 100;  //100
                targetV *= 100; //30
            }
            // 某一个值
            var step = (targetV - leader)/10;
            // 修正
            if(Math.abs(step)<1){
                step = step>0?1:-1;
            }

            if(leader!= targetV){
                leader += step;
                flag = false;
            }
             // 特殊值判断
             if(name =='opacity'){
                el.style.opacity = leader/100;
            }else{
                el.style[name] = leader+'px';
            }
            // 判断只要有一个值不等于返回
          
           
        }
        if(flag){
            clearInterval(el.timer);
        //     if(fn){
        //         fn();
        // }
        }
    },17)
}

     // 封装一个方法去除字符串
     function getStyle(el,name){
        var v = window.getComputedStyle(el,null)[name];
        // 判断index是否存在px 
        if(v.indexOf('px')!=-1){
            v = v.substr(0,v.length-2);
            v = parseInt(v);
        }
        // 返回一个parint值
        return v;
    }
