$(document).ready(function() {
	$(".story-container").fitVids();
});


$(function(){
	var $window = $(window),
		$stickyEl = $('#nav-header'),
		elTop = $stickyEl.offset().top;
	$window.scroll(function() {
		$stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
	});

});

