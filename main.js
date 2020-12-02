$(document).ready(function(){
	$('nav li:has(ul)').click(function(e){
		e.preventDefault();
		if($(this).hasClass('activated')){
			$(this).removeClass('activated');
			$(this).children('ul').slideUp();
		}
		else {
			$('nav li ul').slideUp();
			$('nav li').removeClass('activated');
			$(this).addClass('activated');
			$(this).children('ul').slideDown();
		}
	})
	
	$('nav ul li ul li a').click(function(){
		window.location.href = $(this).attr("href");
	});
});