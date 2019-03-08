## 捕获事件
+ jquery DOM操作
>获得内容 text() html() val()
+ text 设置获或返回所选元素的内容
+ html 设置或返回所选元素的内容(HTML标记)
+ val 设置或返回表单字段的值

>text(),html(),val()的回调函数
+ 它们同样都有回调函数,回调函数有两个参数:
+ 被选元素列表中当前元素的下标.以及原始值.然后以函数新值返回你希望使用的字符串的值



>获取属性-attr()
+ jqeury attr()方法用于获取或设置被选元素的属性和值
    - 当该方法用于返回属性的值,则返回第一个匹配元素的值\
    - 当该方法用于设置属性值,则为元素匹配设置一个或者多个属性/值对
+ 语法
    - 返回属性的值
    - $(selector).attr(attribute)
    - 设置属性的值
    - $(selector).attr(attribute,value)
+ attr方法允许您同时设置多个属性.
```
$('button).click(function(){
    $('img).attr('width','500');
}) 