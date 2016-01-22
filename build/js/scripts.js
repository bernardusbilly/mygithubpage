$(window).ready(function() {
	$('.loading').hide();
});

var timeOutToggle = function() {
	$('.about-me').toggle();
};

$(document).ready(function() {
	
	$('.parallax').parallax();

	var aboutMe = false;

	$('.main-info').click(function() {
		if (aboutMe === false) {
			$('.about-me').animate({height: "500px"}, 500);
			aboutMe = true;
		} else {
			$('.about-me').animate({height: "0px"}, 500);
			aboutMe = false;
		}
	});
});