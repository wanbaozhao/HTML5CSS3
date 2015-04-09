(function() {

	$('.nav-wrap').on('click', '.main-nav', function(e) {
		e.preventDefault();

		var me = $(this),
			navWrap = me.closest('.nav-wrap'), // 动画效果的父容器
			navs = navWrap.find('nav a'); // 父容器中的所有子菜单

		// 当菜单没被激活时
		var isLocated = false;
		if (!navWrap.hasClass('active') && !isLocated) {

			// 圆的半径 raduis
			var width = navWrap.width(),
				radius = width / 2;

			// 圆形菜单的起始、终止角度
			var startAngle = 0,
				endAngle = 360;

			// 两个子菜单间的夹角 gap
			var total = navs.length,
				gap = (endAngle - startAngle) / total;

			// 角度->弧度
			var radian = Math.PI / 180;


			/*
			 * 计算并确定各个子菜单的最终位置
			 */
			$.each(navs, function(index, item) {

				// 当前子菜单与x轴正向的夹角 θ （角度->弧度）
				var myAngle = (startAngle + gap * index) * radian; // θ

				// 计算当前子菜单相对于左上角(0,0)的坐标 (x,y)
				var myX = radius + radius * Math.cos(myAngle), // x=r+rcos(θ)
					myY = radius + radius * Math.sin(myAngle); // y=r+rsin(θ)

				// 设置当前子菜单的位置 (left,top) = (x,y)
				$(this).css({
					left: myX + 'px',
					top: myY + 'px'
				});
			});

			isLocated = true;
		}

		navWrap.toggleClass('active');
	});

})();