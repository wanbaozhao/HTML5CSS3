/**
	作者：1028282161@qq.com[雪地伤孤：java工程师，现在主要以H5开发为主]
	时间：2015-04-04
	个人技术微信：zwb1028282161
	个人技术QQ:1028282161
	个人技术公众账号：zwb_h5c3（关注有更多的前后端技术资料以及源码）
	描述： 个人h5技术demo练习
 */

var a = 0;
var Time;

function imgCha() {
	var bgc = $(".pic img").eq(a).attr("bgc");
	$(".big").css("background", bgc);
	$(".pic img").eq(a).stop(true).fadeIn(200).siblings().hide();
	$(".list li").eq(a).addClass("hov").siblings().removeClass("hov");
};
$(".list li").hover(function() {
	a = $(this).index();
	imgCha();
});
$(".right").click(function() {
	(a < 6) ? (a++) : (a = 0);
	imgCha();
});
$(".left").click(function() {
	(a > 0) ? (a--) : (a = 6);
	imgCha();
});

function auto() {
	Time = setInterval(function() {
		(a < 6) ? (a++) : (a = 0);
		imgCha();
	}, 3000);
};
auto();
$(".con").hover(function() {
	clearInterval(Time)
}, function() {
	auto()
});