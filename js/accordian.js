//jQuery UI
var action="click";
var speed="500";

$(document).ready(function(){
    $('li.q').on(action, function(){
        //toggle a slide for the next element after the clicked one and slide up all other siblings
        $(this).next().slideToggle(speed).siblings('li.a').slideUp();
        var img = $(this).children('img');
        //Remove the rotate class for all images except the active one
        $('img').not(img).removeClass('rotate');
        //toggle rotate Class
        img.toggleClass('rotate');
        });
});