$(document).ready(function() {
  $(".southKorea").css("display", "none");
  $(".italy").css("display", "none");
  $(".france").css("display", "grid");
  $("#sk").click(function() {
    $(".italy").css("display", "none");
    $(".france").css("display", "none");

    $(".southKorea").fadeIn(1000);
    $(".southKorea").css("display", "grid");

    // $(".southKorea").addClass("visible");
    // $(".france").removeClass("visible");
    // $(".italy").removeClass("visible");
  });
  $("#fr").on("click", function() {
    $(".italy").css("display", "none");
    $(".southKorea").css("display", "none");

    $(".france").fadeIn(1000);
    $(".france").css("display", "grid");

    // $(".france").addClass("visible");
    // $(".southKorea").removeClass("visible");
    // $(".italy").removeClass("visible");
  });
  $("#it").on("click", function() {
    $(".southKorea").css("display", "none");
    $(".france").css("display", "none");

    $(".italy").fadeIn(1000);
    $(".italy").css("display", "grid");
    // $(".italy").addClass("visible");
    // $(".france").removeClass("visible");
    // $(".southKorea").removeClass("visible");
  });
  $(".personnalize__material2").click(function() {
    console.log("oui");
    $(".product__img").attr("src", plasticImg);
  });
  $(".pocket").click(function() {
    $(".product__img").attr("src", pocketImg);
  });
  $(".top-plastic").click(function() {
    $(".product__img").attr("src", plasticImg);
  });
  $(".nature").click(function() {
    $(".product__img").attr("src", nature);
  });
});