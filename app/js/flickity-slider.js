$(function () {

	var carouselMain = $('.carousel-main'),
		carouselNav = $('.carousel-nav');

	carouselMain.flickity({
		pageDots: false,
		draggable: false,
		autoPlay: 5000,
		prevNextButtons: false
	});

	carouselNav.flickity({
		asNavFor: '.carousel-main',
		contain: true,
		alignCell: 'center',
		pageDots: false,
		draggable: true,
	});

	$('.carousel-cell').each(function() {
		$(this).css({
			backgroundImage: $(this).attr('date-image'),
			backgroundSize: 'cover',
			backgroundPosition: '50%'
		});
	})

});