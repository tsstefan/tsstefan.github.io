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
  });
  $("#tButton1").click(function(){
    $("#gitHub").toggle();
    $("#background").animate({left: '0px'}, "slow");
  });
});

//(HTML Object).action(do);
// .dblclick .mouseenter . mouseleave
// .hide .show
// "slow" "fast"