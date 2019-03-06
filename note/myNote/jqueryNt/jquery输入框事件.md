## jquery输入框事件 总结
>input输入框 propertychange
+ 做搜索框功能的时候,经常遇到输入框的检查的需要.最常见的就是即使搜索.今天好好总结一下.
+ 即时搜索的方案
1. change事件 触发事件必须满足两个条件
    - 当前对象属性改变,并且是由键盘或者鼠标事件激发的.(脚本触发无效)
    - 当前对象失去焦点(onblur)
2. keypress 能监听键盘事件
3. propertychange(ie)和input事件
    - input是浏览器的标准事件,一般应用于input元素.当input的value发生变化就会发生,不论是键盘输入,还是鼠标黏贴的改变都能及时监听到变化
    - propertychange,只要当前对象属性发生变化.

+ 监听内容的时候输入
    - 判断如果输入内容长度大于0,prop的的值返回disable false,让按钮可用,否则不可用,返回true;  
    - 这里最好用prop来获取属性它返回两个值true和false.
    
+ 监听发布按钮的点击 常见节点的方法.
    - 拿到用户输入的内容 val/text
    - 根据内容创建节点.
    - 插入append或者prepend(); 

+ 生成时间的方法
<!-- + 生成时间的方法 --> 
    - var data = new Data()
    - 打印一下时间,不符合格式,需要调整
    - data.getFullYear() 年
    - data.getMonth() 月 月是以0开始算的
    - data.getData()  天
    - data.getHours() 时
    - data.getMinutes()分
    - data.getSeconds()秒
    - 然后利用数组拼串
    - var arr = [data.getFullYear()+'-',data.getMonth()+1+'-',data.getData()+'',data.getHours()+':',data.getMinutes()+':',data.getSeconds()] ;  
    - 数组变成字符串join('');
    - 然后return arr.join(''); 

+ 监听一下点,踩的按钮点击
    - text()拿到的内容是字符串,数字才能相加.可以使用parseInt方法

+ 删除内容
    - 需要找到指定的祖先,parents()