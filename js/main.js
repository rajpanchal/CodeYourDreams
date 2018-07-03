$(document).ready(function(){
    console.log(1);
    $('.sidenav').sidenav();

    $('.colorblue').click(function(e){
        e.preventDefault();
        
        var target=$(this).attr('href');
        $('html , body').animate({
            scrollTop:($(target).offset().top)
        },700);
        $('.sidenav').sidenav('close');
    });
    $('#joinus').click(function(){
        $('html , body').animate({
            scrollTop:($('#joinus_link').offset().top)
        },700);
    });

});