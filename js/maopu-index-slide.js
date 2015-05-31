var a = 0;
var b = 0;
var Play = null;
//鼠标点击底部按钮事件
$('#but ul li').click(function() {
	a = $(this).index();
	b = -a * 320;
	$(this).addClass('cho').siblings().removeClass('cho'); /*按钮变色*/
	$('#pic').animate({
		'left': b + 'px'
	}, 500) /*换图*/
});
//鼠标悬停 轮播停止/启动
$('#main').hover(function() {
		clearInterval(Play);
	}, function() {
		auto();
	})
	//封装

function com() {
		$('#but ul li').eq(a).addClass('cho').siblings().removeClass('cho');
		$('#pic').animate({
			'left': b + 'px'
		}, 500);
	}
	//轮播函数

function auto() {
	Play = setInterval(function() {
		a++;
		b = -a * 320;
		if (a < 6) {
			com();
			if (a == 5) {
				a = -1
			};
		} else {
			a = -1;
		}
	}, 2000)
};
//轮播执行
auto();
//右按钮
$('#main .right-b').click(function() {
		a++;
		b = -a * 320;
		if (a < 6) {
			com();
			if (a >= 5) {
				a = -1
			};
		} else {
			a = -1;
		}
	})
	//左按钮
$('#main .left-b').click(function() {
	a--;
	b = -a * 320;
	if (a > -1) {
		com();
		if (a == 0) {
			a = 6
		};
	} else {
		a = 6;
	}
})