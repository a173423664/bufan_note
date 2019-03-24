## Express
+ 项目名:
+ bin
    - www 用于创建http服务,并设置端口
+ public
    - 用于发布静态资源,如果使用html,../public
    - img 项目中直接使用/img,项目发布后页面的请求都是相对路径
    - CSS
    - JS
    - lib
+ Routes --路由 用于拦截客户端url请求。并根据请求寻找相应的处理逻辑。
    -  Index.js		---   在app.js中设置路由的命名空间
+ Views  --前端模板
    - index.ejs
    - error.ejs
+ app.js
    - 1.引入项目必须的模块.
    - 2.定义项目的路由
    - 3.设置项目的模板
+ Node modules
    - 项目的依赖库，该项目启动 必须安装的第三方库。根据package.json安装的库。
+ package.json --- 项目依赖的库及项目基本信息的配置文件，当在项目目录执行npm install的时候 ，npm会解析该目录，并从网上安装所有项目依赖的中间件。