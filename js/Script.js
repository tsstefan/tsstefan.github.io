$(document).ready(function(){
//  $("#tricked").hide();
  $("#button1").click(function(){
    $("#gitHub").fadeOut(3000);
  });
  $("#button2").mouseenter(function(){
    $("#gitHub").fadeIn(3000);
    $("#tricked").css("color", "black");
  });
  $("#tButton1").click(function(){
    $("#gitHub").toggle();
  });
});

//(HTML Object).action(do);
// .dblclick .mouseenter . mouseleave
// .hide .show