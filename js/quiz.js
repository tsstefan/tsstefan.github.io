function submitAnswers(args) {
    var total = 5;
    var score = 0;
    
    //Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
    //Validation
    /*if (q1==null || q1=='') {
        alert('You missed question 1');
        return false;
    }*/
    for(i = 1; i <=5; i++){
      if (eval('q'+i)==null || eval('q'+i)=='') {
    // eval to contatenate value of variable to other variable -> q1, q2, q3 ...
        alert('You missed question '+(i+1));
        return false;
      }
    }
    
    //Set Correct Answers
    var answers = ["d","d","b","c","c"];
    
    //Check Answers
    for(i = 1; i <= 5; i++){
      if (eval('q'+i) == answers[i - 1]) {
        score++;
      }
    }
    
    //Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You Scored <span>'+score+'</span> out of <span>'+total+'</span></h3>'
    alert('You scored ' + score + ' out of ' + total);
}

$(document).ready(function(){
  
});
