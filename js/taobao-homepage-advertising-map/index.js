/**
	作者：1028282161@qq.com[雪地伤孤：java工程师，现在主要以H5开发为主]
	时间：2015-04-04
	个人技术微信：zwb1028282161
	个人技术QQ:1028282161
	个人技术公众账号：zwb_h5c3（关注有更多的前后端技术资料以及源码）
	描述： 个人h5技术demo练习 
 */

var Play;
var a = 1;
var c = 0;
var lastDate = new Date();
$(".right").click(function() {
	if ((new Date() - lastDate) > 500) {
		lastDate = new Date();
		a++;
		var b = -a * 520 + 'px';
		$(".pic ul").animate({
			left: b
		}, 500, function() {
			if (a == 6) {
				$(this).css("left", "-520px");
				a = 1;
			}
		});
		c++;
		if (c == 5) {
			c = 0;
		}
		$(".but ul li").eq(c).addClass("cho").siblings().removeClass("cho");
	};
});
$(".left").click(function() {
	if ((new Date() - lastDate) > 500) {
		lastDate = new Date();
		a--;
		var b = -a * 520 + 'px';
		$(".pic ul").animate({
			left: b
		}, 500, function() {
			if (a == 0) {
				$(this).css("left", "-2600px");
				a = 5;
			}
		});
		c--;
		if (c == -1) {
			c = 4;
		}
		$(".but ul li").eq(c).addClass("cho").siblings().removeClass("cho");
	};
});
$(".ad").hover(function() {
	clearInterval(Play);
}, function() {
	auto();
})

function auto() {
	Play = setInterval(function() {
		a++;
		var b = -a * 520 + 'px';
		$(".pic ul").animate({
			left: b
		}, 500, function() {
			if (a == 6) {
				$(this).css("left", "-520px");
				a = 1;
			}
		});
		c++;
		if (c < 5) {
			$(".but ul li").eq(c).addClass("cho").siblings().removeClass("cho");
			if (c == 4) {
				c = -1;
			}
		} else {
			c = -1;
		}
	}, 3000)
};
auto();
$(".but ul li").click(function() {
	var x = $(this).index();
	a = x + 1;
	c = x;
	var y = -(x + 1) * 520 + 'px';
	$(".pic ul").animate({
		left: y
	}, 500);
	$(this).addClass("cho").siblings().removeClass();
})