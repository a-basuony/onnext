$(document).ready(function(){

    $(".bxslider").bxSlider({
        auto:true,
        spead:2500
    });


    $(".nav-item").on("click",function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active")
    });
    $(".nav-item .nav-link").on("click",function(){
        $("html,body").animate({
            scrollTop:$('#' + $(this).data('value')).offset().top
        },500)
    })
    
    $(".protofilo .two .container-fluid ul li button").on("click",function(){
        $(".protofilo .two .container-fluid ul li button").removeClass("activee");
        $(this).addClass("activee")
    });
    var filterizd=$(".filtr-container").filterizr({});

    $(".fix").on("click",function(){
        $("html,body").animate({
          scrollTop:$(".bxslider").offset().top
        },800)
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop()>=50){
            $(".fix").fadeIn();
        }
        else{
            $(".fix").fadeOut();
        }
    });
    new WOW().init();
    $("html").niceScroll({
        cursorcolor:'#28a9e2',
        cursorwidth:"10px",
        cursorborder:"1px solid #28a9e2",
        scrollspead:"40"
    });
 });