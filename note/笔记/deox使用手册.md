1. hexo new "post-title" 生成一个标题为post-title的md文件
2. hexo new draft "draft-title" 生成一个标题为draft-title的草稿文件
3. hexo new page  生成纯页面文件
4. 在scaffolds下的模板文件
5. config 网站配置文件 themes主题配置文件
+ package.json
    - 应用程序信息，新添加的插件内容也会出现在这里面，我们可以不修改这里的内容。
+ scaffolds
    - scaffolds就是脚手架的意思，这里放了三个模板文件，分别是新添加博客文章（posts）、新添加博客页（page）和新添加草稿（draft）的目标样式。
这部分可以修改的内容是，我们可以在模板上添加比如categories等自定义内容
+ source
    - 是放置我们博客内容的地方，里面初始只有两个文件夹，一个是drafts（草稿），一个posts（文章），但之后我们通过命令新建tags（标签）还有categories（分类）页后，这里会相应地增加文件夹.
+ themes
    - 放置主题文件包的地方。Hexo会根据这个文件来生成静态页面。初始状态下只有landscape一个文件夹，后续我们可以添加自己喜欢的。

+ 根据我的经验，除了第一次部署的时候，我们会重点用到hexo init这个命令外，在平时写博客和发布过程中最常用的就是：
    - hexo n `<filename>` 新建文章
    - hexo s 启动服务器，在本地查看内容
    - hexo g 生成静态页面
    - hexo deploy 部署到网站
  
+ 创建分类页面
    - hexo new page categories
    - 
+ 给分类页面添加类型
    - 我们在source文件夹中的categories文件夹下找到index.md文件，并在它的头部加上type属性。
    - 
+  给模板添加分类属性
    - 现在我们打开scarffolds文件夹里的post.md文件，给它的头部加上categories:，这样我们创建的所有新的文章都会自带这个属性，我们只需要往里填分类，就可以自动在网站上形成分类了。


