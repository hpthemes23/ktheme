/*
Theme Name:     KTHEME
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "ktheme".
	For demo 1 to demo 6, it uses "ktheme".
	For demo 2, it uses "kthemeD2". 
	For demo 6, it uses "kthemeD6".
	For index page, it uses "kthemeIndex".
	For documentation page, it uses "kthemeDoc".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 for demo 1 to demo 6
			1.1.1 .ktheme-owl-1
			1.1.2 .ktheme-owl-2
		1.2 for demo 2
			1.2.1 .kthemeD2-owl-1
	2. wow
	3. navigation
		3.1 for demo 1 to demo 6
			3.1.1 #ktheme-navbar
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".ktheme-owl-1").owlCarousel({
		items: 4,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 2,
				nav: false
			},
			1200: {
				items: 2,
				nav: false
			}
		}
	});
	$(".ktheme-owl-2").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
	$(".kthemeD2-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 1500,
    	animateIn: 'fadeIn',
    	animateOut: 'slideOutDown',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
/* END OF OWL CAROUSEL */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#ktheme-navbar').addClass('solid');
	    } else {
	        $('#ktheme-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#ktheme-navbar').hide();
	    }
	    else{
	    	$('#ktheme-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* END OF CUSTOM JS */