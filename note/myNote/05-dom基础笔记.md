## DOM基础笔记
>Document Object Model(文档对象模型);
+ js中通过DOM来对HTML文档进行操作,只要理解了DOM就可以操作web页面
+ 文档-整个HTML网页文档
+ 对象-网页中每一部分转换为对象
+ 模型-使用模型来表示对象之间的关系,这样方便我们获取对象

>节点               
+ 文档节点 整个HTML文档 node name:#document node type:9 node value:null
+ 元素节点 HTML文档中的HTML标签  标签名 1  null 
+ 属性节点 元素属性  属性名 2  属性值
+ 文本节点   HTML标签的文本内容    #text   3   文本内容

+ 浏览器已经为我们提供了文档节点,对象是window属性.

>事件
+ 就文档和游览器窗口发生的一些特定交互瞬间. javascript与HTML之间
+ 比如点击按钮,鼠标移动,关闭窗口...
+ 我们可以在事件对应的属性中设置一些js代码
+ 这样当事件被触发时,这些代码将会被执行.
+ 1.获取元素对象var btn = document.getElementById("btn")
+ 2.绑定一个单机事件,像这种为单机事件绑定的函数,我们称为单机响应函数.
+ btn.onclick = funtion(){}

>文档加载
+ 浏览器在加载页面时,时按照自上向下的顺序加载的
+ 读取一行就执行一行,如果将script标签写到页面的上边.
+ 在代码执行时,页面还没有加载,页面还没有加载,dom对象也没有加载,会导致无法获取到DOM对象.
+ 将js代码编写到下部就是为了,可以在页面加载完毕以后再执行js代码.
+ onload事件会在正在页面加载完成之后才触发.
+ 为window绑定一个onload事件
    - 该事件对应的响应函数会在页面加载完毕之后再执行
    - 这样可以确保我们代码执行时,所有DOM对象已经加载完毕

###DOM查询
>获取元素节点  通过docunment调用
+ getElementById()通过id属性获取一个元素节点对象.
+ getElementsByTagName()通过标签名获取一组元素节点对象.
+ getElementsByName()通过name属性获取一组元素节点对象.
+ getElemenstClassName() 通过class属性来获取一组class节点.

+ getElementsByTagName()可以根据标签来获取一组元素对象.
    - 这个方法会给我们返回一个类数组对象,所有查询到元素都会封装在对象中.
    - 即使查询到的对象只有一个,也会封装到数组中返回.

+ getElementsByTagName()和getElemenstClassName()
    - 结果类型都为htmlcollection集合,类似于数组但不是数组.我们称之为"伪数组"可以通过数组下标获取内容.但是不具备数组的sort等基本api.
    - 这里思考什么是数组的sort??
+ class选择器一般在IE8中存在很多兼容问题.需要处理(写两套代码).
+ IE8不支持getElementsclassName
+ IE8不支持console()

