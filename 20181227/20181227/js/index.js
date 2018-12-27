/*
 * 初始化SWIPER，基于一些参数配置实现滑屏的效果
 * https://www.swiper.com.cn/api/
 */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        } 
      }
  
});