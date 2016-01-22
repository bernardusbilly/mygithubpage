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
			$('.about-me').css("height", "500px");
			aboutMe = true;
		} else {
			$('.about-me').css("height", "0px");
			aboutMe = false;
		}
	});
});