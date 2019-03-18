// 各个块高度
// 设置滚轮的高度
var sectionH = [0,-834,-1654,-2433,-3251,-3550];
var sections = document.querySelector('#slide');
// 块的长度
var subSections = sections.children;
console.log(subSections);
// 计时器
var count = 0 ;  
// 加锁
var lock = false;

// 当鼠标滚动的时候
window.onmousewheel = function(event){
    // 取消鼠标滚轮的默认动作
    event.preventDefault();
      // 如果锁了
    if(lock){
    console.log('锁住了')
    return;
}
    lock = true;
    // 获取滚动方向
    // 如果滚动是正数则count递减
    if(event.wheelDelta>0){
        count--;
        if(count<0){
        count = 0;
        }
}else{
    count++;
    if(count>sectionH.length-1)
    count= sectionH.length-1
    console.log('count'+count);
}
// 最后关键一步 给每个块添加active开关属性,同时关闭其他的
// 排他思想 
// 1.先把所有的块移出active
for(var i = 0 ; i <subSections.length; i++){
    // classList H5添加/删除属性
    subSections[i].classList.remove('current');
}
// 然后给自己添加
subSections[count].classList.add('current');
sections.style.transform = 'translateY('+sectionH[count]+'px)';

setTimeout(function(){
    lock = false;
},1000)
}

// 思路总结:
// 1.首先思考如何求出每个块区域的高度 (最好写在数组中,方便读取)
// 2. 还需要获取到块的个数
// 3. 需要一个计数器还记录鼠标滚轮滚动
// 4.取消事件的默认事件(当前是取消滚轮滚动)
// 5.加锁思想 需要一个锁在控制每次移动之间的间隔,防止多次滚动.并判断滚动的临界点
// 6.最后排他思想(先去掉默认的默认)然后在给当前的块加上
// 7.给元素设置transform属性,2d或者3d的转换的转换,水平竖直运动(translate),旋转(rotate),扭曲(skew)





