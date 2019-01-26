### html基础(hypertext markup language)超文本标记语言
>插件
- ctrl+shift+p    install package        emmet

### html快捷键

- ctrl+shift+v
- ctrl+backspace快速删除
- ctrl+a 选中全部内容

+ 基本骨架缩写:
- !+tab
- html:5+tab

`#(id) .(class) [href=#]`
`<p id="info"></p>`
`<p class="info"></p>`
`<a href="#"></a>`
+ 后代写法(子集):
`div#warp>ul>li*3`
```
<iv id="warp">
	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</iv>
```

+ 兄弟(同级):
  - div#warp>p.one+span.two
```
<div id="warp">
	<p class="one"></p>
	<span class="two"></span>
</div>
```
+ 换行标签:
  - `p.class>span^div.info`
  - `<p class><span></span></p>`
  - `<div class="info"></div>`

+ 定义多个样式:
+ ul>li.item$*3
```
<ul>
	<li class="item1"></li>
	<li class="item2"></li>
	<li class="item3"></li>
</ul>
```

   `li{$}*5`
```
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
```

##html基础结构
+ html由三部分组成。分为结构、表现、行为。 
    - html页面采用纯文本形式编写，通过html中的不同标签来区分不同的部分和功能。所见即所得！
 	- 结构： html的标签构成了整个网页的结构，比如哪里是标题、哪里是段落，哪里是图片。
	- 标签都是成对出现的，比如： <标签></标签>
	- 标签内部可以包含属性，都是以key="value"的形式出现，比如： <标签 属性名="属性名">  标签的内容 </标签>
	- 文档声明： <!doctype html>,用于声明告诉浏览器，当前页面采用html5的标准来写。
  
+ 页面的基本结构:
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
</body>
</html>
```

## html常用标签
- `<p></p>  	<p>`标签表示网页中的一个段落
- `<meta>`字符集	utf-8国际通用字符集
- `<h1>~<h6>  <h1>~<h6>`表示标题标签从h1~h6重要性逐渐变低
- `<br>`换行符 `<hr>`分隔符标签 
- `<img>`图片
- `<a>`超链接 target设置打开目标页面的位置 _self默认 _blank新窗口打开 _top顶端窗口打开 _parent父级窗口打开
- `<em>`用于表示一段内容中的着重点 `<strong>`用于表示一段文字的重要性
- `<sup>`上标	`<sub>`下标
- `<ins>`下划线 `<del>`删除线
- `<ul>`无序标签 `<ol>`有序标签>` <li>`
- `<dl><dd><dt> ` 自定义列表
- `<mark>` 带有记号的文本 高亮显示

+ `<table>`表格  
  - `<tr>`表中一行  `<th>`表头信息 `<td>`表格中的内容  
  - th元素内部的文本呈现为居中,粗体显示,而td元素内通常是左对齐的普通文本.
  - colsspan合并列 -rowspan合并行  bgcolor表格颜色 cellspacing单元格间隔符 cellpadding单元格边距  
  - class最好取名申明当前标签意义,可以重复 caption表头文字
  - width height 宽和高 
  - align(对齐方式):left;center;right
+ `<form>`表单  `<action>`提交地址 `<method>`提交表单的类型 post/get(不安全)
	- get提交
	- 参数被放到地址提交,比如: `/D:/abc?username=张三&pwd=123&sex=0&experience=0`
	- 不安全
	- 地址栏拼接的参数长度有限,一般是<4k
	- 一般用于获取数据
+ post提交
	- 地址栏不显示提交内容,再请求体显示
	- 相对安全
	- 提交的数据量没有上限
	- 一般用于提交保存数据
+ name为表单标签分组(不唯一可以重复) id唯一不能重复  value赋值  
	- `<input type="text">`单行文本
	- `<input type="radio">`单选框 checked默认选中
	- `<input type="password">`密码框 
	- `<input type="checkbox">`复选框 checked默认选中 
	- `<input type="flie">文件域`  multiple允许用户一次性选择多个文件
	- `<select>` 下拉选择框  optgroup option select为默认选中
	- `<reset>`重置按钮
	- `<button>` 按钮
	- `<textarea>`多行文本   readonly只读  disable不可用
	- cols行  rows列 
	- `<input type="submit">`提交按钮
	- `<fieldset>`为表单项进行分组 
	- `<legend>`指定每组的名称  
	- `<label>`
	- 用于包括输入框的头部和输入框 使之称为一体。多用于单选和多选。
	- `<iframe>`  内联框架标签，画中画
	- src 内容的链接 比如 `src="http://www.baidu.com"`
	- widht/height  iframe的宽和高
	- frameborder = 0  去掉默认边框

### 图片及路径<img>
+ <img>	
	- src 图片资源的路径
	- alt 如果图片资源不存在，则显示alt的内容。不是必须的。
	- 图片的格式： jpeg / png /gif(动图） /webp(google) ，	使用的时候尽量使用大小合适的图片
+ 相对路径，基于当前的文件
  - 如果是同一级文件，直接引用 
  - 如果是同级文件夹的下一级文件，则直接访问同级文件夹再访问下一级，例如： img/bf.png
  - 上一级文件，使用../   
  - 多层上一级可以使用../../ 指上一级的上一级
+ 绝对路径
  - 本地路径： 比如：D:\不凡学院\html基础\课件\dev\avatar.jpg
  - 网络资源： 比如：` https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2404337643,717943884&fm=58`
+一般采用相对路径。


##转义字符
- `&nbsp;&#160;` 空格
- `&gt;&#62;`	大于
-` &lt;&#60;`	小于
-` &amp;&#38;`和号
-` &quot;&#34;`引号





