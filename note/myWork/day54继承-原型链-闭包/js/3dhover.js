// 面对对象封装第一步:都需要一个立即执行函数 可以使全局变量不受污染.
(function(){
    function my3dhover(el){
        this.$el = $(el);
        this.deg = 35;
        // 入口函数
        this.init()
    }
    my3dhover.prototype ={
        init:function(){
            this.mouseenter();
            this.mousemove();
            this.mouseleave();
        },
        // 鼠标进入的时候
        mouseenter:function(){
            var that = this;
            this.$el.mouseenter = function(){
                that.$el>img.css('transition','none');
            }
        },
        mousemove:function(){
            var that = this;
            this.$el.mousemove = function(e){
                var positionX = that.$el .width()/2 -(e.pageX - that.$el.offset().left);
                var positionY = that.$el .height()/2 -(e.pageY - that.$el.offset().top);
                // 对应的角度
                var degX = positionY/that.$el.width()*that.deg;
                var degY = -positionX/that.$el.height()*that.deg;
                var transformValue = 'rotateX('+degX+'deg)  rotateY('+degY+'deg)'; 
                this.$el.css('transform', transformValue);
            }
        },
        mouseleave:function(){
            var that = this;
            this.$el.mouseleave = function(){
                that.$el.css('transition', 'all ease .4s');
                that.$el.css('transform' , 'rotateX(0) rotateY(0)');
            }
        }
    }
    window.my3dhover = my3dhover;

})()