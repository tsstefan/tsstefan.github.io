$(document).ready(function(){
    $('nav a').on('click', function(){
        //Current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent.addClass('current');
        
        //set heading text
        $('h1#heading').text($(this).text());
        
        //Get & filter link text - replace: first paramenter what, 2nd with what
        var category = $(this).text().toLowerCase().replace(' ','-');
        
        //Remove hidden class if 'all-photos' is selected
        if(category == 'all-photos'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
               if(!$(this).hasClass(category)){
                $(this).hide().addClass('hidden');
               } else{
                $('this').fadeIn('slow').removeClass('hidden');
               }
            });
        }
        //stop link behavior
        return false;
    });
    
    //mouse enter -> overlay
    $('ul#gallery li').on('mouseenter', function(){
        //get data attribute values
        var title = $(this).children.data('title');
        var desc = $(this).children.data('desc');
        
        //validation
        if(title === null){
            title = 'Click to Enlarge';
        }
        if(desc === null){
            desc = 'Click to Enlarge';
        }
        
        //Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay
        var overlay = $(this).children('.overlay');
        
        //add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        //fade in overlay
        overlay.fadeIn(800);
    });
    
    //mouseleave overlay
    $('ul#gallery li').on('mouseleave', function(){
        
        //Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay
        var overlay = $(this).children('.overlay');
        
        overlay.fadeOut(500);
    });
});
