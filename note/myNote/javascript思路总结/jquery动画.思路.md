>jquery动画思路
> 首先思考当鼠标放入图片上时,图片打开.且兄弟图片自动收缩.当鼠标移开时,图片自动返回原始位置
1. 首先需要一个timeout定时器,用来监听每次图片的打开和收缩.当移到下一张时.清空定时器.并开始下一张的操作
2. 先给li绑定一个鼠标移入事件.将当前获取到的li保存在局部变量和全局变量中这一步是关键.因为当前获取到的li在定时器函数中获取不到.而且在另一个鼠标移开事件中也获取不到.所以需要在全局声明一个变量用来保存当前的li. 
3. 打开定时器.拿到当前的li然后设置动画.将自己打开,同时将他的兄弟收缩.
4. 给盒子整体绑定一个鼠标移出事件.然后用拿到的全局的li设置动画事件.恢复到原来位置.