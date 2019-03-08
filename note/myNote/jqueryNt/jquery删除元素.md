## jquery删除元素
+ remove()删除被选元素(及其子元素)
+ empty从被选元素中删除子元素

>过滤被删除的元素
+ jquery remove()方法也可接受一个参数,允许您对被删元素进行过滤.
+ 该参数可以接受任何jquery选择器的语法.
```
$('p').remove('.italic');
```
上面列子是删除所有class名为italic的所有p元素

