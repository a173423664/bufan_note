## git其他功能介绍
>gitignore忽略文件
+ 在项目根目录下创建一个.gitignore文件,可以将不希望提交的罗列在这个文件里,如项目的配置文件,node,modules(模块);
+ 在window上无法直接创建
+ index.html
+ web/直接忽略当前文件夹

>checkout
+ git checkout xxx
+ 如果暂存区有内容,会把暂存区的内容捡出来到工作区.
+ 如果暂存区没有内容,会把储存区的内容捡出来到工作区.
+ 撤销更改 有风险,不可返回

>时光机
+ git log 查看所有commit历史记录
+ head HEAD -> master标记, 指向哪个值,哪个就是当前的版本
+ git  reset --header  hashxxx  跳到某个版本,但是并没有删除其他版本

>分支
+ git branch  xx   创建分支
+ git checkout xx   切换分支
+ $主分支    git  merge  dev   合并dev分支到当前主分支
+ git branch -d  dev   删除dev分支

> 处理冲突
+ 如果多个用户同时往一个共享仓库提交代码,如果同时修改一个文件会出现冲突
+ 如果出现提交报错,提示冲突,应该先 git pull 拉下来,再通过手动合并.

>提交文件
+ git commit-m'备注信息'