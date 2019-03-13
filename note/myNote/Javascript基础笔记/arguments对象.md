## arguments对象
1. 可以实现n个值累加
2. 当然还有es6中的新方法,如不定参数
```
    function add(){
        var sum = 0;
        for(var i= 0; i <arguments[i]; i++){
            sum += argument[i];
        }
        return sum;
    }
    alret(add(3,4,5)) //12
```
+ 实现值得累加

+ arguments.callee是指函数本身

+ 斐波那契数列原理 1 1  2 3 5 8 13
```function fb(n){
    if(n==2||n==1){
        return 1;
    }
    return arguments.callee(n-1)+arguments.callee(n-2);
}
alert(fb(7));
```
+ 注意点: 函数如果直接被打印 不会执行.必须要加上()
