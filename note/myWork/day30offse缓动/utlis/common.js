function animate(target){
	// 清除第一次定时器 防止多次点击触发事件
	clearInterval(timer);
	timer = setInterval(function(){
		// 滚动条的高度
		// 二、已经声明DTD（IE678只认识他）
   		// document.documentElement.scrollTop
		// 三、火狐/谷歌/ie9+以上支持的
		   // window.pageYOffset
		//    当前位置
		var leader = window.pageYOffset || document.documentElement.scrollTop ;
		// 步长  
		var step = (target - leader )/10;
		//最后10像素 修正step永远=1; 
		// 判断step 正负的方法
		// 方法一:
		// if(step<1&&step>0){
		// 	step = 1;
		// }
		// if(step>-1&&step<0){
		// 	step = -1;
		// }
		// 方法二:

		if(Math.abs(step)<1){
			step = step>0?1:-1;
		}

		//修改元素位置
		// el.style.left = (leader + step) + 'px';
		// window.scrollTo(0,leader+step);
		document.documentElement.scrollTop  = leader+step;
		// 如果目标位置与当前位置重合 则scrollTop移动的距离与修改后的位置一样
		if(target==leader){
			// window.scrollTo(0,target);

			document.documentElement.scrollTop = leader+step;
			clearInterval(timer);
		}
	},17);
}