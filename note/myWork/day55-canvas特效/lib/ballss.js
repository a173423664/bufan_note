(function(){
    function Ball(cvs,cx,cy){
        this.cvs = cvs;
        this.ctx = cvs.getContext('2d');
        this.cx = cx;
        this.cy = cy;
        this.color = this.ballColor();
        this.r = this.rdB();
        this.init();
    }
    // 构造函数原型对象上的方法
    Ball.prototype = {
        init:function(){
            this.stepX  = this.rdStep();
            this.stepY  = this.rdStep();
            // this.r = Math.floor(Math.random()*40)+20;
            // this.color = this.ballColor();
        },
        // 设置移动的样式
        play:function(){
            // var r = this.r;
            if(this.cx+this.r>=this.cvs.width){
                this.stepX = -1*Math.abs(this.stepX);    
            }
            if(this.cx-this.r<=0){
                this.stepX = Math.abs(this.stepX);
            }
            if(this.cy+this.r>=this.cvs.height){
                this.stepY = -1*Math.abs(this.stepY);
            }
            if(this.cy-this.r<=0){
                this.stepY = Math.abs(this.stepY);
            }
            this.cx += this.stepX;
            this.cy += this.stepY;
            // 创建路径
            this.ctx.beginPath();
        
            // 设置图形的填充颜色
            this.ctx.fillStyle = this.color;
            // 绘制小球
            this.ctx.arc( this.cx , this.cy , this.r , 0 , Math.PI*2, false);
            // 通过填充路径的内容区域来形成实心的图形
            this.ctx.fill();
            // 闭合路径
            this.ctx.closePath();
        },
        // 随机生成小球移动的步数
        rdStep:function(){  
            return Math.floor(Math.random()*10)+1;
        },
        // 随机生成小球的颜色

        // 思路总结: 
        // 当把随机生成颜色写在面向对象内部时
        ballColor:function(){
            var rd = Math.floor(Math.random()*266);
            var rd1 = Math.floor(Math.random()*266);
            var rd2 = Math.floor(Math.random()*266);
            var rs =  'rgb('+rd+','+rd1+','+rd2+')';
            return rs;
        },
        rdB:function(){
           return Math.floor(Math.random()*40)+20;
        }

        



    }
    window.Ball = Ball;
})()