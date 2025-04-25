$(document).ready(function(){
  setTimeout(()=>{
    $('.showCaseText').fadeIn(function(){
      $(this).css({
        "transform": "translateY(0px)",
        "opacity": "1"
      })
    })
  }, 2000)
  setTimeout(()=>{
    $('.showCaseText').css({
      "transform": "translateY(-50px)",
      "opacity": "0"
    })
    $(".showCaseText").fadeOut()
  }, 4000)
  setTimeout(()=>{

    $(".progressBar").css({
      "position": "sticky",
      "top": 0
    })
  }, 4500)
  // $(".trueProgress").css("width", "100%")


})