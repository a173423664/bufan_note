// 立即执行函数
(function(){
    // 这是构造函数中的属性及方法
    function mySwiper(banner,dotts,arrL,arrR){
        this.bannerEl =document.querySelector(banner);
        this.swiper = this.bannerEl.children[0];
        this.arrL = document.querySelector(arrL);
        this.arrR = document.querySelector(arrR);
        this.count = 0;
        this.timer = null;
        this.timer2 = null;
         
        // 初始化函数
        this.init();
        // this.timer2=null;
    }
    // 在构函数函数的原型对象中方法及属性
    mySwiper.prototype = {
        constructor : mySwiper,
        // 一般作为对象的启动函数
        init: function(){
            this.initSwiperHtml();
            // this.initDottsHtml();
            this.autoPlay();
            // this.goNext();
            this.initDottsHtml();
            this.initDottsEvent();
            this.hoverSwiper();
            // this.changeDottsActive();
            this.goLeft();
        },
        // 自动播放
        autoPlay:function(){
            // var liW = this.swiper.children[0].offsetWidth;
            var that = this;
            that.timer2 =setInterval(()=>{
                that.count++;
                that.goNext();
                that.changeDottsActive(that.count);
                console.log(that.count);
            },2000)
        },

        // 缓动动画封装
        animate:function(target){
            // 先清除上一次的定时器
            clearInterval(this.timer);
            var that = this;
            this.timer = setInterval(function(){
                // 当前位置
            var current = that.swiper.offsetLeft;
                // 获取步长
            var step = (target-current)/10;
            // 修正步长
            if(Math.abs(step)<1){
                step = step>0?1:-1;
            }
            // 获取当前位置
            current += step;
            // 赋值给
            that.swiper.style.left = current+'px';
            if(current==target){
                clearTimeout(that.timer);
            }
            },17)
        },
        // 初始化swiper页面
        initSwiperHtml:function(){
            var str = '';
            for(var i = 0 ; i< this.imgS.length; i++){
                str += '<li class="swiper-slide"><img src="img/'+this.imgS[i]+'" alt=""></li>'
            }
            // 插入父节点中
            this.swiper.innerHTML = str;
            // lis = myChildren(swiper);
        },
        // 封装一个轮播图运动函数
        goNext:function(){
            var liW = this.swiper.children[0].offsetWidth;
            if(this.count<0){
                //    当count小于0时,图片跳转到最后一张(相同图片).然后通过动画缓动到倒数第二张)
                this.count = this.imgS.length-2;
                this.swiper.style.left = -1*liW*(this.imgS.length-1)+'px';
                }
                // 当轮播到最后一张时,图片切换到第一张,然后通过动画缓动到倒数第二张
                if(this.count == this.imgS.length){
                    // 一般在方法里对全局变量的修改仅限于方法体内，方法结束之后，全局变量就会恢复之前的值
                    this.count = 1;
                    this.swiper.style.left = 0;
                    // console.log('kksdf')
                    }
                var target = -1* this.count*liW;
                this.animate(target);
        },
        // 初始化dotts初始化页面
        initDottsHtml:function(){
            var str = '';
            for(var i = 0 ; i<this.imgS.length-1; i++){
                // 默认第一个点为激活状态
                var classStr = i==0?' class="active"':' ';
                str += '<li'+classStr+'><a href="javascript:;"></a></li>';
            }
            this.dottEl.innerHTML = str;
        },
        // 左右箭头生成方法
        goLeft:function(){
            var that = this;
            this.arrR.onclick = function(){
                that.count++;
                that.goNext();
                that.changeDottsActive(that.count);
                // console.log(that.count);
            }
            this.arrL.onclick = function(){
                that.count--;
                that.goNext();
                that.changeDottsActive(that.count);
            }
        },

        // 小圆点点击事件
        initDottsEvent:function(){
            var that = this;
            var liW = this.swiper.children[0].offsetWidth;
            var dottLis = this.dottEl.children;
            for(var i = 0 ; i < dottLis.length; i++){
                // 保存一下下标 (保存在对象的属性中)
                // var that = this;
                dottLis[i].index = i;
                dottLis[i].onclick = function(){
                    // 这里一定要区分清楚 后面的this指的是点击的小圆点. 前面的that指的是计时器
                    that.count = this.index;
                    var target = -1*liW*that.count;
                    that.animate(target);
                    that.changeDottsActive(that.count);
                    // console.log('==='+that.count)
                }
            }
        },
        // hover轮播事件
        // 鼠标进入时暂停,离开时开启
        hoverSwiper:function(){
            var that = this;
            this.bannerEl.onmouseenter = function(){
                clearInterval(that.timer2);
                console.log('鼠标移入了')
            }
            this.bannerEl.onmouseleave = function(){
                that.autoPlay();
                console.log('鼠标移出了')
            }
        },
        // 小圆点激活样式
        changeDottsActive:function(){
            var dottLis = this.dottEl.children;
            // 生成一个局部变量 让全局的count等于4的时候.count=0,否则的count=全局的count
            var count =0; 
            if(this.count == 4){
                count = 0
            }else{
                count = this.count;
            }
            // 排他思想
            for(var i = 0; i < dottLis.length; i++){
                dottLis[i].classList.remove('active');
            }
            dottLis[count].classList.add('active');
        }

    }
    window.WuHaoSwiper = mySwiper;


})()