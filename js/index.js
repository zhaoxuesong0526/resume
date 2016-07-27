/**
 * Created by Administrator on 2016/7/23.
 */
FastClick.attach(document.body);
~function (desW) {
    var winW = document.documentElement.clientWidth;
    if (winW > desW) {
        var oMain = document.querySelector(".swiper-container");
        oMain.style.margin = "0 auto";
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);
 new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    onSlideChangeEnd: function (swiper) {
        var ind=swiper.activeIndex;
        var slides=swiper.slides;
        var len=slides.length;
        var trueLen=len-2;
        [].forEach.call(slides, function (item, index) {
            if(index==ind){
                item.id='page'+(ind % trueLen==0?( trueLen):ind %trueLen);
                console.log(item.id);
                return;
            }
            item.id=null;
        })
    }
});