> HTTP协议是Hyper text transfer protocol(超文本传输协议)的缩写 是用于从万维网服务器传输超文本到本地浏览器的传输协议.
> HTTP是一个基于TCP/IP通信协议来传递数据(HTML文件,图片,查询结果等)
>HTTP工作原理
+ HTTP协议工作与客户端与服务器端架构之上.浏览器作为HTTP客户端通过URL向HTTP服务器端即WEB服务器发送所有请求.
+ web服务器有:Apache(阿帕奇)服务器 IIS服务器(internet information services)等1
+ web服务器根据接收到的请求后,向客户端发送响应信息.
+ HTTP默认端口号为80,但是你也可以改为8080或者其他端口

>HTTP三点注意事项
1. HTTP是无连接,无连接的含义是限制每次连接只处理一个请求.服务器处理完客户的请求.并收到客户的应答后,即断开连接.采用这种方式可以减少传输时间.
2. HTTP是媒体独立的: 这意味着,只要客户端和服务器端知道如何处理的数据内容.任何类型的数据都可以通过HTTP发送.客户端以及服务器指定使用适合的MIME-type内容类型(筛选出指定文件类型的请求)
3. HTTP是无状态: HTTP是无状态协议.无状态是指协议对于事务处理没有记忆能力.缺少状态意味着如果后续处理需要前面的信息.则它必须重传.这样可能导致每次链接传送的数据量增大.另一方面,在服务器不需要先前信息时,它的应答就较快

+ CGIabbr.  公共网关接口（Common Gateway Interface）；电脑图像界面（Computer Graphics Interface）
+ database 数据库
+ http server HTTP服务器
+ HTTP protocol HTTP协议超文本传输协议超文本传送协议