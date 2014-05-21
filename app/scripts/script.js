$(document).ready(function() {
	$("#story-container").fitVids();
});


  $(function(){
        var stickyRibbonTop = $('#nav-header').offset().top;
          
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyRibbonTop) {
                        $('#nav-header').css({position: 'fixed', top: '0px', background: 'rgba(146,154,163,1)', width: $("#story-container").css('width')});
                } else {
                        $('#nav-header').css({position: 'static', top: '0px', background: 'rgba(146,154,163,0.5)',});
                }
        });

		$(window).resize(function(){
				$('#nav-header').css({width: $("#story-container").css('width')});
							});
});

