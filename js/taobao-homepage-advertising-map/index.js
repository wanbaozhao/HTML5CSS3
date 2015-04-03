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