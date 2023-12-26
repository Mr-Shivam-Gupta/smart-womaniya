(function ($) {
    "use strict";

	// Preloader 
	var win = $(window);
	 win.on('load',function() {
	  $('.page-loader').delay(350).fadeOut('slow');
	});
		
		

    // Contact Form Start
    // Contact Form Message Popup 
    function contactFormPopup() {
        var trigger = $('#contact-form [type="submit"]'),
            container = $('.cr-contact-message-modal');
    
        trigger.on('click', function () {
            container.addClass('is-visible');
        });
    
        $('<button><i class="fa fa-window-close-o"></i></button>').appendTo(container).on('click', function () {
            container.removeClass('is-visible');
        });
    }
    contactFormPopup();
   // Contact Form End	
	
		
		
		
		
	// COUNTDOWN
	$('#countdown').countdown('2022/9/10', function(event) {
	  var $this = $(this).html(event.strftime(''
	//+ '<li><span>%w</span> weeks</li> '
		+ '<li><span>%D</span> days</li> '
		+ '<li><span>%H</span> hr</li> '
		+ '<li><span>%M</span> min</li> '
		+ '<li><span>%S</span> sec</li>'));
	});

	// cart widget toggle
	$("#items-counter").on('click',function() {
		$("body").toggleClass("cart-widget-open");
	});
	$("#cart-widget-close").on('click',function() {
		$("body").toggleClass("cart-widget-open");
	});

		$(".cart-widget-close-overlay").on('click',function() {
		$("body").toggleClass("cart-widget-open");
	});

	//initialize swipers
	//home slider
	var swiper = new Swiper('.home-slider', {
		pagination: '.home-pagination',
		paginationClickable: true,
		nextButton: '.home-slider-next',
		prevButton: '.home-slider-prev'
	});

	//testimonials slider
	var swiper = new Swiper('.testimonials-slider', {
		pagination: '.testimonials-pagination',
		paginationClickable: true,
		slidesPerView: 1,
		spaceBetween: 30,
		nextButton: '.testimonials-slider-next',
		prevButton: '.testimonials-slider-prev'
	});

	// product list
	var swiper = new Swiper('.product-list-slider', {
		slidesPerView: 3,
		pagination: '.product-list-pagination',
		paginationClickable: true,
		nextButton: '.product-list-slider-next',
		prevButton: '.product-list-slider-prev',
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});

	// smoth scroll
	$(".navbar-nav li a[href^='#']").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
		   scrollTop: $(this.hash).offset().top
		 }, 300, function(){

		   // when done, add hash to url
		   // (default click behaviour)
		   window.location.hash = hash;
		 });

	});

	// scrollUp 
    $.scrollUp({
        scrollText: '<i class="ti-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
   // counterUp
     $('.count').counterUp({
        delay: 10,
        time: 5000
    }); 


})(jQuery);	