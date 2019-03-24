var express = require('express');
var router = express.Router();
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
// 拦截从客户端发送来的url 找到index引擎模板进行渲染. 用第二个参数来替换占位符
router.get('/', function(req, res, next) {
  res.render('index', { title: '欢迎来到我的首页' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { 
    title: '登录页面',
    userCenter: '用户中心'
  });
});

// 后台接收前台发出的登录请求,并拦截doLogin 进行数据判断
router.post('/doLogin', function(req, res, next) {
  var flag = false;
  var username = req.body.username;
  var password = req.body.password;
  for(var i = 0 ; i < db.length; i++){
    if(db[i].username == username){
      if(db[i].password== password){
        flag  = true;
        break;
      } 
    }
  }
    // 如果登录成功
    if(flag){
      // 需要将数据提交到数据库中
      session.push({
        username:username
      })
      // 重新定向到succ,相当于重新创建了一个路由，清空数据，并修改地址栏
      res.redirect('/succ')
    }else{
      res.redirect('/fail')
    }
  // res.render('doLogin', { title: 'express'});
});

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
  res.render('fail.ejs', { title: '登录失败' });
});
// 退出登录
router.get('/doLogout', function(req, res, next) {
  res.redirect('/')
  session=[];
});

module.exports = router;

