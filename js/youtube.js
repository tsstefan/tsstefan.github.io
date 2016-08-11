//Searchbar Handler
$(function(){
    var searchField = $('#query');
    var icon = $('#searchButton');
    var action = 'click';
    var speed = 500;
    
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
    
    $('#searchForm').submit(function(e){
        e.preventDefault();
    });
});

function search(){
    // Clear Results
    $('#results').html('');
    $('#buttons').html('');
    
    //Get Form Input
    q = $('#query').val();
    
    //Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: 'AIzaSyAdoP1j9qzxPbqKvGfoL6tCeYh90W0jDQ0'},
        function(data){
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            
            console.log(data);
            
            $.each(data.items, function(i, item){
                   //Get Output
                var output = getOutput(item);
                    
                    //Display Results
                $('#results').append(output);
            });
                
                //Buttons
            var buttons = getButtons(prevPageToken, nextPageToken);
                
                //Display Buttons
            $('#buttons').append(buttons);
        }
    );
    $('a.openI').on(action, function(){
        //toggle a slide for the next element after the clicked one and slide up all other siblings
        $(this).next('div.videoFrame').slideToggle(speed).siblings('div.videoFrame').slideUp();
        });
}

//Next Page Function
function nextPage(){
    var token = $('#next-button').data('token');
    var q = $('#next-button').data('query');
    
    // Clear Results
    $('#results').html('');
    $('#buttons').html('');
    
    //Get Form Input
    //q = $('query').val();
    
    //Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            key: 'AIzaSyAdoP1j9qzxPbqKvGfoL6tCeYh90W0jDQ0'},
        function(data){
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            console.log(data);
            
            $.each(data.items, function(i, item){
                   //Get Output
                var output = getOutput(item);
                    
                    //Display Results
                $('#results').append(output);
            });
                
                //Buttons
            var buttons = getButtons(prevPageToken, nextPageToken);
                
                //Display Buttons
            $('#buttons').append(buttons);
        }
    );
    $('a.openI').on(action, function(){
        //toggle a slide for the next element after the clicked one and slide up all other siblings
        $(this).next('div.videoFrame').slideToggle(speed).siblings('div.videoFrame').slideUp();
        });
}

//Previous Page Function
function prevPage(){
    var token = $('#prev-button').data('token');
    var q = $('#prev-button').data('query');
    
    // Clear Results
    $('#results').html('');
    $('#buttons').html('');
    
    //Get Form Input
    //q = $('query').val();
    
    //Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            key: 'AIzaSyAdoP1j9qzxPbqKvGfoL6tCeYh90W0jDQ0'},
        function(data){
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            console.log(data);
            
            $.each(data.items, function(i, item){
                   //Get Output
                var output = getOutput(item);
                    
                    //Display Results
                $('#results').append(output);
            });
                
                //Buttons
            var buttons = getButtons(prevPageToken, nextPageToken);
                
                //Display Buttons
            $('#buttons').append(buttons);
        }
    );
    
    
}

// Build Output
function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
//    var thumb = item.snippet.thumbnails.high.url; //high quality thumbnail
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;
    
    //Build Output String
    var output = '<li>' +
    '<div class="list-left">' +
    '<iframe src="https://www.youtube.com/embed/'+videoId+'" frameborder="0" allowfullscreen></iframe>' +
    '</div>' +
    '<div class="list-right">' +
    '<h3><a class="fancybox fancybox.iframe" href="https://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>' +
    '<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
    '<p>'+description+'</p>' +
    '</div>' +
    '</li>' +
    '<div class="clearfix"></div>' +
    '';
    
    return output;
}

//Build the buttons
function getButtons(prevPageToken, nextPageToken){
    if(!prevPageToken){
        var btnoutput = '<div class="buttoncontainer"><button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'" onclick="nextPage();">Next Page</button></div>';
    } else {
        var btnoutput = '<div class="buttoncontainer"><button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'" onclick="prevPage();">Previous Page</button><button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'" onclick="nextPage();">Next Page</button></div>';
    }
    return btnoutput;
}

/*
function getVideoLink(item){
    var videoId = item.id.videoId;
    var videoLink = "https://www.youtube.com/embed/"+videoId;
        
    return videoLink;
}
        
$("#print-button").click(function() {
    var link = getVideoLink(item);
    document.getElementById("#iframe").setAttribute("src", link);
    $('#iframe').css("z-index", "100");
});
*/