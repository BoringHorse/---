$(function() {
	var burgerMenu = $('.header__toggle-menu img'),
		isOpen = false;

	burgerMenu.on('click', function() {
		$(this).css({
			transform: 'rotate('+(isOpen?180:-180)+'deg)'
		});
		$(this).attr('src', (isOpen? 'img/toggle-menu.png': 'img/toggle-menu-close.png'));
		isOpen = !isOpen;
		$(this).next().toggleClass('header__toggle-menu__menu_state_active');
	});
});