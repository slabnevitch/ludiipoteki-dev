$(function() {
	$(document).ready(function(){

	// header-top__menu toggle
		$(".toggle-mnu").click(function() {
			var $th = $(this);
			$th.toggleClass("on");
			
			if($th.closest('.header-top').length > 0){
				console.log('header-topo');
				$(".header-top__menu--text").stop(true, true).slideToggle(150);
				
			}

			if($th.closest('.categories-menu-block--mob').length > 0){
				console.log('cat-menu');
				$(".categories-menu-block--mob .categories-menu").stop(true, true).fadeToggle(150);
				
			}
			return false;
		});
	// end header-top__menu toggle

	// superfish
		sfOpt = {
			pathClass:	'current',
			speed: 1,
			speedOut: 1,
			// disableHI: true,
			onInit:  function() {
					$(this).children('li.active').superfish('show');
			},

			onShow: function() {

			 	// this.context.querySelector('.sf-with-ul').classList.add('opened');
			 	if($(this).closest('li').find('ul').length == 0){
							
							$(this.context).closest('.sf-menu').find('li.active').superfish('hide');
						}
			 },
			 onBeforeHide: function() {
			 	
			 	$('.sf-with-ul').removeClass('opened');
			 },
			 
			 onIdle: function() {
			 	console.log(this.context);

			 	if($(this.context).hasClass('active') && screen.width > 768){

			 		$(this.context).closest('.sf-menu').find('li.active').superfish('show');
			 	}
			 	if($(this).closest('li').find('ul').length == 0){
							
							$(this.context).closest('.sf-menu').find('li.active').superfish('show');
						}
			 }
		};

		$('.header-menu--desk').superfish(sfOpt);

		

		
			$('.categories-menu').superfish({
				pathClass:	'current',
				onShow: function() {
					console.log(this.context.classList);
					if(this.context.classList.contains('categories-menu__item-sub')){
				 		this.context.querySelector('.categories-menu__sub li .sf-with-ul').classList.add('opened');
					}
					// console.log(this.context.querySelector('.categories-menu__sub li .sf-with-ul').classList);
				 },
				 onBeforeHide: function() {
				 	
					console.log("before hide");
				 	$('.sf-with-ul').removeClass('opened');
				 }
			});
	// end superfish

	// main-menu-mob

		var touchHover = function() {
			if(screen.width < 768){
				$('.header-menu--mob a[data-hover]').click(function(e){
					e.preventDefault();
					var $this = $(this);
					var onHover = $this.attr('data-hover');
					var linkHref = $this.attr('href');
					var $parent = $this.closest('li');

					$parent.find('ul').slideDown(150);
					$parent.siblings().find('ul').slideUp(150);
					$parent.siblings().find('.header-menu__link')
						.removeClass('opened');

					$this.toggleClass('opened');

					if (linkHref && $this.hasClass(onHover)) {
						location.href = linkHref;
						return false;
					}
					$this.toggleClass(onHover);
					$this
					.closest('li')
					.siblings()
					.find('[data-hover]')
					.removeClass(onHover);

				});
				
			}
		};

		
			touchHover();
		
	// end main-menu-mob
	
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

	// subscribe form submit
		$('.news-subscribe__body').submit(function() {
			$.magnificPopup.open({
				items: {
					src: $('#li-popup-email')
				},
				type: 'inline'
			});

			return false;
		});
	// end subscribe form submit

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
				dots: true,
				responsive: [
				
				{
					breakpoint: 960,
					settings: {
						
						slidesToShow: 1

					}	
				}

				]
			});

			$('.sidebar-analitcs__slider').slick({
				slidesToScroll: 1,
				// slidesToShow: 1,
				slidesPerRow: 1,
				rows: 3,
				dots: true,
				responsive: [

				{
					breakpoint: 992,
					settings: {

						rows: 1,
						slidesToShow: 3
							// slidesPerRow: 3

					}	
				},
				{
					breakpoint: 768,
					settings: {

						rows: 1,
						slidesToShow: 2

					}	
				},
				{
					breakpoint: 576,
					settings: {

						rows: 1,
						rows: 3,
						slidesToShow: 1

					}	
				}
				]
			});

	//end slick

	// staff variable slider
		 $staffsSlider = $('.staffs-persons');

			var staffsSliderSettings = {
				slidesToShow: 1,
				dots: false,
				mobileFirst: true
		    };


			if(screen.width < 768){
		    	$staffsSlider.slick(staffsSliderSettings);
				// $variantsSlider.slick('unslick');
			}

			$(window).resize(function() {
				if ($(window).width() > 768) {
					if ($staffsSlider.hasClass('slick-initialized')) {
						$staffsSlider.slick('unslick');
					}
					return
				}

				if (!$staffsSlider.hasClass('slick-initialized')) {
					return $staffsSlider.slick(staffsSliderSettings);
				}
			});
	// end staff variable slider

	// subjects popup
		var range = document.getElementById('subject-range'),
			dragger,
			opts = {
				slidesToShow: 1,
				centerMode: true,
	  			focusOnSelect: true,
	  			centerPadding: '150px',
	  			responsive: [

	  			{
	  				breakpoint: 600,
	  				settings: {

	  					centerPadding: 0,

						}	
					}
					]
			};

			$('.subjects-slider').on('init reInit',function(event,slick){
			  var amount = slick.slideCount;
			  
			  dragger = noUiSlider.create(range, {

			    range: {
			        'min': 1,
			        'max': amount
			    },
			    step: 1,
			    start: 1,
			    format: wNumb({
			        decimals: 0
			    })
			  });

			  	dragger.on('update', function(){
					console.log('update');
					var handle = document.querySelector('.subject-range .noUi-handle'),
			   			handlePosition = handle.getAttribute('aria-valuenow'),
			   			noUiOrigin = document.querySelector('.noUi-origin');
		   			console.log('update');
		   			if(handlePosition == '0.0'){
		   				handle.setAttribute('style', 'left: 0');
		   			}

				});

			  	dragger.on('set', function(){
			  		console.log(this.get());
			   		$('.subjects-slider').slick('slickGoTo', this.get() - 1);

			   		var handle = document.querySelector('.subject-range .noUi-handle'),
			   			handlePosition = handle.getAttribute('aria-valuenow'),
			   			noUiOrigin = document.querySelector('.noUi-origin'),
			   			handleWidth = handle.offsetWidth;
		   			console.log('set' + handleWidth);
		   			if(handlePosition == '0.0'){
		   				handle.setAttribute('style', 'left: 0');
		   			}
		   			if(handlePosition == '100.0'){
		   				handle.setAttribute('style', 'right:' + handleWidth + 'px;' + 'left: auto;');
		   			}
		   			subjectsTabsHandling(this.get() - 1);
				});

				dragger.on('end', function(){
					console.log('end')
				});

				
			});

			$('.subjects-slider').on('afterChange',function(e,slick,currentSlide){
			  // console.log('current skide ' + currentSlide);
			  range.noUiSlider.set(currentSlide+1);
			  subjectsTabsHandling(currentSlide);
			});

			$('.subjects-slider').slick(opts);
			$('.subjects-slider').slick('unslick');
			range.noUiSlider.destroy();

			$('#subjects-open').magnificPopup({
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
					},
		      open: function() {
		        $('.subjects-slider').slick(opts);
		      },
		      close:function(){
		         $('.subjects-slider').slick('unslick');
		         range.noUiSlider.destroy();
		      }
				}
			});

		function subjectsTabsHandling(tabNumber) {
			$('.subject-content-item').eq(tabNumber)
				.removeClass('hidden')
				.siblings()
				.addClass('hidden');

		}
	// end subjects popup

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

	// Accordeon-----------------------------------
		$('.acordeon-link').click(function(e) {
			e.preventDefault();
			var $currentItem = $(this).closest('.acordeon-item');
			if($currentItem.hasClass('acordeon-item-with-sublist')){

				$currentItem.find('.acordeon-sublist')
				.stop(true, true)
				.slideToggle();

				$currentItem.toggleClass('active');
				$currentItem
					.siblings()
					.removeClass('active');

				$currentItem.siblings()
				.find('.acordeon-sublist')
				.stop(true, true)
				.slideUp();

			}else{
				return;
			}
		});
	// end Accordeon-----------------------------------
	
	// .company-about toggler
		$('.company-about__link').click(function() {
			$(this).closest('.company-about').toggleClass('active');
			return false;
		});
	// end .company-about toggler

	// jsscrollpane
		if(document.querySelector('.scroll-pane')){
			var scrollPane = $('.scroll-pane').jScrollPane({
				verticalDragMaxHeight : 100,
				animateScroll : true
			});

			var scrollPaneApi = scrollPane.data('jsp');
			console.log(scrollPaneApi);

			$(window).resize(function() {
				scrollPaneApi.reinitialise();
			});
			
		}
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

	// ikSelect
		$('.li-form-select').ikSelect({
			autoWidth: false,
			// customClass: 'prod-sort-select',
			// ddCustomClass: 'prod-sort-dd',
			onShow: function (inst) {
				console.log(inst);
				var currWidth = $(inst.el).closest('.ik_select').find('.ik_select_link').innerWidth() + 4;
				// $instanceParent = $(inst.el).parent().parent();
				
				$('.ik_select_dropdown').width(currWidth);
			}
		});
	// end ikSelect
	
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
