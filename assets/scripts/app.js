$(window).scroll(function() {
	
	var wScroll = $(this).scrollTop();

	$('.clouds').css({
		transform: 'translate(0px, '+ wScroll *0.5 +'px)'
	});

	$('.warp').css({
		transform: 'translate(0px, '+ wScroll *0.95 +'px)'
	});


	$('.moon').css({
		transform: 'translate(0px, '+ wScroll *0.85 +'px)'
	});

	$('.rocket').css({
		transform: 'translate(0px, -'+ wScroll *0.5 +'px)'
	});

	$('.comet').css({
		transform: 'translate(0px, '+ wScroll *0.67 +'px)'
	});

	$('.title').css({
		transform: 'translate(0px, '+ wScroll *0.5 +'px)'
	});



	if (wScroll > $('.solar-system').offset().top - ($(window).height() * 0.82)) {

		$('.solar-system .planet').each(function(i) {
			
			setTimeout(function () {
				$('.solar-system .planet').eq(i).addClass('is-showing');	
			}, 150 * (i+1));
			
		});

	}

	if (wScroll > $('.large-window').offset().top - $(window).height()) {
		$('.large-window').css({
			'background-position': 'center '+ (wScroll - $('.large-window').offset().top) +'px'
		});

		var opacity = (wScroll - $('.large-window').offset().top + 350) / (wScroll / 7);

		$('.window-tint').css({
			'opacity': opacity
		});
	}


	if (wScroll > $('.blog-posts').offset().top - $(window).height()) {

		var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 450);

		$('.post-1').css({
			'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'
		});

		$('.post-3').css({
			'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset* 0.2) +'px)'
		});

	}



});