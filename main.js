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

const wrap = document.querySelector('#wrap');
const burger = document.querySelector('.icon-burger');

burger.addEventListener('click', ()=> {
	if (wrap.classList.contains('nav-opened')) {
		wrap.classList.remove('nav-opened');
	}else {
		wrap.classList.add('nav-opened');
	}
})