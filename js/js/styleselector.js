$(document).ready(function($) {

	$('body').addClass('bg-cover');

	// Color Selector
	$(".color-cf-blue" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-cf-blue.css" );	});
	$(".color-cf-red" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-cf-red.css" );	});
	$(".color-cf-magenta" ).click(function()	{ $("#colors" ).attr("href", "css/colors/color-cf-magenta.css" );	});
	$(".color-cf-green" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-cf-green.css" );	});
	$(".color-cf-orange" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-cf-orange.css" );	});

	$(".color-yellow" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-yellow.css" ); });
	$(".color-blue" ).click(function()			{ $("#colors" ).attr("href", "css/colors/color-blue.css" );	});
	$(".color-cream" ).click(function()			{ $("#colors" ).attr("href", "css/colors/color-cream.css" ); });
	$(".color-darkgray" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-darkgray.css" ); });
	$(".color-green" ).click(function()			{ $("#colors" ).attr("href", "css/colors/color-green.css" ); });
	$(".color-lightgray" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-lightgray.css" ); });
	$(".color-orange" ).click(function()		{ $("#colors" ).attr("href", "css/colors/color-orange.css" ); });
	$(".color-pink" ).click(function()			{ $("#colors" ).attr("href", "css/colors/color-pink.css" ); });
	$(".color-red" ).click(function()			{ $("#colors" ).attr("href", "css/colors/color-red.css" ); });
	$(".color-tan" ).click(function()			{ $("#colors" ).attr("href", "css/colors/color-tan.css" ); });
	


	// Style Selector	
	$('#style-selector').animate({
		right: '-205px'
	});

	$('#style-selector a.close').click(function(e){
		e.preventDefault();
		var div = $('#style-selector');
		if (div.css('right') === '-205px') {
			$('#style-selector').animate({
				right: '0'
			});
			$(this).removeClass('fa-chevron-left');
			$(this).addClass('fa-chevron-right');
		} else {
			$('#style-selector').animate({
				right: '-205px'
			});
			$(this).removeClass('fa-chevron-right');
			$(this).addClass('fa-chevron-left');
		}
	})

	$('.styles li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	})

	$('#bg-image a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$('#bg-pattern a').parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
		var bg = $(this).css('backgroundImage');
		$('body').addClass('bg-cover');
		$('body').css('backgroundImage',bg);
	})

	$('#bg-pattern a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$('#bg-image a').parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
		var bg = $(this).css('backgroundImage');
		$('body').removeClass('bg-cover');
		$('body').css('backgroundImage',bg);
	})

});



