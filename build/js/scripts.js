$(window).ready(function() {
	$('.loading').hide();
});

var timeOutToggle = function() {
	$('.about-me').toggle();
};

$(document).ready(function() {
	
	$('.parallax').parallax();
	var timeOut = 250;

	var aboutMe = false;

	$('.main-info').click(function() {
		if (aboutMe === false) {
			$('.about-me').animate({height: "500px"}, 500);
			aboutMe = true;
			$('body').animate({
				scrollTop: $('.about-me').offset().top,
			}, "easein");
		} else {
			$('.about-me').animate({height: "0px"}, 500);
			aboutMe = false;
		}
	});

	var frontend = false;
	/*var firstBlockHeight = $('#frontend').css("height");*/
	/*var dropFrontEnd = $('#content-frontend').height();*/
	// temporary fix
	var dropFrontEnd = 2301;

	var activateFrontEnd = function() {
		frontend = true;
		firstBlockHeight = $('#frontend').css("height");
		$('#frontend').addClass("block-active");
		$('#frontend').addClass("slow-animation");
		$('#frontend').css("width","100vw");
		$('#backend').css("margin-top", dropFrontEnd);
		$('#fullstack').css("margin-top", dropFrontEnd);
		$('#photography').css("margin-top", dropFrontEnd);
		$('body').animate({
			scrollTop: $('#frontend').offset().top,
		}, "easein");
		setTimeout(function() {
			$('#frontend').parent().parent().addClass("col-lg-12");
			$('#backend').parent().parent().addClass("col-lg-offset-3");
			$('#frontend').parent().parent().removeClass("col-lg-3");
		}, 500);
		
		$('#content-frontend').show();
	}

	var deactivateFrontEnd = function() {
		frontend = false;
		$('#frontend').removeClass("block-active");
		$('#frontend').css("width", "100%");
		$('#backend').css("margin-top", "0");
		$('#fullstack').css("margin-top", "0");
		$('#photography').css("margin-top", "0");
		$('#content-frontend').hide();
		$('#frontend').parent().parent().addClass("col-lg-3");
		$('#frontend').parent().parent().removeClass("col-lg-12");
		$('#backend').parent().parent().removeClass("col-lg-offset-3");
		setTimeout(function() {
			$('#frontend').removeClass("slow-animation");
		}, 500);
	}

	$('#frontend').click(function() {
		if (frontend == false) {
			if ((backend == true) || (photography == true)) {
				deactivateBackEnd();
				deactivatePhotography();
				setTimeout(function() {
					activateFrontEnd();
				}, timeOut);	
			} else if (fullstack == true) {
				deactivateFullStack();
				setTimeout(function() {
					activateFrontEnd();
				}, timeOut*2);
			} else {
				activateFrontEnd();
			}
		} else {
			deactivateFrontEnd();	
		}
	});

	var backend = false;
	var shiftBackEnd = parseInt($('.block').css("width"), 10);

	// always update the block size
	$(window).resize(function() {
		shiftBackEnd = parseInt($('.block').css("width"), 10);

		// when backend is active - keep updating the shifted block
		if (backend == true) {
			$('#backend').css("left", -shiftBackEnd);
			$('#fullstack').css("left", -2*shiftBackEnd);
			$('#photography').css("left", -3*shiftBackEnd);
		}
	});

	var activateBackEnd = function() {
		backend = true;
		$('#backend').addClass("block-active");
		$('#content-backend').show();
		$('body').animate({
			scrollTop: $('#backend').offset().top,
		}, "easein");
		$('#frontend').css("position", "absolute");
		$('#frontend').css("z-index", "0");
		$('#frontend').css("left", 0);
		$('#backend').css("position", "absolute");
		$('#backend').css("z-index", "10");
		$('#backend').css("left", -shiftBackEnd);
		$('#fullstack').css("position", "absolute");
		$('#fullstack').css("z-index", "0");
		$('#fullstack').css("left", -2*shiftBackEnd);
		$('#photography').css("position", "absolute");
		$('#photography').css("z-index", "0");
		$('#photography').css("left", -3*shiftBackEnd);
	}

	var deactivateBackEnd = function() {
		backend = false;
		$('#backend').removeClass("block-active");
		$('#content-backend').hide();
		$('#frontend').css("position", "relative");
		$('#frontend').css("z-index", "0");
		$('#frontend').css("left", "0");
		$('#backend').css("position", "relative");
		$('#backend').css("z-index", "0");
		$('#backend').css("left", "0");
		$('#fullstack').css("position", "relative");
		$('#fullstack').css("z-index", "0");
		$('#fullstack').css("left", "0");
		$('#photography').css("position", "relative");
		$('#photography').css("z-index", "0");
		$('#photography').css("left", "0");
	}

	$('#backend').click(function() {
		if (backend == false) {
			if ((frontend == true) || (photography == true)) {
				deactivateFrontEnd();
				deactivatePhotography();
				setTimeout(function() {
					activateBackEnd();
				}, timeOut);	
			} else if (fullstack == true) {
				deactivateFullStack();
				setTimeout(function() {
					activateBackEnd();
				}, timeOut*2);
			} else {
				activateBackEnd();
			}
		} else {
			deactivateBackEnd();
		}
	});

	var activateFullstack = function() {
		fullstack = true;
		$('#fullstack').css("top", "221px");
		$('#fullstack').addClass("block-active");
		$('#content-fullstack').show();
		$('body').animate({
			scrollTop: $('#fullstack').offset().top
		}, "easein");
		setTimeout(function() {
			$('#fullstack').css("position", "absolute");
			$('#fullstack').css("left", -2*shiftBackEnd-1);
		}, timeOut);
	}

	var deactivateFullStack = function() {
		fullstack = false;
		$('#fullstack').css("position", "relative");
		$('#fullstack').css("left", "0");
		$('#fullstack').removeClass("block-active");
		$('#content-fullstack').hide();
		setTimeout(function() {
			$('#fullstack').css("top", "0");
		}, timeOut);
	}

	var fullstack = false;

	$('#fullstack').click(function() {
		if (fullstack == false) {
			deactivateFrontEnd();
			deactivateBackEnd();
			deactivatePhotography();

			if ((frontend == true) || (backend == true) || (photography == true)) {
				deactivateFrontEnd();
				deactivateBackEnd();
				deactivatePhotography();
				setTimeout(function() {
					activateFullstack();
				}, timeOut);	
			} else {
				activateFullstack();
			}

		} else {
			deactivateFullStack();
		}
	});

	var activatePhotography = function() {
		photography = true;
		$('#frontend').addClass('block-photography');
		$('#backend').addClass('block-photography');
		$('#fullstack').addClass('block-photography');
		$('#photography').addClass('block-photography');
		$('#content-photography').show();
		$('body').animate({
			scrollTop: $('#photography').offset().top
		}, "easein");
	}

	var deactivatePhotography = function() {
		photography = false;
		$('#frontend').removeClass('block-photography');
		$('#backend').removeClass('block-photography');
		$('#fullstack').removeClass('block-photography');
		$('#photography').removeClass('block-photography');
		$('#content-photography').hide();
	}

	var photography = false;

	$('#photography').click(function() {
		if (photography == false) {
			if ((frontend == true) || (backend == true)) {
				deactivateFrontEnd();
				deactivateBackEnd();
				setTimeout(function() {
					activatePhotography();
				}, timeOut);	
			} else if (fullstack == true) {
				deactivateFullStack();
				setTimeout(function() {
					activatePhotography();
				}, timeOut*2);
			} else {
				activatePhotography();
			}
		} else {
			deactivatePhotography();
		}
	});

});