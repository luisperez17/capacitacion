$(document).ready(function () {
  var audio = document.getElementById("audio");
  $("#pause").hide();

  $("#play").click(function () {
    $("#pause").show();
    $(this).hide();
  });

  $("#pause").click(function () {
    $("#play").show();
    $(this).hide();
  });
});