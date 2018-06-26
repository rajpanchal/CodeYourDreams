$(document).ready(function(){
  $(".carousel").slick({
    dots:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:1000,
    responsive:[
      {breakpoint:1070,
      settings:{
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 1
      }},
      {breakpoint:550,
      settings:{
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }},
      {breakpoint:400,
      settings:{
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }}

    ]
  });
  $('.closebtn').on('click',function(){
    $('.noeventinfo').fadeOut();
    $('.eventinfo').fadeOut();
  });
});

var info=[
  {
    title:"GOV. SCHOOL VISIT",
    img:["img2/ngo2.jpg","img2/ngo3 [1].jpg","img2/ngo2[2].jpg"],
    information:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]
function show(num){
  $('.noeventinfo').fadeOut();
  $('.eventinfo').fadeOut();
  if(num<=info.length){
    $('#eventinfoheader').text(info[num-1].title);
    $('#eventinfobody').text(info[num-1].information);
    $('#eventimg1').attr("src",info[num-1].img[0]);
    $('#eventimg2').attr("src",info[num-1].img[1]);
    $('#eventimg3').attr("src",info[num-1].img[2]);
    console.log(1);
    $('.eventinfo').fadeIn();

  } else{
    $('.noeventinfo').fadeIn();
  }
}
