$(document).one('pageinit', function(){
    //Display runs
    showRuns();
    //Add handler
    $('#submitAdd').on('tap', addRun);
    //Edit handler
    $('#submitEdit').on('tap', editRun);
    //Delete handler
    $('#stats').on('tap', '#deleteLink', deleteRun);
    //Set current handler
    $('#stats').on('tap','#editLink', setCurrent);
    //Clear handler
    $('#clearRuns').on('tap', clearRuns);
    /*
    *Show all runs on homepage
    */
    function showRuns(){
        //get runs object
        var runs = getRunsObject();
        
        //check if empty
        if(runs !== '' && runs!== null ){
            for(var i = 0; i < runs.length; i++){
                $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date: </strong>'+runs[i]["date"]+
                                   '<br><strong>Distance: </strong>'+runs[i]["miles"]+'m<div class="controls">'+
                                   '<a href="#edit" id="editLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]['date']+'">Edit</a> |'+
                                   '<a href="#"data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'" onclick="return confirmation(\'Are you sure?\')">Delete</a></div></li>');
            }
            $('#home').bind('pageinit', function(){
                $('#stats').listview('refresh');
            });
        } else {
            $('#stats').html('<p>You have no logged runs</p>');
        }
    }
    /*
     *Add a run
     */
    function addRun(){
        //get form values
        var miles = $('#addMiles').val();
        var date = $('#addDate').val();
        
        //Create the run object
        var run = {
            date: date,
            miles: parseFloat(miles) 
        };
        
        var runs = getRunsObject();
        
        //Add run to runs arra
        runs.push(run);
        
        alert('Run Added');
        
        //Set stringified object to local storage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        //Redirect to index page
        window.location.href="https://rawgit.com/tsstefan/tsstefan.github.io/master/mile-tracker.html";
        
        return false;
    }
    
    /*
     *edit run
     */
    function editRun(){
        //get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        var runs = getRunsObject();
                
        //loop through runs
        for(var i = 0; i < runs.length; i++){
            if(runs[i],miles == currentMiles && runs[i].date == currentDate){
                runs.splice(i, 1);
            }
            localStorage.setItem('runs', JSON.stringify(runs));
        }
        
         //get form values
        var miles = $('#editMiles').val();
        var date = $('#editDate').val();
        
        //Create the run object
        var update_run = {
            date: date,
            miles: parseFloat(miles) 
        };
        
        //Add run to runs arra
        runs.push(update_run);
        
        alert('Run Updated');
        
        //Set stringified object to local storage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        //Redirect to index page
        window.location.href="https://rawgit.com/tsstefan/tsstefan.github.io/master/mile-tracker.html";
        
        return false;
    }
    
    function clearRuns(){
        localStorage.removeItem('runs');
        $('#stats').html('<p>You have no logged runs</p>');
    }
    
    /*
     *delete run
     */
    function deleteRun(){
        //set ls items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
        
        //get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        var runs = getRunsObject();
                
        //loop through runs
        for(var i = 0; i < runs.length; i++){
            if(runs[i],miles == currentMiles && runs[i].date == currentDate){
                runs.splice(i, 1);
            }
            localStorage.setItem('runs', JSON.stringify(runs));
        }
        
        alert('Run Deleted');
        
        //Redirect to index page
        window.location.href="https://rawgit.com/tsstefan/tsstefan.github.io/master/mile-tracker.html";
        
        return false;
    }
    
    /*
     *get the runs object
     */
    
    function getRunsObject(){
        //Set runs array
        var runs = new Array();
        //Get current runs from local storage
        var currentRuns = localStorage.getItem('runs');
        //check local storage
        if(currentRuns !== null){
            //Set to runs
            var runs = JSON.parse(currentRuns);
        }
        
        //Return runs object
        return runs.sort(function(a, b){return new Date(b.date) - new Date(a.date)});
    }
    
    /*
     *set the current clicked miles and date
     */
    
    function setCurrent(){
        //set ls items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
        
        //Insert form fields
        $('#editMiles').val(localStorage.getItem('currentMiles'));
        $('#editDate').val(localStorage.getItem('currentDate'));
    }
});