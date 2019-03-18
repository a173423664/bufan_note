// !!! top这个变量不能再window上下文中直接使用 
var topArr = [0,-834,-1654,-2433,-3251,-3550];//设置滚动高度
var count = 0;//计数器
//整体滚动的目标元素
var sections = document.querySelector('#slide');
//原生写法
var subSections = sections.children;
console.log(subSections)
//锁的概念 
var lock = false;
window.onmousewheel = function (event) {
	// 小坑 因为鼠标滚轮滚动的时候 浏览器默认也会跟着滚动
	//阻止浏览器的默认滚动事件 完全依靠js改变top值
	event.preventDefault();

	if(lock){
		console.log('加锁状态,请稍后...');
		return ;
	}
	//加锁
	lock = true;
	
	// 1.判断方向
	//  上 > 0 ; 下 < 0
	//上
	if(event.wheelDelta>0){
		count --;
		if(count <0){
			count = 0;
		}
	}else{
		count ++ ;
		if(count > topArr.length-1){
			count = topArr.length-1;
		}
		console.log(count);
		
	}
	//排他思想
	for(var i = 0 ; i < subSections.length ; i++){
		subSections[i].classList.remove('current');
	}
	//给自己添加
	subSections[count].classList.add('current');
	sections.style.transform = 'translateY('+topArr[count]+'px)';
	setTimeout(function(){
		//开锁
		lock = false;
	},1000)

}