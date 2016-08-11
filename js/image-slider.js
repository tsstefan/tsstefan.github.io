$(document).ready(function(){
   //declare variables
   var totalWidth = 0;
   var positions = new Array();
   
   $('#slides, .slide').each(function(i){
        positions[i] = totalWidth;
        totalWidth += $(this).width();
        
        if(!$(this).width()){
            alert('Please add a width to your images');
            return false;
        }
   });
   //set width
   $('#slides').width(totalWidth);
   //menu item klick handler
   $('#menu ul li a').click(function(e, keepScroll){
        //remove active class, add inactive
        $('li.photo').removeClass('active').addClass('inactive');
        //add active class to parent
        $(this).parent().addClass('active');
        
        var pos = $(this).parent().prevAll('.photo').length;
        
        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
        
        //prevent default
        e.preventDefault();
        //stopping autoscroll
        if(!autoScroll) clearInterval(itvl);
    });
   
   //Make first image active
   $('#menu ul li.photo:first').addClass('active').siblings().addClass('inactive');
   
   //autoScroll
   var current = 1;
   function autoScroll(){
        if(current == -1) return false;

        //eq reduces matches at specified index to 1
        $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
        current ++;
   }
   
   //duration for autoscroll
   var duration = 10;
   var itvl = setInterval(function(){autoScroll()},duration*1000);
});