$(document).ready(function(){
    //set Options first
    var speed = 500;            //fade speed
    var autoswitch = true;      //auto slider options
    var autoswitch_speed = 4000; // Auto slider speed
    
    //Hide all slides
    $('.slide').hide();
    
    //Add initial active class
    $('.slide').first().addClass('active');
    
    //Show active slide
    $('.active').show();
    
    $('#nextSlide').click(nextSlide());
    $('#prevSlide').click(prevSlide());
    
    //Autoswitch handler
     if(autoswitch === true){
        setInterval(nextSlide, autoswitch_speed);
     }
    
    //Functions for next and previous slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});
