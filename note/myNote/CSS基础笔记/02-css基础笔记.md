## css全称层叠样式表 (Cascading Style Sheets),用于实现页面的样式。

### css基本写法
 ```
	xxx{
		color:red;
		font-size:20px;
	}
```

### css选择器
+ 标签选择器 p{} (一般不使用,只起补充作用)	
  - 优点:使用简单,直接引用,不需要为标签添加属性.
  - 缺点:匹配范围大,精确度不够
+ class选择器 .p{} (开发经常用)
  - 优点:能够为不同标签定义相同样式,使用灵活,可以为一个标签定义多个样式.
  - 缺点:需要为标签定义class属性,影响文档结构,操作相对麻烦
+ id选择器	#P{}   (几乎不用,只在js中可能用到)
  - 优点:匹配精准
  - 缺点:需要为标签定义id属性,影响文档结构,相对于类选择器,缺乏灵活性.

### class命名常用词汇
```
	class命名因使用与内容相关的词汇
	在所有的变量或者类名声明的时候 不能使用绝对性词汇 red,green,left,top
	header:头部
	content/container:内容
	页脚:footer
	导航:nav 子导航:subnav 摘要:summary 标题:title 边导航:sidebar
	栏目:column
	菜单:menu 子菜单:submenu
	页面外围控制整体布局宽度:wrapper
	登录条:loginbar
	标志:logo
	广告:banner
	页面主体:main
	下载:download
	友情链接:friendlink
	版权:copyright
	滚动:scroll
	标签页:tab
	文章列表:list
	小技巧:tips
	加入:joinus
	指南:guild
	服务:service
	图标:icon
	功能区:shop
	按钮:btn
	注释:note
```

### css层叠性与继承性

+ css层叠性是指css能够对同一个对象应用多个样式的能力,后面的样式的会覆盖前面的样式,多个样式作用于同一个对象,则根据选择器的优先级,确定对象的最终应用样式.
- 例:`p{font-size:20px;}`  `.danger{font-size:35px;color:red;}`
+ css继承性是指后代元素可以继承祖先元素的样式
	- 灵活运用css继承性可以优化代码.
	- 字体,文本属性都可以被继承 如:字号,颜色,行距 缩进)
+ 下面属性不允许继承:边框 边界补白 背景 定位 布局 尺寸
	- `.d1{color:red}`
	- `.d1 .p1{font-size:30px}`  p1的颜色是红色 继承了d1的颜色 

## 基本选择器优先级
  - 标签选择器  <  class选择器  < id选择器  < 行内样式
  - 如果选择器相同则后面覆盖前面的选择器.
  - 引入外部样式和行内样式的采用就近原则选择.

## 选择器权重值

  - 通用选择器:0
  - 元素选择器,标签选择器:1
  - 类(class)选择器,伪类选择器,属性选择器:10
  - id选择器:100
  - 外部样式引入:1000
  - 权重可以叠加 继承权重为0

## 组合选择器
+ 交集选择器 (优先选中同时具有class1 class2的标签 权重叠加) 
```
	p.class1.class2{  
	cocolor:red;
	font:yellow;}
```

+ 并集选择器(同时选中标签)
```
	.p,.p1{
	color:red;
	font:yellow;}
```
+ 后代选择器 
  - 后代选择器不仅可以选择子节点还可以选择更小的节点
  - 标签嵌套的时候内部字体样式会继承(excpet:a标签字体颜色不能继承 h1~h6标签不能继承父元素中的文字大小)
```
	p.class1 a{
	color:red;
	font:yellow;}
```
+ 通用选择器*{}
  - 用于去掉默认值如(ul,ol小黑点 list-style=none, padding margin  去除a标签下划线(text decoration)
  - 补充标签<div> 表示盒子本身没有样式用于分配网页布局
  - 提取公因式将几个元素相同的属性写在一起,可以减少代码冗长.
  - .zx .qq,.zx .wx,.zx .go-up

### css单位
- px像素 对于不同显示器1px不同
- em基于字体大小的倍数
- %百分比	相对于父级标签
- 显示器三原色:red;green;blue;(rgb)
- #FFFF00包含了三组十六进制的数字。每两位分别表示red、green、blue。
- 0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15
- 0	1	2	3	4	5	6	7	8	9	a    b   c   d   e   f
+ rgb
	- (15*16+15=255 15*16+15=255  0*15+0=0 ) #FFFF00(255.255.0)
	- rgb(255,255,0) 每一个值对应表示十六进制的red、green、blue
+ rgba
	- rgba(255,255,0.5) 同rgb，最后一个值表示透明度，0~1 一般表示为.5 
	- rgba与opacity的区别
	- rgba不改变内容的透明度	
	- opacity会改变整个盒子的透明度 0为完全透明 1为完全不透明

### css样式表
+ 是一个或者多个css样式组成的样式代码段
	- 行内样式   `<p style="color: red">我是一个p标签</p>`
	- 内部样式   <style>  p{color:blue;} </style>
	- 引入样式  
    	- `<link rel="stylesheet" href="style.css">`
	- style标签内使用@import关键字导入外部样式表文件的方法如下:
		```<style type="text/css">
		@import url("style.css")
		</style>'
		```
+ 区别：
	- 行内样式 严重耦合 用的非常少！
	- 内部样式 测试使用，但是当前页面的样式只能再当前页面使用。
	- 引入样式 上线时候使用。 可以再多个页面复用外部样式。

### css常用属性
+ font常用属性
  - font-family	字体 'Microsoft yahei' 黑体 Simhei 宋体Simsun 楷体KaiTi
  - font-size字体大小
  - font-style 字体 normal正常 italic斜体 oblique倾斜的字体.
  - font-weight 字体粗细 700表示bold lighter/normal/bolder(较粗)  
  - text-indent 首行缩进	 父类代码缩进了 子类要想恢复可以写成text-indent:0
  - text-align 文本居中方式left/center/right(只对文本有作用) justify为两段对齐.
  - line-height 行高 具体px em基于当前字体大小的倍数  百分比倍数基于字体大小倍数 多行文本行高可以控制行间距 行高等于父类盒子高度时,文本垂直居中
  - 对于颜色#ffaabb可以简写成#fab
  - vertical-align:top 垂直对齐
  - 去掉默认边框border:0 
  - 去掉input输入框获取焦点默认边框 outline:none
+ text-decoration 
  - normal默认值,表示无装饰线
  - blink表示闪烁效果
  - underline表示下划线效果
  - line-through表示贯穿线效果
  - overline表示上划线效果


### 字体基础书写顺序
```
p{
	font-family:'楷体';
	font size:12px;
	font-style:italic;
	font-weight:bolder;
	line-height:2em/200%/24px;
	color:red;}
```	
	
+ 缩写顺序:
```
p{
    font-style font-weight font-size/line-height font-familt;
    }
p{
    italic bolder 12px/2 'Microsoft yahei'
    }
```

### css

+ background标签(背景图片)
  - background-color 背景颜色
  - background-repeat 平铺方式
  - no-repeat不平铺
  - repeat-x背景图片在横向上平铺
  - repeat-y背景图片在纵向上平铺
  - repeat诶见图片在横向,纵向上平铺
  - background-image 背景图片 url() 输入图片地址方式与image一致
+ background-postion 图片位置
  -  如果只写一个属性,则另一个默认居中2个属性
  - 具体值 坐标点居于左上角(left right top bottom center)
  - 坐标值可以为负 图片可以移动到桌面以外
+ background缩写顺序:
  - background:green url(img/.01.png) no-rapeat center;
+ background-attacchment(设置固定背景):
  - scroll默认滚动 | fixed固定 | inherit规定应该从父元素继承 
  - background-attachment 属性的设置(是否滚动,只应用于body)
+ opacity透明度标签0~1	可以简写成opacity:.1
+ background-size
	- 用于控制图片宽高,可以设置1个或者2个值,1个值为必填,1个位可选.其中第一个值用于指定背景图像的width,第二个值用来指定背景图像的height.如果只设一个值,则第2个值默认为auto.
	- :cover保持背景图像本身宽高比列,将图片编制到完全覆盖所定义背景区域
	- backgrond-size:100% auto;
+ 这种写法body可以占据整个屏幕:
```
	<style>
	html,body{
		width: 100%;
		height: 100%;
	}
	</style>
```
+ background-origin定义background-postion属性的定位原点.
	- boeder-box:从边框区域开始显示背景
    - padding-box:从补白区域开始显示背景 默认值
    - content-box:仅从内容区域显示背景

## 盒子模型
+ CSS处理网页时，它认为每个元素都包含在一个不可见的盒子里。包含内容区域、 padding（内边距） 、 border（边框）、margin（盒子与盒子的距离)


## padding(内边距)
+ 用来调整元素包含的内容与边框的距离
    - 上左右下 padding{1px 2px 3px 4px;}
    - 上 左右 下 {1px 2px 3px;}
    - 上下 左右{1px 2px;}
    - 上下左右都一样{1px;}
    - padding-top、padding-right、padding-right、padding-bottom,padding-top:0;
    - 在没有明确定义元素宽度和高度的情况下,使用补白来调整元素内容的显示位置要比边界更加安全可靠.

## border(边框)
-	bolder-width边框宽
-	bolder-color边框颜色
-	bolder-style边框样式  (solid实线 dotted电线 dashed虚线 none没有边框 double双实线)
-	简写:bolder{32px solid yellow}
+ 还可以指定某一边的边框:
      - bolder-right-color
	  - bolder-right-width
	  - bolder-right-style
+ border-collapse定义表格的行和单元格的边是合并在一起还是按标准的html样式分开.
+ border-spacing属性可以定义单元格的间距,取值包含1个值或者2个值.当定义一个值时,则定义单元格行间距和列间距都为该值.
+ border-side属性可以定义标题的显示位置,该属性包括top(位于表格上面)
+ bottom(位于表格底部).如果要水平对齐标题文本,则可以使用text-align属性.

## 圆角特效
+ border-radius
  - 默认值:none没有圆角
  - border-top-right/left
  - border-bottom-right/left

## margin(外边距)
  - 使用方法和padding类似 为保持浏览器的统一 一般会把所有的标签的margin和padding优先置0
  - margin垂直叠加top和bottom哪个大表现为哪个值 
  - 两个盒子发生嵌套,内部盒子设置margin-top会发生崩塌现象
+ 解决办法:
	- 父类设置overflow为 hidden
	- 父类设置padding为1 不推荐  
	- 设置bolder为1  不推荐
+ 块元素居中设置margin:0 auto 即可;。
+ 重叠： 如果垂直两个块状元素同时设置了margin-bottom和margin-top,那么这两个值将会发生重叠,不会累加，哪个值大用哪个。
+margin-top/margin-bottom 对于行内元素无效。

## 影响盒子宽度的因素
- padding 会影响 特殊：继承的盒子在父盒子宽度范围内，padding值不会影响该盒子大小.
- border 会影响
- content  不会
- margin  不会
- padding可以影响行内标签的大小,而margin不行.

## overflow
+ 相关标签里面的内容超出了样式的宽度和高度时如何处理
  - 超出部分隐藏hidden 
  - visible 默认值
  - auto自动添加滚动条 
  - scroll硬添加(不)
  - 如果子类盒子没有设置浮动,而且父类盒子没有高度,则父类盒子会被盒子撑开.

## display与visibility的区别及display标签转换

- display可以控制元素的隐藏或显示 并且不占用隐藏前位置 none 默认值为inline
- visibility hidden 可以隐藏元素 且占用空间
+ display主要控制标签的相互转换
  - block换成块标签
  - inline-block转成行内块标签
  - inline 转成行内标签
  - 其中主要是用于行内标签转成块标签或者行内标签转成行内块标签
+ 转换的必要性：比如可以把a标签转换为块状元素，进而实现一个按钮的样式。
  - 块标签block(独占一行,且可以改变宽高)
  - (p h1~h6 table form div br hr tr)
  - 行内块标签inline-block(可以在一行内显示,且宽高)
  - (img th  td  input select  textarea)
  - 行内标签inline(可以在一行内显示,不显示宽高)
  - (a span i  em  strong  sup  sub)
  - span标签可以作用任何元素且不会换行是一个行内标签

## 文档流
+ 块状标签独占一行
+ 行内元素可以同一行显示，如果不够会自动换行
+ 自上而下的展示

## 浮动(float)
+ 浮动指的是使元素脱离原来的文本流，在父元素中浮动起来。它能够让元素向右或者想做停靠显示,主要是针对块元素来来说的,因为css布局主要使用块元素,而内联元素,内联块元素本身就可以实现左右对齐,并列显示.
+ float默认值为none设置对象不浮动 left/right 向左/向右浮动
+ 块级元素和行内元素都可以浮动，当一个行内元素浮动以后将会自动变为一个块级元素,相当声明了display属性等于block,也就是说浮动元素的display属性将被忽略.该属性可以被应用在非绝对定位的任何元素上.
+ 当一个块级元素浮动以后，宽度会默认被内容撑开，所以当漂浮一个块级元素时我们都会为其指定一个宽度。
+ 当一个元素浮动以后，其下方的元素会上移。元素中的内容将会围绕在元素的周围。
+ 
  - 浮动会使元素完全脱离文本流，也就是不再在文档中在占用位置。
  - 元素设置浮动以后，会一直向上漂浮直到遇到父元素的边界或者其他浮动元素。
  - 元素浮动以后即完全脱离文档流，这时不会再影响父元素的高度。也就是浮动元素不会撑开父元素。
  - 浮动元素默认会变为块元素，即使设置display:inline以后其依然是个块元素。
  - 要浮动都要浮动,右浮动会造成元素位置颠倒,尽量少用.
  - 浮动元素有自动收缩空间的功能,而块元素就没有这个特性!

## 浮动的影响
  - 如果子类元素设置了浮动，而父类元素没有设置高度，或者高度比子类元素小，那么子类元素脱离了文档流，就无法把父类盒子撑开。那么整个文档的结构将受到破快。
  - 清除浮动的影响： clear:默认值none,允许周围有浮动元素  left/right/both  不允许当前元素的left/right/both有浮动元素。该属性可以强迫浮动元素换行.
  - 在浮动元素的最后面追加一个空的div,设置clear:both即可清除浮动的影响。
  - 因为浮动会对文档流造成影响，所以能用流式布局 就不要使用浮动。
  - 补充：1.display：inline-block 标签的换行符会被显示为空格
  - float:right  会改变标签的前后顺序。
  - clear只会作用于自身,不会影响其他元素,因此两个左浮动元素,要使右边div元素换行,就要在右边的div上加上clear:left;这样就会被迫换行.
+ 当多个元素并列浮动时,元素的位置是不固定的,它们会根据父元素宽度灵活调整,这为页面布局带来隐患
	- 定义包含框的宽度为固定值,避免包含框宽度随窗口大小而改变
	- clear元素可以强迫浮动元素换行显示.

## 定位(postion)

+ 浮动用于处理页面布局
+ 定位用于精确处理某个元素的位置
+ 页面布局的原则:
  - 优先考虑标准文档流;
  - 标准文档流处理不了用浮动;
  -  浮动处理不了用定位
+ static为默认值:无特殊定位,对象遵循正常文档流.
+ 4个相关的定位属性:
  - top设置对象与最近一个定位包含框顶部相关的位置
  - right设置对象与最近一个定位包含框右边相关的位置
  - left设置对象与最近一个定位包含框左边相关的位置
  - bottom设置对象与最近一个定位包含框底部相关的位置
  - 上面四个属性可以是长度值,可以是百分值,可以为正值,也可以负值.当取负值时,向反方向偏移.


## 固定定位 (fixed)
- 元素会被锁定在屏幕的某个位置上,滚动网页时不会移动.
- 固定元素不占据原来位置,会脱标
- 给元素设置固定定位以后,元素位置从浏览器左上角出发.
- 可以将行内元素转换成行内块元素.


## 绝对定位(absolute)
- 	绝对定位指使元素相对于html元素或离他最近的祖先定位元素进行定位。
- 	当开启了绝对定位以后，可以使用top、right、bottom、left四个属性对元素进行定位。
- 	绝对定位会使元素完全脱离文本流。
- 	绝对定位的块元素的宽度会被其内容撑开。
- 	绝对定位会使行内元素变成块元素。
-	一般使用绝对定位时会同时为其父元素指定一个相对定位，以确保元素可以相对于父元素进行定位。
+ 定位元素垂直居中:
  - top:50%
  - margin-top:35px;(自身盒子高的一半)
+ 绝对定位: (子绝父相)
  - 如果没有嵌套元素,则left/top指的是相对body边框
  - 如果是嵌套元素,而且父类没有定位元素,则子类的定位基于body
  - 如果是嵌套元素,而且父类有定位元素,则子类找父类
  - 往上找 找到最近的上一个定位元素
  - 定位布局如果left right bottom,top同时被定义,left优于right top优于bottom,但是如果元素没有被定义宽度和高度,则元素将会被来拉伸以适应左右或上下同时定位.			

## 相对定位(relative)
+ 当开启了相对定位以后，可以使用top、right、bottom、left四个属性对元素进行定位。
	- 如果不设置元素的偏移量，元素位置不会发生改变。
	- 相对定位不会使元素脱离文本流。元素在文本流中的位置不会改变,还会占据原来的位置.
	- 相对定位不会改变元素原来的特性。
	- 相对定位会使元素的层级提升，使元素可以覆盖文本流中的元素。
	- 相对定位更多地被用来当做定位包含框,因为它不会脱离
+ z-index 当元素开启定位以后就可以设置z-index这个属性。默认是0.值越大，越靠上。
	- z-index可以指定一个整数作为参数，值越大元素显示的优先级越高，也就是z-index值较大的元素会显示在网页的最上层。
	- 当z-index属性为负值,则将隐藏在文档流的下面

## 规避脱标流 
+ 经验：一般布局采用标准流，如果布局实现不了用浮动。定位一般用于解决小范围的某个标签的位置。
	- 能用标准流（没有脱标）解决就不用浮动
	- 解决不了就考虑有浮动（页面布局类型，“不完全脱标”）
	- 浮动解决不了用定位（小图标，完全脱标，不影响内容）


## 鼠标悬浮样式
- :link 未访问的链接
- :visited 已访问的链接
- :hover 鼠标悬停在链接  hover使其他元素改变效果 只能存在于嵌套元素.
- active 选的的链接(鼠标左击不丢)
	注意:使用hover时,必须置于Link,visited之后;使用active时,必须置于hover后,建议顺序记忆.

## 鼠标指针样式
- div{ cursor:default }默认正常鼠标指针
- div{ cursor:hand }和div{ cursor:text } 文本选择效果
- div{ cursor:move } 移动选择效果
- div{ cursor:pointer } 手指形状 链接选择效果
- div{ cursor:url(url图片地址) }设置对象为图片
- div{ cursor:crosshair基于上下文决定应该显示什么光标}
- div{ cursor:text } 表示可以选择文本.通常渲染为I形光标

## 补充
 + 注意问题
    - 一般网页布局需要设置版心时,可以设置margin:0 auto;居中
	- 页码出现错误时,优先检查浮动元素,因为浮动元素会对后面元素造成影响.
	-  text-align对块类元素不起效果
	-  MDN网站中可以查看元素属性.
	-  placeborder (占位符)
	-  logo一般都是a标签跟seo(搜索引擎优化有关).logo的class名在seo中有很高的权重.所以我们希望尽量不不放过任何一个可以优化seo代码的地方.
+ 精灵图片:是由很多的透明的小icon图标放在一起的.
+ 精灵图片的放置方法.
	- 先在父类盒子中设置一个空的<span>标签作为一个容器放置精灵图片.
	- 之后的文字也需要设置span标签.
	- 利用background postion进行定位,先定左右,后定上下.left为负移动,top为负向上移动.



















			  




































































































































































































