
$(document).ready(function(){
  $('.eventcarousel').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots:true,
  arrows:false,
  centerMode:true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:true
      }
    }
  ],
  autoplay:true,
  autoplaySpeed:1000
  });


  $('#event1').click(function(){
    //SHOW MODAL;
  });
  $('#event2').click(function(){
    //SHOW MODAL;
  });
  $('#event3').click(function(){
    //SHOW MODAL;
  });
  $('#event4').click(function(){
    //SHOW MODAL;
  });
  $('#event5').click(function(){
    //SHOW MODAL;
  });
  $('#event6').click(function(){
    //SHOW MODAL;
  });
});
