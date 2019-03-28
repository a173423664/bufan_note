// 需要一个立即执行函数,当加载完js文档后,立即执行
(function(){
    // 给自身添加属性
    function mySwiper(banner,dotts,arrL,arrR){
        this.banner = document.querySelector(banner);
        this.swiper = this.banner.children[0];
        this.timer = null;
        this.timer2 = null;
        this.count = 0;
        this.arrL = document.querySelector(arrL);
        this.arrR = document.querySelector(arrR);
        this.imgS = ['m1.jpg','m2.jpg','m3.jpg','m4.jpg','m1.jpg'];
        this.dottEl = document.querySelector(dotts);
        this.init();
    }
    // 第二步给原型对象添加属性
    mySwiper.prototype = {
        construction : mySwiper, 
        init:function(){
            this.initSwiperHtml();
            this.autoPlay();
            this.initDottsHtml();
            this.initDottsEvent();
            this.hoverEvent();
            this.goLeft();
        },
        initSwiperHtml:function(){
            var str = '';
            for(var i = 0 ; i< this.imgS.length; i++){
                str += '<li class="swiper-slide"><img src="img/'+this.imgS[i]+'" alt=""></li>'
            }
            // 插入父节点中
            this.swiper.innerHTML = str;
        },
        // 自动播放
        autoPlay:function(){
            var that = this;
            this.timer2 = setInterval(function(){
                that.count++;
                that.goNext();
                console.log(that.count);
                that.changeActiveDotts();
            },2000) 
        },
        // 缓动函数
        animate:function(target){
            clearInterval(this.timer);
            var that = this;
            this.timer = setInterval(function(){
                // 当前位置
                var current = that.swiper.offsetLeft;
                // 设置步数
                var step = (target-current)/10;
                // 修正步数
                if(Math.abs(step)<1){
                    step = step>0?1:-1;
                }
                // 重新赋值
                current += step;
                that.swiper.style.left = current+'px';
                if(target==current){
                    clearInterval(that.timer);
                }
            },17)
        },
        // 封装一个函数控制移动
        goNext:function(){
            var liW = this.swiper.children[0].offsetWidth;
             // 当图片往右移动的时候
             if(this.count<0){
                this.count = this.imgS.length-2;
                this.swiper.style.left = -1*(this.imgS.length-1)*liW+'px';
            }
            // 当图片往左移动时
            if(this.count==this.imgS.length){
                this.count = 1;
                this.swiper.style.left = 0;
            }
            var target = -1*liW*this.count;
            this.animate(target);    
        },
        // 初始化dotts页面
        initDottsHtml:function(){
            var str = '';
            for(var i = 0 ; i<this.imgS.length-1; i++){
                // 默认第一个点为激活状态
                var classStr = i==0?' class="active"':' ';
                str += '<li'+classStr+'><a href="javascript:;"></a></li>';
            }
            this.dottEl.innerHTML = str;
        // 小圆点点击事件
        },
        initDottsEvent:function(){
            var liW = this.swiper.children[0].offsetWidth;
            var dottLis = this.dottEl.children;
            var that = this;
            for(var i = 0 ; i < dottLis.length; i++){
                // 保存一下下标 (保存在对象的属性中)
                dottLis[i].index = i;
                dottLis[i].onclick = function(){
                    that.count = this.index;
                    var target = -1*liW*that.count;
                    that.animate(target);
                    that.changeActiveDotts();
                }
            }
        },
        // 左右箭头
        goLeft:function(){
            var that = this
            allL.onclick= function(){
                that.count--;
                that.goNext();
            }
            allR.onclick = function(){
                that.count++;
                that.goNext();
            }
        },
        // hover事件
        hoverEvent:function(){
            var that = this;
            this.banner.onmouseenter = function(){
                clearInterval(that.timer2);
            }
            this.banner.onmouseleave = function(){
                that.autoPlay();
            }
        },

    // 小点点激活样式
        changeActiveDotts:function(){
            var dottLis = this.dottEl.children;
            // 设置一个局部变量用来控制激活样式.而不是依靠全局的count;
            var count = 0;
            if(this.count==4){
                count = 0;
            }else{
                count = this.count;
            }
            for(var i = 0 ; i <dottLis.length; i++){
                dottLis[i].classList.remove('active');
            }
            dottLis[count].classList.add('active');
            // for(var i in dottLis){
            // }
        }
    }
        window.WuHaoSwiper = mySwiper;
        
})()