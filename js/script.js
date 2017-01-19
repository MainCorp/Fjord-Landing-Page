'use strict';

function smoothMovement(navMenu) {
	$(navMenu).on('click', 'a', function(evt) {
		evt.preventDefault();

		var idLink = $(this).attr('href');
		var top = $(idLink).offset().top;

		console.log(idLink);
		console.log(top);

		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
}

function showPortfolio() {
	var portfolio = $('.portfolio__show');

	portfolio.css({
		'display': 'none'
	});

	$('.portfolio__item').hover(function() {
		$(this).children(2).css('display', 'flex');
	}, function() {
		portfolio.css('display', 'none');
	});
}

function createStyleMainNavigation() {
	var mainMenu = $('.page-navigation');

	$(document).scroll(function() {
		if (mainMenu.offset().top >= 3000) {
			$('.page-navigation__link').css('color', '#f1f3f7');
		} else {
			$('.page-navigation__link').css('color', '#000000');
			$('.page-navigation__link--start-btn').css('color', '#ffffff');
		}
	});
}

$(document).ready(function() {
	smoothMovement('.page-navigation');
	smoothMovement('.footer-nav__navigation');
	showPortfolio();
	createStyleMainNavigation();
});