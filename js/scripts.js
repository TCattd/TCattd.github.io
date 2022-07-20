jQuery.noConflict();
(function($) {
	//var nice = $("html").niceScroll();  // The document page (body)
	//$("#body").html($("#body").html()+' '+nice.version);

	$('.animation-flipInX').one('inview', function (event, visible) {
		if (visible) {
			$(this).addClass('animated flipInX');
		}
	});

	$('.animation-bounceInDown').one('inview', function (event, visible) {
		if (visible) {
			$(this).addClass('animated bounceInDown');
		}
	});
	$('.animation-bounceInUp').one('inview', function (event, visible) {
		if (visible) {
			$(this).addClass('animated bounceInUp');
		}
	});
	$('.animation-bounceInLeft').one('inview', function (event, visible) {
		if (visible) {
			$(this).addClass('animated bounceInLeft');
		}
	});
	 $('.animation-bounceInRight').one('inview', function (event, visible) {
		if (visible) {
			$(this).addClass('animated bounceInRight');
		}
	});

	$('.animation-fadeInUp').one('inview', function (event, visible) {
		if (visible) {
			$(this).addClass('animated fadeInUp');
		}
	});

	$('.animation-fadeInDown').one('inview', function (event, visible) {
		if (visible) {
			$(this).addClass('animated fadeInDown');
		}
	});
})(jQuery);
