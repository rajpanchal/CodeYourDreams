$(document).ready(function(){
$('#faq1').click(function(){
  $('#faq1').toggleClass('active');
  if($('#faqans1').css("display")==="none"){
  $('#faqans1').css("height",100%);
  $('#faqans1').css("display","block");
  } else{
    $('#faqans1').css("height",0);
    $('#faqans1').css("display","none");
  }
});
$('#faq2').click(function(){
  $('#faq2').toggleClass('active');
  if($('#faqans2').css("display")==="none"){
  $('#faqans2').css("display","block");
  } else{
    $('#faqans2').css("display","none");
  }
});
$('#faq3').click(function(){
  $('#faq3').toggleClass('active');
  if($('#faqans3').css("display")==="none"){
  $('#faqans3').css("display","block");
  } else{
    $('#faqans3').css("display","none");
  }
});
$('#faq4').click(function(){
  $('#faq4').toggleClass('active');
  if($('#faqans4').css("display")==="none"){
  $('#faqans4').css("display","block");
  } else{
    $('#faqans4').css("display","none");
  }
});
$('#faq5').click(function(){
  $('#faq5').toggleClass('active');
  if($('#faqans5').css("display")==="none"){
  $('#faqans5').css("display","block");
  } else{
    $('#faqans5').css("display","none");
  }
});
$('#faq6').click(function(){
  $('#faq6').toggleClass('active');
  if($('#faqans6').css("display")==="none"){
  $('#faqans6').css("display","block");
  } else{
    $('#faqans6').css("display","none");
  }
});
});
