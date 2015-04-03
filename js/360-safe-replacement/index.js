/**
	作者：1028282161@qq.com[雪地伤孤：java工程师，现在主要以H5开发为主]
	时间：2015-04-04
	个人技术微信：zwb1028282161
	个人技术QQ:1028282161
	个人技术公众账号：zwb_h5c3（关注有更多的前后端技术资料以及源码）
	描述： 个人h5技术demo练习 
 */

var hei;
var a = 0;
window.onload = function() {
	$("#nav .txt").mouseover(function() {
		$(this).addClass("hov").siblings().removeClass("hov");
		var tWid = $(this).width();
		var bWid = tWid + 28;
		var fWid = $(this).position().left + 36;
		$(".bor").stop(true).animate({
			width: bWid + "px",
			left: fWid + "px"
		}, 500);
	});

	$("#nav ul").mouseleave(function() {
		$(".bor").stop(true).animate({
			width: "56px",
			left: "36px"
		}, 200);
		$(this).find("li").eq(0).addClass("hov").siblings().removeClass("hov");
	});

	$(window).scroll(function() {
		var n = parseInt($(window).scrollTop() / $(window).height());
		$("#l-nav ul li").eq(n).addClass("cho").siblings().removeClass("cho");
	});
}