##juqery效果-隐藏和显示
>hide()隐藏元素
>shouw()显示元素
+ 基本语法
    - $(selector).hide(speed,callback);
    - $(selector).show(speed,callback);
    - 可选值speed参数规定隐藏/显示的速度,可以取以下值:slow,fast或者毫秒
    - 可选的callback参数是隐藏或显示完成后执行的函数名称.

>toggle()方法用来切换hide(),show()
+ 基本语法
    - $(selector).toggle(speed,callback);
    - 可选的speed参数固定隐藏/显示的速度.,可以取以下值:slow,fast或者毫秒.
    - 可选的callback参数是隐藏或显示完成后执行的函数名称.
+ 可选callback参数,具有以下三点说明
    - $(selector)选中的元素的个数为n个,则callback函数会执行n次
    - callback函数名后加括号,会立刻执行函数体.而不是等到显示/隐藏完成后才执行
    - callback既可以是函数名,也可以是匿名函数.