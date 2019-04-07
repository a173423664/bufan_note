(function(){
    function Ball(cvs,cx,cy,r,color){
        this.cvs = cvs;
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.ctx = cvs.getContext('2d');
        this.color = color;
        // 还需要一个时间参数
        this.timer = null;
        // 初始函数
        this.init();
    }
    
    Ball.prototype = {
        // 入口函数
        init:function(){
            this.stepX = this.rdStep();
            this.stepY = this.rdStep();
            this.play();
        },
        play:function(){
            var that = this;
             // 下面需要让小球动起来
             clearInterval(this.timer);
    this.timer = setInterval(function(){
        // 清除小球的运动之前的轨迹
        that.ctx.clearRect(that.cx-that.r, that.cy-that.r, that.r*2, that.r*2);
        // 需要判断小球运动临界点的处理
        if(that.cx+that.r>=that.cvs.width){
            // X轴方向改变
            that.stepX = -1*Math.abs(that.stepX);
        }
        if(that.cx-that.r<=0){
            that.stepX = Math.abs(that.stepX);
        }
        if(that.cy+that.r>=that.cvs.height){
            that.stepY = -1*Math.abs(that.stepY);
        }
        if(that.cy-that.r<=0){
            that.stepY = Math.abs(that.stepY);
        }
        that.cx += that.stepX;
        that.cy += that.stepY;
        // 开始路径
        that.ctx.beginPath();
        // 绘制小球的位置变化
        // fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式
        that.ctx.fillStyle = that.color;
        that.ctx.arc(that.cx,that.cy,that.r,0,Math.PI*2,false);
        // 填充当前图片路径,默认是黑色
        that.ctx.fill();
        // 结束路径
        that.ctx.closePath();

    },17)
        },
        // 小球的随机速度
        rdStep:function(){
            return Math.floor(Math.random()*10)+1;
        },
        // stop:function(){
        //     clearInterval(this.timer);
        // }

    }
    window.Ball = Ball;
})();