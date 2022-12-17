$(function(){

    $('.hamburger').click(function(){
        $(".menu").addClass("active");
    });

    $('.menu_close').click(function(){
        $(".menu").removeClass("active");
    });

});

const counters = document.querySelectorAll('.work_rating_per'),
    lines = document.querySelectorAll('.work_rating_line span');
counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});