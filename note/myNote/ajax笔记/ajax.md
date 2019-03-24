## ajax
>同步(Synchronous)和异步(Asynchronous)
+ AJAX的全称是Asynchronous JavaScript and XML（异步的 JavaScript 和 XML
+ 所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新.
+ 注意:ajax不是一种新的编程语言,而是一种用于创建更快更好以及交互性更强的web应用程序的技术.
+ ajax可以用于创建快速动态的网页.
+ 使用ajax步骤
    1. 建立XMLHTTPRequest对象
     - 术语可以缩写为XHR,中文可以解释为可扩展超文本传输请求.
     - XMLHttpRequest对象可以在不向服务器提交整个页面的情况下,实现局部更新网页.
     - XMLHttpRequest对象向服务器请求数据,服务器端接受数据并处理后,向客户端反馈数据.

    2. 向服务器器发送请求.
        - 我们使用XMLHttpRequest对象的open()和send();
        - method:请求的类型 get或post url:文件在服务器上的位置 async:true(异步)或false(同步) send(string)仅用于post请求

+ get还是post
    - 与post相比,get更简单也更快,并且在大部分情况下都能用.
    - 然而,在以下情况中,使用post请求: 
      - 无法使用缓存文件(更新服务器上的文件或数据库)
      - 向服务器发送大量数据(post没有数据量限制)
      - 发送包含未知字符的用户输入时,post比get更稳定也更可靠
+ 用get方法发送信息,请向URL添加信息
+ GET请求具有以下的几个特点:
    1. get请求可以被缓存
    2. get请求保留在浏览器历史记录中
    3. get请求可被收藏为书签
    4. get请求不应在处理敏感数据时使用
    5. get请求有长度限制
    6. get请求知应当用于取回数据(而不是提交数据) 

+ POST请求的特点如下:
    1. POST请求不会被缓存
    2. POST请求不会保留在浏览器历史记录中
    3. POST请求不能收藏为书签
    4. POST请求对数据长度没有要求

+ url-服务器上的文件
    1. open()方法的url参数是服务器上文件的地址.

+ ajax-服务器响应 由于HTTP响应式由服务器发出的,并且服务器做出响应需要时间(比如网速慢等原因),所以我们需要监听服务器响应的状态,然后才能进行处理
    1. 如需获得服务器的响应,需要使用RequestXML或者responseText属性(获得字符串形式的响应数据)

+ onreadystatechange事件(当发送一个请求后,客户端需要确定这个请求什么时候会完成,因此XMLHttpRequest对象提供了onreadystatechange事件机制来捕获请求的状态,继而实现响应)
    1. readystate属性存有XMLHttpRequest的状态信息.
        - 0:请求未初始化
        - 1:服务器连接已建立
        - 2:请求已接收
        - 3:请求处理中
        - 4:请求已完成,且响应已就绪
    2. status
        - 200:OK
        - 404:未找到页面

    3. 当readyState等于4且状态为200时,表示响应已就绪.

    4. 注册回调函数(当服务器回应了我们,执行什么函数)
    5. 使用open方法设置和服务器端交互的基本信息.(设计提交的网址,数据,post提交的一些额外的内容)
    6.  设置发送的数据,开始和服务器端交互(发送数据)
    7.  更新界面.在注册的回调函数中获取返回的数据,更新界面.

+ 注意:如何在submit提交之前做拦截?
    - 在表单设置一个onsubmit事件,会在提交按钮提交时触发,  返回一个函数,然后在函数内部进行判断.