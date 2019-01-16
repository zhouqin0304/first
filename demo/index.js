// var v1 = $('.box2').offset().top;
// // 给Window注册scroll事件
// $(window).scroll(function () {
//     // 获取被卷去的页面间距
//     var v2 = $(window).scrollTop();
//     // 判断
//     if (v2 >= v1) {
//         // 今日团要固定
//         $('.box2').addClass('active');
//         // 回到顶部要显示
//         $('.top').show()
//     }else{
//         // 今日团不固定
//         $('.box2').removeClass('active');
//         // 回到顶部要隐藏
//         $('.top').hide();
//     }
// });
// // 回到顶部
// // 给top注册点击事件
// $('.top').click(function () {
//     // 设置
//     $(window).scrollTop(0);
// });



// 【检测是否要固定今日团，回到顶部是否显示】
// 获取今日团距离文档的位置
// offset()方法获取的元素的位置，永远参照文档。和定位没有关系
var v1 = $('.box2').offset().top;
// 给Window注册scroll事件
$(window).scroll(function () {
    // 获取被卷去的页面间距
    var v2 = $(window).scrollTop();
    // 判断
    if (v2 >= v1) {
        // 今日团要固定
        $('.box2').addClass('active');
        // 回到顶部要显示
        $('.top').show();
    }else{
        // 今日团不要固定
        $('.box2').removeClass('active');
        // 回到顶部要隐藏
        $('.top').hide();
    }
});

// 【回到顶部】
// 给top注册点击事件
$('.top').click(function () {
    // 设置回到顶部
    $(window).scrollTop(0);

    // 设置回到顶部的动画效果
    // 使用自定义动画方法
    // 自定义动画中要设置一个属性和目标值，属性名--scrollTop，目标值--数字
    // 动画给谁加？
    // 若滚动条在窗口上时，动画加给html或body
    $('html,body').animate({ scrollTop:0},1000);
    // document.body==body
    // document.documentElement==html   
});

