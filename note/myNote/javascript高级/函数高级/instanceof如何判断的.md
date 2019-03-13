>instanceof是如何判断的?
+ 表达式:A instance of B
+ A是实例对象 有隐式原型  ,B代表构造函数 构造函数有显式原型属性 
+ 如果B的显示原型属性在A的原型链上,则返回true,否则返回false
+ Function是通过new自己产生的实例