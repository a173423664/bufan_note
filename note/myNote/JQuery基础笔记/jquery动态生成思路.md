## jquery动态生成思路
>思路整理
1. 首先思考将添加后显示输入框.只需要给输入框盒子添加激活样式.
2. 输入框弹出后,有确定和取消两个按钮.输入文本内容后,点击确定.表格会获取数据
    - 第一步给确定按钮绑定点击事件
    - 获取输入框中输入的值,并判断
    - 如果一个空值如果为空,则继续添加新数据.通过append方法在表格中添加数据.
    - 如果不为空,说明已经获取到了需要修改得数据.此时将需要修改的数据修改.可以利用find()先找到属性.然后利用text()方法将新获取到的数据传入 (注意是th里的属性需要用text) 方法
    - 点击后,文本内容还要记得清空.并关闭输入框
3. 点击编辑按钮
    - 点击编辑按钮后,因为是动态添加的所以需要事件委派.
    - 然后找到这个点击按钮的父元素的父元素的孩子节点也是tr节点获取当前的val值.
    - 编辑需要先获取要当前一行的数据然后赋值给input.最后保存在el中,让el变成需要修改的那一行
    - 另外编辑的时候还需要将编辑框打开,并赋值给el.也就是让el变成需要修改的那一行节点.
4. 点击取消按钮(需要将动态添加事件委派)
    - 取消的时候,并不是点击一下就取消而是要先弹出确定/取消框 
    - 点击确定后才是真正的取消,但此时电脑不会判断要删除哪一个
    - 此时弹出确定取消按钮
    - 所以确定之前要先把要删除的值保存一下
    - 
5. 点击确定按钮
    - 删除 保存好的指定数据
    - 并且关闭确定框
