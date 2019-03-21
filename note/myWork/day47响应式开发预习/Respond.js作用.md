## Respond.js的作用
+ 在html页面中我们经常看到
```
<!--[if lt IE 9]>    //判断当前浏览器的版本是否小于IE 9

         <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>

  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<!--[endif]-->
```                                     
+ 其中:Respond.js 是一个快速、轻量的 polyfill(腻子脚本)，用于为 IE6-8 以及其它不支持 CSS3 Media Queries 的浏览器提供媒体查询的 min-width 和 max-width 特性，实现响应式网页设计（Responsive Web Design）。
+ html5shiv 使不支持html5的浏览器支持html5新增的标签,  IE 9支持html5,但是其一下的版本不支持.

+ shim和polyfill有什么区别?
+ 一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现
+ 一个polyfill就是一个用在浏览器API上的shim.我们通常的做法是先检查当前浏览器是否支持某个API,如果不支持的话就加载对应的polyfill.然后新旧浏览器就都可以使用这个API了.术语polyfill来自于一个家装产品Polyfilla: