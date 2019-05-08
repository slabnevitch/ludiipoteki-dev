$(function() {
	$(document).ready(function(){
	// superfish
		
			var headerSF = $('.sf-menu').superfish({
				pathClass:	'current',
				onInit:  function() {
					console.log($(this.context).children('li:first').find('a').text());
					$(this).children('li:first').superfish('show');
				},
				onHide:  function() {
					// console.log('this.xontext  ' + this.context.querySelector('li a').innerHTML);
					$(this.context).children('li:first').superfish('show');
				}
			});

			$('.add-news').click(function() {
				console.log('xlid!')
				headerSF.children('li:first').superfish('show');
				return false;
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
	});

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
