##CSS3新属性
>CSS边框
+ border-redius(圆角边框)
+ box-shadow(盒子阴影) h-shadow v-shadow blur spread color inset;(水平阴影位置,竖直阴影位置,模糊距离,阴影尺寸, 阴影颜色(可选),将外部阴影改变成内部阴影(可选))
+ border-image(边界图片),可以使用图像创建一个边框

>径向渐变
+  	1.方向 正常需要写 to  background: linear-gradient(direction, color-stop1, color-stop2, ...)
+  如果存在兼容属性 只需要实现正常写法和chrome/mac写法1. 
+  线性渐变 -webkit-兼容: 1 方向不能带to;2方向和正常写法相反
+  background: linear-gradient()

>transition 过渡效果,本身不会自动触发,需要有事件.
+ transition-property:过渡的属性
+ transition-duration:持续时间.
+ transition-timing-function:时间曲线
    - linear|ease|ease-in|ease-out|ease-in-out
+ transition-delay:延迟时间.

>transform主要有以下几种：rotate旋转，扭曲skew，缩放scale，
+ 旋转（rotate）:通过指定的角度参数对原参数之地那个一个2D rotation(2D旋转),angle是指旋转角度,如果设置的值为整数表示顺时针旋转,负数则表示逆时针旋转.
+ scale等比缩放,但是看到的效果好像没有达到两倍,实际上时在浏览器上沿被遮住了.
+ translate()可以向竖直方向,水平方向上移动。

>perspective(眼睛的距离)，电脑是一个2d屏幕,屏幕之所以具有立体感,其实是一种视觉呈现,通过透视可以达到这个目的.透视可以将一个2D平面,在转换的过程中,呈现3D的效果.
+ perspectiv有两种写法
    - 作为一个属性,写给父元素.作用于所有3d转换的子元素.
    - 作为transform属性的一个值,作用于所有的3D转换的元素.
    - -orign 第一个值代表X方向,第二个代表Y

>transfrom-style(3D呈现)
+ 设置内嵌的元素如何呈现,这些子元素必须转换原素.
+ flat(表示所有子元素在2D屏幕内呈现)
+ preserve-3d(以3d效果呈现)
+ 3D元素的构建是指某个图形是由多个元素构成的,可以给这些元素的父元素设置transfrom-style:preserve-3d来使其变成一个真正的3d图形.


>动画
+ 必要元素
1. 通过@keyframes指定动画序列
2. 通过百分比将动画分割成多个节点
3. 在各个节点中分别定义各属性.
4. 通过animation将动画应用于各个元素.

+ animation-name 动画名称
+ animation-duration 动画持续时间
+ animation-timing-function
    - linear 匀速
    - ease 缓冲
    - ease-in 由快到慢
+ animation-delay 动画延迟时间
+ animation-iteration-count 重复次数
    - infinite重复次数.
+ animation-direction 动画是否重置偶再开始播放
    - alternate动画从上一次停止的的位置开始执行,倒着播放
    - normal 动画第二次直接跳到0%的状态开始执行
+ animation-play-state
    - 播放状态(running播放/paused暂停)
+ animation-fill-mode(动画执行完毕后的状态)
    - forwards 当动画完成后,保持最后一个属性值.
    - backwards 在animate-delay所指定的一段时间内,在动画显示之前应用于属性值(在第一个关键帧中定义)
    - both 设置对象状态为动画结束或者开始的状态.结束时状态优先.

+ element.classList.add
    - add(class1,class2)
    - remove(class1,class2)

>element.addEventListener(event, function, useCapture)
+ event(字符串,指定事件名)
    - 注意不要使用'on'前缀,例如,使用click,而不是使用onclick.
+ function() 指定事件触发时执行的函数
+ useCapture
    - 可选,布尔值,指定事件是否在事件捕获或冒泡阶段执行
    - true 事件句柄在捕获阶段执行
    - false-false默认.事件句柄在冒泡阶段执行.