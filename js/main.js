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

$('.overlay').hover(
       function(){ $('.titleReal').first().addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay2').hover(
       function(){ $('.titleReal:eq(1)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay3').hover(
       function(){ $('.titleReal:eq(2)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay4').hover(
       function(){ $('.titleReal:eq(3)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay5').hover(
       function(){ $('.titleReal:eq(4)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay6').hover(
       function(){ $('.titleReal:eq(5)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay7').hover(
       function(){ $('.titleReal:eq(6)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay8').hover(
       function(){ $('.titleReal:eq(7)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
$('.overlay9').hover(
       function(){ $('.titleReal:eq(8)').addClass('hoverTitleReal').removeClass('titleReal') },
       function(){ $('.hoverTitleReal').addClass('titleReal').removeClass('hoverTitleReal') }
);
