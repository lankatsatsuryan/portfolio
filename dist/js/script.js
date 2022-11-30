$(function(){

    $('.hamburger').click(function(){
        $(".menu").addClass("active");
    });

    $('.menu_close').click(function(){
        $(".menu").removeClass("active");
    });

});