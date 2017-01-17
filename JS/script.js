//Script du carrousel
$(document).ready(function () {
	var carousel = $(".carousel").waterwheelCarousel({
		flankingItems: 3,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
		}
	});

	$('#prev').bind('click', function () {
		carousel.prev();
		return false
	});

	$('#next').bind('click', function () {
		carousel.next();
		return false;
	});

	$('#reload').bind('click', function () {
		newOptions = eval("(" + $('#newoptions').val() + ")");
		carousel.reload(newOptions);
		return false;
	});

});

$(document).ready(function(){
    $(".chevron").click(function(){
        $("#carouselHtml").slideToggle("slow");
    });
	$(".chevron2").click(function(){
        $("#carouselWp").slideToggle("slow");
    });
	$(".chevron3").click(function(){
        $("#carouselJs").slideToggle("slow");
    });
	$(".chevron4").click(function(){
        $("#carouseljQuery").slideToggle("slow");
    });
	$(".chevron6").click(function(){
        $("#carouselPhp").slideToggle("slow");
    });
	$(".chevron5").click(function(){
        $("#aboutMe").slideToggle("slow");
    });
	$(".chevron7").click(function(){
        $("#carouselFram").slideToggle("slow");
    });
	$(".mail").click(function(){
        $("#contact").slideToggle("slow");
    });
});
$(document).ready(function(){
    $( ".imgHtlmCss" ).mouseover(function() {
		$('.imgHtlmCss').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function () {
			$(this).removeClass('animated pulse');
		});
	});
	$( ".wpImg" ).mouseover(function() {
		$('.wpImg').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function () {
			$(this).removeClass('animated pulse');
		});
	});
	$( ".jsImg" ).mouseover(function() {
		$('.jsImg').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function () {
			$(this).removeClass('animated pulse');
		});
	});
	$( ".jQImg" ).mouseover(function() {
		$('.jQImg').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function () {
			$(this).removeClass('animated pulse');
		});
	});
	$( ".phpImg" ).mouseover(function() {
		$('.phpImg').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function () {
			$(this).removeClass('animated pulse');
		});
	});
	$( ".imgSym" ).mouseover(function() {
		$('.imgSym').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function () {
			$(this).removeClass('animated pulse');
		});
	});
	$( ".imgSil" ).mouseover(function() {
		$('.imgSil').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function () {
			$(this).removeClass('animated pulse');
		});
	});
});

//Script for the scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
