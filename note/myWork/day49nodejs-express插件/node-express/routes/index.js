var express = require('express');
var router = express.Router();
// 假如后台有一个数据库
// 这个数据是在内存中保存,当你关闭程序的时候,内存中的数据将被清空,内存中只会保留最原始的数据
var db = [
  {
    username:'张三',
    password:'123' 
  },
  {
    username:'李四',
    password:'123'
  }
]
// 模拟一个session
var session = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 跳转到登录页面 拦截请求/login 找到login.ejs模板引擎进行渲染,用第二个参数替换占位符
router.get('/login', function(req, res, next) {
  res.render('login.ejs', { title: 'Express' });
});

// 后台也配一个doLogin用来接收请求
// 注意:这里发送请求的类型改变 页面发送是psot请求,需要使用post去拦截
// 注意:get/post发送请求携带参数的方式是不同的,所以后台获取的方式也不同
router.post('/doLogin', function(req, res, next) {
  var flag = false;
  // 后台怎么获取数据
  var username = req.body.username;
  var password = req.body.password;

  // 这里需要用js模拟判断数据库中是否有数据
  for(var i = 0 ; i < db.length; i++){
    if(db[i].username == username){
      if(db[i].password == password){
        flag = true;
        break;
      }
    }
  }
  // 存在登录成功
  if(flag){
    // res.render('succ.ejs');
    // 应该重新定向到succ或者fail
    // 注意:重新定向以后会抛弃之前req对象的值(不清空的话,表单刷新会多次提交)
    // redirect重新定向,抛弃之前的req对象内容,防止表单多次提交 并且修改地址栏
    // 相当于在后台又发送了另一个路由里面,然后在进行渲染,这时地址就是发生变化

    // 登录成功的时候加入session
    session.push({
      username:username
    })

    res.redirect('/succ')
  }else{
    res.redirect('/fail');
  }
  // res.render('login.ejs');
});

// 这里是为了把地址栏的交过过的数据去掉,登录成功时跳转到succ页面,失败跳转到fail页面
router.get('/succ', function(req, res, next) {
  var flag = false;
  // 怎么才知道刚才是谁登录了呢?
  if(session.length>0){
    flag = true;
    // 跳转到登录成功页面并且把session的值拿出来
    res.render('succ.ejs',{username:session[0].username})
  }else{
    // 非法访问 
    res.redirect('/login');
  }
  // res.render('succ.ejs');  
});

router.get('/fail', function(req, res, next) {
  res.render('fail.ejs', { title: 'Express' });
});


// 注册请求 
router.get('/reg', function(req, res, next) {
  res.render('reg.ejs'); 
});

// 执行注册(考虑:相同的用户名不能注册)
router.post('/doReg', function(req, res, next) {
// 假设能被注册
  var flag = true;
  var username = req.body.username;
  var password = req.body.password;
  // 在push之前考虑用户名是否存在
  for(var i = 0; i < db.length ; i++){
    if(db[i].username == username){
      // 存在用户名,则不允许被注册
      flag = false;
      break;
    }
  }
  // 允许被注册
  if(flag){
    // 1.让数据push到数据库里面
  db.push({
    username:username,
    password:password
  })
  // 2.跳转到登录页面
  res.redirect('/login');
  }else{
    // 不允许被注册执行
    // 表单数据被清空,并重新定向到注册页面
    res.redirect('/reg');
  }
  
  // res.render('doReg');
});

// 退出登录
router.get('/doLogout', function(req, res, next) {
  // 1.跳到首页

  res.redirect('/'); 
  // 2.清空session 注意:实际开发中,session是由多个对象组成的,一个用户的退出,实际上是删除了该用户对应的session对象
  session = [];
});





module.exports = router;
