$(document).ready(function() {
  $(".homeTop__kr").css("display", "none");
    $(".homeTop__it").css("display", "none");
  $("#korea").on("click", function() {
    $(".homeTop__fr").css("display", "none");
    $(".homeTop__it").css("display", "none");
    $("#italy").removeClass("underline");
    $("#france").removeClass("underline");
    $("#korea").addClass("underline");
    $(".homeTop__kr").fadeIn(500);
    
    // $(".homeTop__kr").addClass("visible");
    // $(".homeTop__fr").removeClass("visible");
    // $(".homeTop__it").removeClass("visible");
   
  });
  $("#france").on("click", function() {
    $(".homeTop__kr").css("display", "none");
    $(".homeTop__it").css("display", "none");
    $("#italy").removeClass("underline");
    $("#korea").removeClass("underline");
    $("#france").addClass("underline");
    $(".homeTop__fr").fadeIn(500);
    // $(".homeTop__kr").addClass("visible");
    // $(".homeTop__fr").removeClass("visible");
    // $(".homeTop__it").removeClass("visible");
  });
  $("#italy").on("click", function() {
    $(".homeTop__fr").css("display", "none");
    $(".homeTop__kr").css("display", "none");
    $("#korea").removeClass("underline");
    $("#france").removeClass("underline");
    $("#italy").addClass("underline");
    $(".homeTop__it").fadeIn(500);
    // $(".homeTop__kr").addClass("visible");
    // $(".homeTop__fr").removeClass("visible");
    // $(".homeTop__it").removeClass("visible");
  });
});
