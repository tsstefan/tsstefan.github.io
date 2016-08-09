$(document).ready(function(){
//  $("#tricked").hide();
  $("#button1").click(function(){
    $("#gitHub").fadeOut(3000);
    $("#background").animate({
      height:'75%',
      width:'75%'
      }, "slow");
  });
  $("#button2").mouseenter(function(){
    $("#gitHub").fadeIn(3000);
    $("#tricked").css("color", "black");
    $("#background").animate({
      height:'50%',
      width:'50%'
      }, "slow");
  });
  $("#tButton1").click(function(){
    $("#gitHub").toggle();
    $("#background").animate({left: '0px'}, "slow");
  });
  
    var food = 'Pizza';
  alert(food);
  
  var foods = new Array;
  foods[0] = food;
  foods[1] = 'cheese';
  
  var foods = [ food,'cheese'];
  foods.push(food, 'cheese');
  
  for(var i = 0; i < foods.length; i++){
    console.log(foods[i]);
  }
  
  function say(word) {
    alert(word);
  }
  say('Hello');
   function math(num1, num2) {
    alert(num1 + num2);
  }
  math(4, 5);
});

//(HTML Object).action(do);
// .dblclick .mouseenter . mouseleave
// .hide .show
// "slow" "fast"
/* incremental growth/shrink:
    $("#background").animate({
      height:'+=50%',
      width:'-=50%'
      }, "slow");
*/