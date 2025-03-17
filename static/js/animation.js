$("document").ready(function () {
  designs = ["Graphic", "Motion", "App", "UI/UX"];
  $("#loader").fadeIn();
  $("#loader").css("display", "flex");
  $("#loading").css("display", "block");
  setTimeout(() => {
    $("#logo").css("transform", "translateY(0px)");
  }, 150);

  setTimeout(() => {
    $("#loading").fadeIn();
  }, 800);
  setTimeout(() => {
    $("#loader").fadeOut();
  }, 3000);

  
});
