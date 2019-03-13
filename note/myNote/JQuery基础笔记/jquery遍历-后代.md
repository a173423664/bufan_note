##jquery遍历-后代
>向下遍历DOM树
>下面是两个用于向下遍历DOM树的Jquery方法
+ jquery children()方法
    - children()方法返回被选元素的所有直接子元素
    - 该方法只会向下一级对DOM树进行遍历
    - 下面例子返回类名为"1"的所有p元素,并且它们是div的直接子元素
    - $('div').children('p.1');
+ find()
    - find()方法返回被选元素的后代元素,一路向下直到最后一个后代
    - 下面的例子返回属于div后代的所有span元素
    - $('div').find('span');
    - 下面例子返回div的所有后代元素
    - $('div').find('*');