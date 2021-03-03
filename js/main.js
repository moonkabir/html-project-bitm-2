;(function(){
	// Loading Page Start
	var loaderPage = function() {
		$(".fzf-loader").fadeOut("slow");
	};
	// Loading Page End

	// Drop Down Start
	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
			.find('.dropdown')
			.css('display', 'block')
			.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
			.find('.dropdown')
			.css('display', 'none')
			.removeClass('animated-fast fadeInUpMenu');
		});

	};
	// Drop Down End

	// Slider Start
	var sliderMain = function() {		
	  	$('#fzf-slider .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};
	// Slider End

	// Counter Start
	var counter = function() {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function() {
		if ($('#fzf-counter').length > 0 ) {
			$('#fzf-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};
	// Counter End



	// Owl Carousel Start
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			autoplay: true,
		   loop: true,
		   margin: 30,
		   items: 1,
		   responsiveClass: true,
		   nav: true,
		   dots: false,
		   smartSpeed: 500,
		   autoplayHoverPause: true,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});

		var owl = $('.owl-carousel2');
		owl.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
			autoplay: true,
		   loop: true,
		   margin: 30,
		   responsiveClass: true,
		   nav: true,
		   dots: false,
		   items: 1,
		   smartSpeed: 500,
		   autoplayHoverPause: true,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
	};
	// Owl Carosel End

	// Goto Top Start
	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};
	// Goto Top End

	// Sticky Start
	var stickyFunction = function() {
		var h = $('.image-content').outerHeight();

		if ($(window).width() <= 992 ) {
			$("#sticky_item").trigger("sticky_kit:detach");
		} else {
			$('.sticky-parent').removeClass('stick-detach');
			$("#sticky_item").trigger("sticky_kit:detach");
			$("#sticky_item").trigger("sticky_kit:unstick");
		}

		$(window).resize(function(){
			var h = $('.image-content').outerHeight();
			$('.sticky-parent').css('height', h);

			if ($(window).width() <= 992 ) {
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				$('.sticky-parent').removeClass('stick-detach');
				$("#sticky_item").trigger("sticky_kit:detach");
				$("#sticky_item").trigger("sticky_kit:unstick");

				$("#sticky_item").stick_in_parent();
			}
		});

		$('.sticky-parent').css('height', h);
		$("#sticky_item").stick_in_parent();
	};
	// Sticky End

	// Mobile Menu Outside Click Start
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
			var container = $("#fzf-offcanvas, .js-fzf-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ( $('body').hasClass('offcanvas') ) {

					$('body').removeClass('offcanvas');
					$('.js-fzf-nav-toggle').removeClass('active');

				}
			}
		});
	};
	// Mobile Menu Outside Click End

	// Offcanvas Menu Start
	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fzf-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fzf-nav-toggle fzf-nav-toggle fzf-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fzf-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fzf-offcanvas').append(clone2);

		$('#fzf-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fzf-offcanvas')
		.find('li')
		.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
			.addClass('active')
			.find('ul')
			.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
			.removeClass('active')
			.find('ul')
			.slideUp(500, 'easeOutExpo');				
		});

		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

				$('body').removeClass('offcanvas');
				$('.js-fzf-nav-toggle').removeClass('active');
				
			}
		});
	};
	// Offcanvas Menu End

	// Burger Menu Start
	var burgerMenu = function() {

		$('body').on('click', '.js-fzf-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	// Burger Menu End

	// Content Way Point Start
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('animated-fast')){				
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});					
				}, 100);				
			}
		} , { offset: '85%' } );
	};
	// Content Way Point End

	// Paralax Start
	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true
			});
		}
	};
	// Paralax End

	$(function(){
		loaderPage();
		dropdown();
		sliderMain();
		counterWayPoint();
		counter();
		owlCrouselFeatureSlide();
		goToTop();
		stickyFunction();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		parallax();
	});
}());