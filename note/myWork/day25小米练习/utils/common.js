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
	//转换为数组 可以判断单个元素
	var oldClassArr = oldClassStr.split(' ');
	//判断数组是否包含某个cname ['d1','danger'] 'weight'
	if(oldClassArr.indexOf(cname)==-1){
		oldClassStr += ' '+cname;
		el.setAttribute('class', oldClassStr);
	}
}
/**
* 删除某个classname
**/
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