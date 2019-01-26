### css补充
## 常见问题
+ 页码出现错误
	- 优先检查浮动元素,因为浮动元素会对后面元素造成影响
+ text-align对块类元素不起作用.

+ `<p>`标签嵌套img标签文字不能直接写入,应加入span标签,在里面写入文本内容.

+ `<placeholder>`
	- placeholder 属性提供可描述输入字段预期值的提示信息（hint).
	- 该提示会在输入字段为空时显示，并会在字段获得焦点时消失。
	- 注释：placeholder 属性适用于以下的 input 类型：text, search, url, telephone, email 以及 password.
+ 精灵图片是由很多透明时小icon图标放在一起
+ logo一般都是a标签跟seo(搜索引擎优化)有关
+ logo中的class名在seo中有很高的权重,所以我们希望精灵不放过任何一个可以优化seo代码的地方.
+ 精灵图片放置方法:
	- 先给父类盒子中设置空span标签,以便于图片能够准确放置在span标签中.设置一个小盒子
	- 之后的文字现需设置span标签,
	- 利用background-postion 进行定位,在精灵图片中线良好位置,向左为负,向上为负.
+ 写ul块标签时,其实li里面有空格
	- 解决办法:ul标签中先把字体样式去掉,然后在li标签中重新添加.
+ transparent 一般使用场景：
	- 如果一个元素覆盖在另外一个元素之上，而你想显示下面的元素，这时你就需要把上面这个元素的background设置为transparen.

> margin上下合并问题
+ box1 margin为10px，box2的顶部margin为20px，但表现在页面上2者之间的间隔为20px，而不是预想中的10+20px=30px，结果是选择2者之间最大的那个margin，我们把这种机制称之为“外边距合并”；外边距合并不仅仅出现在相邻的元素间，父子间同样会出现。

+ background-size:cover保持背景图像本身宽高比列,将图片编制到完全覆盖所定义背景区域
  - background-orign:定义postion属性的定位原点
  - border-box从边框区域开始显示背景
  - padding-box从补白区域
  - content-box仅从内容区域开始

> 注意事项: 
  - 外边距合并只出现在块级元素上
  - 浮动元素不会和相邻的元素产生外边距合并
  - 绝对定位元素不会和相邻的元素产生外边距合并
  - 内联块级元素间不会产生外边距合并； 
  - 根元素间不会不会产生外边距合并（如html与body间）
  - 设置了属性overflow且值不为visible的块级元素不会与它的子元素发生外边距合并

+ `<transform>`
  - 该属性允许我们对元素进行旋转、缩放、移动或倾斜
值是deg

### css小技巧
+ 如何让文本垂直对齐文本输入框
- input{vertical-align:middle}
+ 如何让单行文本在容器内垂直居中
	- 设置文本行高等于容器高度
  	- line-hight=hight
+ 如何定义鼠标指针的光标形状为手型并兼容所有浏览器
	- #test{cursor:pointer;}
+ 如何让已知高度的容器在页面中水平垂直居中
	- {position:absolute;top:50%;left:50%;}	
	- width:200px;height:200px;margin:-100px 0 0 -100px;} 简写为margin:50% 50%
+ 如何设置span的宽度和高度（即如何设置内联元素的宽高
	- span{display:block;width:200px;height:100px;}
	- 要使内联元素可以设置宽高，只需将其定义为块级或者内联块级元素即可。所以方法非常多样，既可以设置display属性，也可以设置float属性，或者position属性等等。