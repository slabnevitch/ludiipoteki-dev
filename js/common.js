$(function() {
	$(document).ready(function(){
	// superfish

			var headerSF = $('.sf-menu').superfish({
				pathClass:	'current',
				speed: 1,
				speedOut: 1,
				onInit:  function() {
					// console.log($(this.context).children('li:first').find('a').text());
					// console.log($(this));
					$(this).children('li.active').superfish('show');
				}
			});

			$('.header-menu__link').mouseover(function() {
					if($(this).closest('li').find('ul').length == 0){
						
						headerSF.children('li.active').superfish('hide');
					}
			});

			$('.header-menu__link').mouseout(function() {
						headerSF.children('li.active').superfish('show');

			});
	// end superfish

	// magnific-popup
		$('.to-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	// end magnific-popup

	// registered button toggle
		$('.header-reg .header-enter').click(function() {
			$(this).find('.header-enter__menu').fadeToggle();
		});
	// end registered button toggle

	});

	//slick
			$('.day-theme__slider').slick({
				slidesToScroll: 1,
				slidesToShow: 2,
				dots: true
				// responsive: [
				
				// {
				// 	breakpoint: 560,
				// 	settings: {
						
				// 		slidesPerRow: 2

				// 	}	
				// },
				// {
				// 	breakpoint: 400,
				// 	settings: {
						
				// 		rows: 1,
				// 		slidesPerRow: 1

				// 	}	
				// }
				// ]
			});

			$('.sidebar-analitcs__slider').slick({
				slidesToScroll: 1,
				slidesToShow: 1,
				rows: 3,
				dots: true
				// responsive: [

				// {
				// 	breakpoint: 560,
				// 	settings: {

				// 		slidesPerRow: 2

				// 	}	
				// },
				// {
				// 	breakpoint: 400,
				// 	settings: {

				// 		rows: 1,
				// 		slidesPerRow: 1

				// 	}	
				// }
				// ]
			});

			$('.subjects-slider').slick({
				slidesToShow: 1,
				centerMode: true,
  			focusOnSelect: true,
  			centerPadding: '180px'

			});
	//end slick

	// tabs
		var $tabs = $('.tabs__link');

		$tabs.on('click', function(e) {
			e.preventDefault();
			var $th = $(this),
				$tabsWrapper = $th.closest('.tabs-wrapper'),
				$href = $th.attr('href'),
				$parent = $th.parent();
			$parent.addClass('tabs__item--active')
					.siblings()
					.removeClass('tabs__item--active');
							
			$tabsWrapper.find($href).removeClass('hidden')
					.siblings()
					.addClass('hidden');
		});
	// end tabs	

	// jsscrollpane
		$('.scroll-pane').jScrollPane({
			verticalDragMaxHeight : 100,
			animateScroll : true
		});
	// end jsscrollpane

	// sidebar-company toggle
		$('.sidebar-iconed-title--companies').click(function() {
			$(this).next().toggleClass('hidden');
			return false;
		});
	// end sidebar-company toggle

	// footer cookies close
		$('.footer-cookies .sp-icon').click(function() {
			$(this).parent().addClass('hidden');
		});
	// end footer cookies close
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
