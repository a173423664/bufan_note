## DOM 
文档对象模型(Document Object model)是表示和操作HTML和XHTML文档内容的基础API.
+ 当网页被加载时,浏览器会根据DOM模型,将结构化HTML或者XML)解析成一系列的节点,再由着节点组成一个树状结构(DOM tree).
+ 节点有7种类型:
    - document:整个文档树的顶层节点.
    - documentType:document标签(比如<`!DOCTYPE html`>)
    - Element:网页的各种HTML标签 (比如`<body> <a>`)
    - Attribute: 网页元素的属性(比如class = "right")
    - text :标签之间或标签包含的文本
    - comment: HTML或XML的注释
    - DocumentFragment: 文档的片段
    - 其中Document和Element是两个重要的DOM类.
+ 1.1节点之间的关系
    - 在一个节点之上的直接节点是父节点,
    - 在其下一层的直接节点是其子节点.
    - 在同一层上具有相同父节点的是兄弟节点.
    - 在一个节点之下的所有层级的一组节点是其后代节点.
    - 一个节点的任何父节点,祖父节点和其上层的所有节点是祖先节点
+ 1.2选取文档元素
+ 用指定的id属性
    - get.documentById()
+ 用指定的name属性
    - 一些HTML元素拥有name属性(比如form radio img frame embed object等)非唯一,所以多个元素有可能有相同的名字.
    - 基于name属性的值选取HTML元素,可以使用Document对象的getelementsByName()方法,返回一个Nodelist对象(类数组对象).
+ 用指定的标签名字
    - Document对象的getElementsByTagName()方法可用选取指定类型(标签名)所有的HTML元素,也是返回一个Nodelist对象
    - 给getElementsByTagName()传递通配符"*",将获得一个代表文档中所有元素的Nodelist对象.
+ 用指定的css类
    - HTML元素的class属性是一个以空格隔开的列表,可以为空或包含多个标识符.
    - 在HTML文档和HTML元素上,我们可以调用getElementsByClassName()来选择指定CSS类的元素,它返回一个实时的Nodelist对象,包含文档或元素所有匹配的后代节点.
    - getElementByClassName()只需要一个字符串参数,但是该字符串可以由多个空格隔开的标识符组成,只有当元素的class属性包含所有指定的标识符时才匹配.
+ 匹配指定的css选择器
    - Document对象的方法querySelectorAll(),它接受一个css选择器的字符串参数,返回一个代表文档中匹配选择器的所有元素的Nodelist对象,并不是实时的.如果没有匹配对象,则会返回一个空的Nodelist对象.
    ```
    document.querySelectorAll('div') //匹配所有class名为div的元素
    ```
    - 还有一个querySelector()方法,其原理和queryselectorArr()一样,不是他返回第一个匹配的元素(以文档顺序),如果没有匹配就返回null.

+ 1.3文档结构和遍历
+ 作为节点树的文档
    - Document对象,它的Element对象和文档中表示Text对象都是Node对象.
+ Node属性:
1. parentNode 
    - 该节点是父节点,或者针对类似Document对象应该是null,因为它没有父节点.
2. childNodes
    - 返回只读的类数组对象(NodeList对象),它是该节点的子节点的实时表.
    - 注意该节点还包括文本节点和注释节点.
3. firstChild,lastChild
    - 该节点的子节点中的第一个和最后一个,如果该节点没有子节点则为null.
    - 注意:这两个属性返回的除了HTML元素子节点,还可能是文本节点或注释节点.
4. nextSibling,previousSibling
    - 该节点的兄弟节点中的前一个和下一个.具有相同的父节点的两个节点称为兄弟节点,节点的顺序反映了它们在文档中出现的顺序.这两个属性将节点之间以双向链表形式链接起来.
    - 注意:这两个属性返回的除了HTML元素子节点,还可能是文本节点或者注释节点
5. textContent
    - 返回该节点和它的所有后代节点的文本内容.
6. nodeType
    - 该节点的类型
    - 9:Document节点 文档节点
    - 1:Element节点 元素节点
    - 3:Text节点    文本节点
    - 8:Comment节点  //注释节点
    - 11:DocumentFragment节点
7. nodeValue 
    - Text节点和Common节点的文本内容.只有Text节点和Comment节点的nodeValue可以返回结果,其他类型的节点一律返回null.
8. nodeName
    - 元素的标签名,以大写形式表示 

+ 作为元素树的文档
    - 当我们的关注点在文档的元素上而非它们之间的文本上市,JavaScript提供了另一个API,它将文档看做element对象树.忽略部分文档:Text和Comment节点
+ 属性
1. children
    - 类似childNodes,返回一个NodeList对象,但children列表只包含Element对象.
    - 注意: Text和Comment节点没有children属性,意味着node.parentNode属性不可能返回Text或Comment节点.任何Element的parentNode总是另一个Element,或者追溯到树根的Douemnt或DocumentFragment节点.
2. fristElementChild,lastElementChild
    - 类似firstChild和lastChild,但只代表Element.
3. nextElementSibling,previousElementSibing
    - 类似nextsibling和previousSilibing,但只代表兄弟Element.
4. childElementCount
    - 子元素的数量.返回的值和children.length值相等.
5. offsetParent
    - offsetParent属性返回当前HTML元素最靠近的,并且CSS的postion属性不等于static的父元素.如果某个元素的所有上层节点都将postion属性设为static,则element.offsetParent属性指向body元素.
+ 1.4NodeList对象和HTMLCollecion对象
    - NodeList实例对象是一个类数组对象,它的成员是节点对象.比如node.childNodes
    - document.querySelectorAll()返回的都是NodeList实例对象
    ```
    document.childNodes instanceof NodeList //true
    ```
    - Nodelist实例对象可能是动态集合,也可能是静态集合.所谓动态对象就是一个活的集合,DOM数输出或新增一个相关节点,都会立即反映在Nodelist接口之中.
    - Node.childNodes返回的,就是一个动态集合.
    - NodeList接口实例对象提供length属性和数字索引,因此可以向数组那样,使用数字索引出每个节点,但是他本身不是数组,不能使用pop或push之类的数组特有的方法

+ 1.5HMTLCollection对象
    - 是一个接口,表示HTML元素的集合，同样拥有length，item(),[].等属性方法
    - HMTLCollection实例对象与NodeList实例对象类似,也是节点的集合,返回类数组对象.
    - 在HTMLdocument类中,有一些快捷属性来访问各种各样的节点.比如:imges,forms和links等属性指向类数组的img form a元素集合.这些属性都是返回HTMLCollection实例对象. 
    - HTMLDocument还定义了两个属性,它们指代特殊的单个元素而非元素集合.
    - document.body是一个HTML文档的body元素
    - document.head是head元素
+ HTMLCollection与NodeList的区别
    -  HTMLCollection实例对象的成员只能是Element节点,NodeList实例对象的成员可以包含其他节点
    -  HTMLCollection实例对象都是动态集合,节点的变化会实时反映在集合中.NodeList实例对象可以是静态集合.
    -  HTMLCollection实例对象可以用id属性或name属性引用元素节点,NodeList只能使用数字索引引用

+ 1.6元素的内容
+ 作为HTML的元素内容
1. innerHTML
    - 读取Element的innerHTML属性作为字符串标记返回那个元素的内容
    - 除了获取还可以设置.
2. outerHTML
    - outerHTML属性返回一个字符串,内容为指定元素节点的所有HTML代码,包括它自身和包含的所有子元素. 
    - outerHTML属性是可读写的,当设置元素的outerHTML是,元素本身的内容被新内容替换.
    - 注意:只有element节点有outerHTML属性,Document节点没有

3. 作为纯文本的元素内容
    - 当要查询纯文本形式的元素内容或在文档中插入纯文本(不必转义HTML标记中使用的尖括号后台&符号)时,我们使用node的textContent属性来实现:
    - textContent属性就是将指定元素的所有后代Text节点简单的串联在一起
    - 注意:在IE中,使用innerHTML代替HTMLcontent.
+ 1.7创建 删除 插入节点
+ 创建节点
1. creatElement()
    - 创建新的Element节点可以使用Document对象的creatElement()方法.给方法传递一个元素的标签名作为参数(对HTML文档来说该标签名不区分大小写的)
2. creatAttribute()
    - 创建一个新的属性对象节点,并返回它,参数是属性的名称.
3. creatTextNode()
    - 创建一个text节点,参数为所要生成的文本节点的内容
4. cloneNode()
    - 用来复制已存在的节点.每个节点有一个cloneNode()方法,返回该节点的一个全新副本.传递一个可选的布尔值为参数,如果参数true则同时克隆该节点的所有后代节点,否则只克隆该节点,默认为false.
+ 插入节点
1. appendChild()
    - 接受一个节点对象作为参数,将其作为最后一个子节点,插入当前节点.
    ```
    parentNode.appendChild(newNode)
    ```
2. insetBefore()
    - 用于将某个节点插入当前节点的指定位置.它接受两个参数,第一个参数是所要插入的节点,第二个参数是当前节点的一个子节点,新的节点将插在这个节点的前面.该方法返回被插入的新节点.
    ```
    parentNode.insertBefore(newNode.oldNode)
    ```
    - 注意:调用上面两个方法的时候,如果要插入的节点是已存在的文档中.那个节点将自动从它当前的位置移除并在新的位置重新插入

+ 删除和替换节点
1. removeChild()
    - 从文档树中删除一个节点
    - 注意:该方法不是在待删除的节点上调用,而是在其父节点上调用.父节点调用该方法,并将需要删除的子节点作为参数传递给它.
    ```
    n.parentNode.removeChild(n);
    ```
2. replaceChild()
    - 删除一个子节点并用一个新节点替换它.也是在父节点上调用.第一个参数是新节点,第二个参数是需要代替的节点
    ```
    var span = document.createElement('span');
    n.parentNode.replaceChild(span,n);


