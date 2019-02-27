// function animate(el,target,step){
// 	//先清除之前的定时
// 	clearInterval(el.timer);
// 	el.timer = setInterval(function(){
// 		// 1. 400-800 step>0
// 		// 2. 800-400 step<0
// 		//重新声明step
// 		// 1.获取当前位置
// 		var currentLeft = el.offsetLeft;
// 		//目标位置>当前位置
// 		step = target>currentLeft?Math.abs(step):-1*Math.abs(step);
// 		console.log(step);
// 		// 2.计算目标位置
// 		var targetLeft = currentLeft + step;
// 		// 3. 赋值
// 		el.style.left = targetLeft + 'px';
// 		// 4. 计算差值
// 		var cha = target - targetLeft;
// 		// 5. 停止条件 Math.abs求绝对值
// 		if(Math.abs(cha)<Math.abs(step)){
// 			// 6. 直接跳到结果
// 			el.style.left = target + 'px';
// 			clearInterval(el.timer);
// 			console.log('结束了....');
// 		}
// 	},17)
// }


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

