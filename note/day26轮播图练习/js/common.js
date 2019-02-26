/**
* 用于添加className
**/
function addClassName(el,cname){
	//如果没有class
	if(!el.getAttribute('class')){
		el.setAttribute('class', cname);
		return;
	}
	var oldClassStr = el.getAttribute('class');
	//转换为数组 可以判断单个元素 因为class属性名中不一定只有一个属性!!
	var oldClassArr = oldClassStr.split(' ');
	//判断数组是否包含某个cname ['d1','danger'] 'weight'
	// ==-1说明不包含
	if(oldClassArr.indexOf(cname)==-1){
		// ' '是名字之间的空格
		oldClassStr += ' '+cname;
		el.setAttribute('class', oldClassStr);
	}
}





// 删除某个classname
						// 在哪加,加什么
function removeClassName(el,cname){
	//联class都没有
	if(!el.getAttribute('class')){
		return;
	}
	var oldClassStr = el.getAttribute('class');
	var oldClassArr = oldClassStr.split(' ');
	//找到cname下标

	var index = oldClassArr.indexOf(cname);
	//存在
	if(index!=-1){
						// 从第index开始 删除一个

		oldClassArr.splice(index,1);
	}
	//数组还原字符串
	var newClassStr = oldClassArr.join(' ');
	el.setAttribute('class', newClassStr);
}


/**
* 判断是否存在某个cname
**/
function hasClass(el,cname){
	if(!el.getAttribute('class')){
		return false;
	}
	var oldClassStr = el.getAttribute('class');
	var oldClassArr = oldClassStr.split(' ');
	return oldClassArr.indexOf(cname)!=-1;
}



// 在ie6,7,8中 children是包含注释节点的
function myChildren (pNode) {
	var children = pNode.children;
	var rs = [];
	for(var i = 0 ; i < children.length ; i++){
		//过滤元素节点
		if(children[i].nodeType == 1){
			rs.push(children[i]);
		}
	}
	return rs;
}


		// /**
		// * 初始化小点点的点击事件
		// **/
		// function initDottsEvent(){
		// 	//给dottsLi循环绑定事件
		// 	for(var i  = 0 ; i < dottsLi.length ;i ++){
		// 		//闭包的解决方式 后面说
		// 		// 对象 给具体的对象添加属性 
		// 		dottsLi[i].index = i;
		// 		//刻舟求剑
		// 		dottsLi[i].onclick = function(){
		// 			// console.log(this.index);
		// 			changeDottActive(this.index);
		// 			count = this.index;
		// 			swiperEl.style.left = -1*count*imgW+'px';
		// 		}
		// 	}
		// }

	
		// /**
		// * 根据下标修改dott激活样式
		// **/
		// function changeDottActive(count){
		// 	// 排他思想
		// 	for(var i = 0 ; i < dottsLi.length ; i ++){
		// 		//判断是否包含active
		// 		if(hasClass(dottsLi[i],'active')){
		// 			//删除
		// 			removeClassName(dottsLi[i],'active');
		// 		}
		// 	}
		// 	addClassName(dottsLi[count],'active');
		// }
