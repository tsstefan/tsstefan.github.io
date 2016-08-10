//Searchbar Handler
$(function(){
    var searchField = $('#query');
    var icon = $('#searchButton');
    
    //Focus Handler
    $(searchField).on('focus', function(){
        $(this).animate({
            width: '100%'    
        }, 300);
        $(icon).animate({
            right: '10px'
        }, 300);
    });
    
    //Blur Event Handler
    $(searchField).on('blur', function(){
        if(searchField.val() == ''){
            $(searchField).animate({
                width: '45%'
            }, 300, function (){});
            $(icon).animate({
                right: '355px'
            }, 300, function (){});
        }
    });
})
