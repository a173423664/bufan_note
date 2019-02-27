// 封装定时器函数思想 轮播图function
// 第一个部考虑参数:
// el:对象 target:目标 step:步数



function animate(el,target,step){
    // 首先先清除上一次调用的定时器
    clearInterval(el.timer)
    // setInterval延迟调用
    el.timer = setInterval(function(){
    // 1.当前对象的位置
    var currentLeft = el.offsetLeft
    // step正负的判断!!!!!!
    step = target>currentLeft?Math.abs(step):-1*Math.abs(step);
    // 2.目标位置
    var targetLeft = currentLeft + step;
    // 3.赋值
    el.style.left = targetLeft+'px';

    // 4.求差
    var cha = target - targetLeft;
    // 判断时注意取正数 
    if(Math.abs(cha)<Math.abs(step)){
        // 如果小于step 则立即返回target
        el.style.left = target+'px';
        // 此时定时器结束
        el.clearInterval(timer);

    }

    },17)
}