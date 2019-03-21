+ package.json
    - 里面包含项目的基本描述,以及依赖库(dependencies).
+ view里面是展示的视图ejs文件,实际上就是html页面文档.里面的引入css样式在pulic下的stylesheets下的style.css文件.
+ bin里面是启动文件.
+ router
    - res表示response对象 响应对象
    - res.render 把数据填充到模板    找到index的模板引擎,并用第二个参数 渲染页面的内容(渲染占位符).
+ 注意每次修改后台文件后修改重新更新cls,然后在访问.
+ 需要开启服务后再访问服务器端的网页




