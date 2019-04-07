## 什么是HTML5 WEB存储?
+ 使用html5新API可以在本地存储用户的浏览数据
+ 之前,本地存储用的是cookie.但是web存储需要更加安全与快速,这些数据不会保存在服务器上,但是这些数据只用于用户请求网站数据上,它也可以存储大量数据,而不影响网站的性能.
+ 数据也键/值 对存在,web网页的数据只允许该网页访问使用

## LocalStorage 和 sessionStorage
+ 客户端存储数据的两个对象为:
+ localStorage - 没有时间限制的数据存储 
+ sessionStorage(会话储存) - 针对一个session的数据存储(关闭窗口,存储数据清空)
## setItem存储value
+ 用途:将value存储到key字段
+ 用法:.setItem(key,value);
```
sessionStorage.setItem("key", "value"); localStorage.setItem("site", "js8.in");
```
## getItem获取value
+ 用途:获取指定key本地存储的值
+ 用法.getItem(key)
```
var value = sessionStorage.getItem("key"); 	var site = localStorage.getItem("site");
```