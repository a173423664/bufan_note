### 如何获取li对应的下标
```
            <li class="head-nav-item" id="li_1"><a href="#">小米_1</a></li>
			<li class="head-nav-item" id="li_2"><a href="#">电视机_2</a></li>
			<li class="head-nav-item" id="li_3"><a href="#">小米_3</a></li>
			<li class="head-nav-item" id="li_4"><a href="#">小米_4</a></li>
			<li class="head-nav-item" id="li_5"><a href="#">小米_5</a></li>
			<li class="head-nav-item" id="li_6"><a href="#">小米_6</a></li>
			<li class="head-nav-item" id="li_7"><a href="#">小米_7</a></li>
			<li class="head-nav-item" id="li_8"><a href="#">小米_8</a></li>
			<li class="head-nav-item" id="li_9"><a href="#">小米_9</a></li>
			<li class="head-nav-item" id="li_10"><a href="#">小米_10</a></li>
```
```     
        var headNavItems = document.getElementsByClassName('head-nav-item');
		for(var i = 0 ; i < headNavItems.length ; i ++){
			//补充一个事件 
			headNavItems[i].onmouseover = function(){
				// console.log(this.id);   li_1
				// 计算出当前li对应的数据对象的数组下标
				var id = this.id.spilt('_')[1]-1;
				// var id = this.id.split('_')[1]-1;
				console.log(id);
				console.log(miData[id]);
				// 有数据了 接下来????
				addClassName(navItemSubList,'active');
			}5
```
1. 先获取li标签共同class.
2. 遍历li标签.
3. 将li标签id的下标打断成数组 形式(li,1) 
4. 然后获取[1]的下标为1再减去-1 为0 即为第一个li元素的下标
+ 这里说下split()方法
```
var mystr="86-010-85468578";
document.write(mystr.split('-')+ "<br />"); //以‘-’分割字符串；
document.write(mystr.split('')+ "<br />");  //将字符串的每个字符分割；
document.write(mystr.split('',3));          //将字符串的每个字符分割，分割3次


86,010,85468578
8,6,-,0,1,0,-,8,5,4,6,8,5,7,8
8,6,-
```
