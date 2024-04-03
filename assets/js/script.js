$(document).ready(function(){
	$('.hamburger-menu').click(function(){
		$('.bg-gray-800').addClass('slide-in').removeClass('hidden');
	});

	$('.close-icon').click(function(){
		$('.bg-gray-800').addClass('slide-out');
		setTimeout(function(){
			$('.bg-gray-800').addClass('hidden').removeClass('slide-out').removeClass('slide-in');
		}, 500); // Animation duration
	});
});