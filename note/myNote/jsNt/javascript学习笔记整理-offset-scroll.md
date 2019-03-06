> 缓动动画公式
+ leader = leader + (target -leader)/10
+ 盒子位置 = 盒子本身距离 +(目标位置-盒子本身位置)/10;
+ JS实际运算时会四舍五入取整，然后计算。 到达不了指定位置

> offset家族 offsetWidth和offsetHight 以及offsetLeft和offsetTop以及offsetParent
> offsetWidth/offsetHeight 可以检测盒子宽高(加padding+border)包括内边距和边框;
+ offset宽/高  =  盒子自身的宽/高 + padding +border；
    - offsetWidth = width+padding+border；
    - offsetHeight = Height+padding+border；
> offsetLeft,offsetTop 
+ 用来检测盒子距离上一个定位父元素的距离 .如果父级都没有定位则以body为准,只有数字没有单位;
+ offsetLeft 从父亲的padding 开始算,父亲的border 不算.
+ 在父盒子有定位的情况下，offsetLeft == style.left(去掉px) 
>offsetParent
+ 用来检测父类盒子中带有定位元素的父类盒子节点.并返回该父类节点.

> 1.2.4	offsetLeft和style.left区别
1. 最大区别在于offsetLeft可以返回没有定位盒子的距离左侧的位置。 而 style.left不可以.
2. offsetTop 返回的是数字，而 style.top 返回的是字符串，除了数字外还带有单位：px.
3. offsetTop 只读，而 style.top 可读写。（只读是获取值，可写是赋值).
4. 如果没有给 HTML 元素指定过 top 样式，则style.top 返回的是空字符串.

>scroll家族
>ScrollWidth和scrollHeight（不包括border）
+ 检测盒子的宽高。（调用者：节点元素。属性）
+ 盒子内容的宽高。（如果有内容超出了，显示内容的高度）
> scrollTop和scrollLeft
+ 高级浏览器都支持pageYoffset
+ 兼容写法var top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
>获取title body header  html 标签
+ document.title 获取文档标题
+ document.body 获取文档主体
+ document.header 获取文档头部
+ document.documentElement 获取html标签
>scrollTop属性可以获取或者设置一个元素的内容垂直滚动像素数

>onScroll事件 无论页面向上还是向下滚动只要滚到1px 就会触发该事件

>window.scrollTo 
+ 方法可把内容滚动到指定的坐标。
+ 格式：
    - scrollTo(xpos,ypos)
+ xpos	必需。要在窗口文档显示区左上角显示的文档的 x 坐标。
+ ypos	必需。要在窗口文档显示区左上角显示的文档的 y 坐标
