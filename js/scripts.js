jQuery(function() {

	$('#download_button').mouseover(function () {
		$('#apple_img').attr('src', 'images/blackapple.png');
	});

	$('#download_button').mouseout(function () {
		$('#apple_img').attr('src', 'images/apple.png');
	});

});
