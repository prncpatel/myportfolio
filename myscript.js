
$(document).ready(function(){
    window.onload = function(){
        $("#bars").click(function(){
            $("#menu").css("left","0%");
            $("#menu").css("transition","all .5s ease");
            $(".home-content").css("filter","brightness(50%)");
            $("#bars").fadeOut();
            $("#cancel").fadeIn();
            $("#cancel").css("filter","brightness(200%)");  
        });
    
        $("#cancel").click(function(){
            $("#menu").css("left","-90%");
            $("#bars").fadeIn();
            $("#cancel").fadeOut();
            $(".home-content").css("filter","brightness(100%)");
        });
    }
    
    $(window).resize(function(){
    if($(window).width()>1300){
        $(".menu").css("left","0%");
        $(".home-content").css("filter","brightness(100%)");
        $("#cancel").fadeOut();
    }else if($(window).width()<1300){
        $(".menu").css("left","-90%");
        $("#bars").fadeIn();
    }
    $("#bars").click(function(){
        $("#menu").css("left","0%");
        $("#menu").css("transition","all .5s ease");
        $(".home-content").css("filter","brightness(50%)");
        $("#bars").fadeOut();
        $("#cancel").fadeIn();
        $("#cancel").css("filter","brightness(200%)");  
    });

    $("#cancel").click(function(){
        $("#menu").css("left","-90%");
        $("#bars").fadeIn();
        $("#cancel").fadeOut();
        $(".home-content").css("filter","brightness(100%)");
    });
    
    
});
});