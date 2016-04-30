$(document).ready(function() {
	var ddolby = Dolby.checkDDPlus();

	// Check for browser compatibility for Dolby Audio Enhancement
	if( ddolby === true ){
		// Dolby Digital Plus supported
		// code dependent on Dolby Digital Plus here
		console.log("Browser is supported for Dolby Audio Enhancement.");
	} else {
		console.log("Browser is not supported for Dolby Audio Enhancement.");
	}

	var audio;
	if (ddolby === true) {
		audio = new Audio("build/audio/six_Dolby.mp4");	
	} else {
		audio = new Audio("build/audio/six.m4a");
	}
	audio.loop = true;
	
	$('.audio-controller').click(function() {
		if (audio.paused == true) {
			audio.play();
			$(this).html("<span class='fa fa-stop'></span>");
		} else {
			audio.pause();
			$(this).html("<span class='fa fa-play'></span>");
		}
	});
});