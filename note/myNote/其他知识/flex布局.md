## flex布局
+ flex布局是什么?
    - Flexible Box的缩写,意为'弹性布局',用来为盒状模型提供最大的灵活性
    - 任何一个容器都可以指定为flex布局.
    - 行内元素也可以使用flex布局
    - Webkit内核的浏览器,必须加上-Webkit前缀
    - 注意:设为Flex布局以后,子元素的float,clear和vertical-align将失效

+ 基本概念
    - 采用Flex布局的元素,称为Flex容器(flex container),简称'容器'.它所有的子元素自动成为容器成员,成为Flex项目.
    - 容器默认存在两根轴,水平的主轴(main axis)和垂直的交叉轴(cross axis).主轴开始的位置(与边框的交叉点).叫做main start,结束的位置叫做main end,交叉轴的开始位置叫做cross start,结束位置叫做cross end.

+ 容器上的属性
+ felx-direction 决定主轴上的方向(即项目的排列方向).
+ 默认值有四个:
    - row (默认值).主轴为水平方向,起点在左端.
    - row-reverse:主轴为水平方向,起点在右端.
    - column:主轴在垂直方向,起点在上沿.
    - column-reverse:主轴在垂直方向,起点在下沿.

+ felx-wrap属性 默认情况下,项目都在一条线(又称'轴线')上,flex-wrap属性定义,如果一条轴线排不下,如何换行, 
+ 有三个属性值:
    - norwrap(默认)不换行
    - wrap:换行,第一行在上方
    - wrap-reverse:换行,第一行在下方

+ felx-flow属性是flex-direction属性和flex-wrap属性的简写形式,默认值为row nowrap.

+ justify-content属性
    - justify-content属性定义了项目在主轴上的对齐方式
+ 有5个属性值
    - flex-start（默认值）：左对齐
    - flex-end(右对齐)
    - center居中
    - space-between:两段对齐.项目之间的间隔都相等.
    - space-around 每个项目两侧的间隔相等.所以,项目之间的间隔比项目与边框的间隔大一倍.

+ align-items定义项目在交叉轴上如何对齐.
    - flex-start：交叉轴的起点对齐。
    - flex-end: 交叉轴的终点对齐.
    - center:交叉轴的中点对齐.
    - baseline: 项目的第一行文字基线对齐
    - strech(默认值): 如果项目未设置高度或设为auto,将占满整个容器的高度

+ align-content属性定义了多跟轴线的对齐方式,如果项目只有一根线,该属性不起作用.
    - flex-start:与交叉轴的起点对齐
    - flex-end:与交叉轴的终点对齐
    - center:与交叉轴的中点对齐
    - space-between与交叉轴的两端对齐,轴线的之间的间隔平均分布.
    - space-around每根轴线两端的间隔相等.所以轴线之间的间隔比轴线与边框的间隔大一倍.
    - stretch(默认值):轴线占满整个屏幕.

