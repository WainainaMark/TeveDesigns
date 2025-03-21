$("document").ready(function () {
  $("#loader").fadeIn();
  $('.box').css('transition', 'all 0.5s ease')
  $("#loader").css("display", "flex");
  $("#loading").css("display", "block");
  setTimeout(() => {
    $("#logo").css("transform", "translateY(0px)");
  }, 150);

  setTimeout(() => {
    $("#loading").fadeIn();
  }, 800);
  setTimeout(() => {
    $("#loader").fadeOut(function(){
      $('#desktop').fadeIn()
      $('#desktop').css('display', 'grid')
      $('.box').css('top', '0px')
    });
  }, 3000);



  
});
