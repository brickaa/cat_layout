$(function () {
	var $window = $(window),
		$stickyEl = $('#nav-header'),
		$headerEl = $('.story-wrapper'),
		elTop = $headerEl.offset().top - 50;
	$window.scroll(function () {
		$stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
	});

});

$(document).ready(function() {
	$(".story-wrapper").fitVids();
	$('.flexslider').flexslider({
		slideshow: false,
		prevText: " ",
		nextText: " "
	});
    $('.flexslider').fitVids();
    
});