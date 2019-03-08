## jquery效果-动画
>jquery animate()方法用于创建自定义动画
语法:
+ $(selector).animate({params},speed,callback);
+ 必需的params参数定义形成动画的CSS属性.

+ 注意点:在默认情况下,所有HTML元素都有一个静态位置,且无法移动.
+ 如果需要对位置进行操作.要记得首先把元素的CSS position属性设置为relative,fixed或absolute;
+ 在jquery的animatez()方法中.第一个参数是一个必须参数.表示一个CSS属性和值的对象
+ jquery animate()可以操作多个属性,必须使用Camel标记法书写所有的属性名;比如必须使用padddingLeft而不是padding-left等等
+ 同时色彩动画并不包含在核心jquery库中.需要下载Color Animations插件
+ jquery animate()使用相对值
    - 也可以定义相对值(该值相对于元素的当前值).需要在值得前面加上+= 或者-+.
+ jquery animate()使用预定义的值
    - 可以把属性的动画值设置为shouw(),hide().或者toggle()

>jquery 停止动画
+ jquery stop()方法用于在动画或效果完成前对它们进行停止.
+ stop()方法适用于所有juqery效果函数,包括滑动,淡入淡出和自定义动画.
+ 可选参数stopALL参数规定是否应该清除动画队列.默认是false,即仅停止活动的动画,允许任何排入队列的动画向后执行.
+ 可选goToEnd参数规定是否立即执行当前动画.默认是false.
+ 因此,默认的,stop()会清除在被选元素上指定的当前动画.
