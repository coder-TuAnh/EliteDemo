$(document).ready(function(){
	$('.show_wrap_show_').click(function(){
		if ($(this).siblings('.wrap_show_').hasClass('active')) {
			$(this).siblings('.wrap_show_').removeClass('active')
		} else {
			$('.wrap_show_').removeClass('active');
			$(this).siblings('.wrap_show_').addClass('active')
		}
	});
	$('#button_form_search').click(function(){
		$(this).siblings('.list_form_search').toggleClass('active_show');
	});
    $('.show-acc').click(function(){
        $(this).siblings('.acc-detail').slideToggle(400);
    });
    $('.humberger').click(function(){
        $('.menu_header').toggleClass('selector_show');
    });
     $('.show_header_menu').click(function(){
        $('.menu_header').toggleClass('selector_show');
    });
    
	$('.TourDates').click(function () {
        $(this).next().slideToggle('slow');
        $(this).children('.CloseButton').toggleClass('toggleArrow');
    })
	$('.expandAllText').click(function () {
        var status = $(this).data("status");
        if (status) {
            $('.TourInfo').slideDown();
            $('.expandAllText').text("Close All");
            $('.CloseButton').toggleClass('toggleArrow');
        }
        else {
            $('.TourInfo').slideUp();
            $('.expandAllText').text("Open All");
            $('.CloseButton').toggleClass('toggleArrow');
        }
        $('.expandAllText').data('status', !status);
    });
    $('.back_top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 'fast')
    });
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    });
    $('.close_menu').click(function(){
        $('nav').toggleClass('active')
    });
    $('.li_mobile').click(function(){
        $(this).toggleClass('show_child')
    });
    $('.input_main').click(function(){
        $(this).siblings('.drop_dow').slideToggle('fast')
    })
});
$(document).mouseup(function (e) { 
    var container = $("#button_form_search"); 
    var container_ = $(".list_form_search"); 
    if(!container.is(e.target) &&  
    container.has(e.target).length === 0) {  
    	// container.removeClass('where_arr');
    	container_.removeClass('active_show');
    } 
});
// get date
// 