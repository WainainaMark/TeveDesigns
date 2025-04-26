document.addEventListener("DOMContentLoaded", function () {
  let lastScrollY = window.scrollY;
  const elementParent = document.querySelector(".progressBar");
  const element = document.querySelector(".bgProgress");
  const elementChild = document.querySelector(".trueProgress");
  const childWidth = elementChild.getBoundingClientRect().width;
  const parentWidth = element.getBoundingClientRect().width;
  const container = document.getElementById("firstShowcase");
  let width = parseInt(element.style.width || getComputedStyle(element).width);
  let height = parseInt(element.style.height || getComputedStyle(element).height);
  let winWidth = window.innerWidth
  function isOutOfViewport(element) {
    const rect = element.getBoundingClientRect();
    
    return (
      rect.bottom < 0 || 
      rect.top > window.innerHeight ||
      rect.right < 0 ||
      rect.left > window.innerWidth
    );
  }

  // window.addEventListener("scroll", () => {
  //   const currentScrollY = window.scrollY;
  //   const delta = lastScrollY - currentScrollY;
  //   rounded = delta / 5;
  //   const incr = 2;
  //   const containerRect = container.getBoundingClientRect();
  //   const targetRect = element.getBoundingClientRect();
  //   if(winWidth<=1000){
  //     if (Math.abs(targetRect.bottom - containerRect.bottom) < 10 && delta < 0) {
  //       elementChild.style.backgroundColor = "black";
  //       element.style.height = "50px"
  //     }
  //     if (Math.abs(targetRect.bottom - containerRect.bottom) < 10 && delta > 0) {
  //       elementChild.style.backgroundColor = "white";
  //       element.style.height = "5px"
  //     }
  //     if (delta > 0 && width >= 200) {
  //       element.style.width = `${width - rounded}px`;
        
  //     } else if (delta < 0 && width <= 340) {
  //       element.style.width = `${width - rounded}px`;
  //     }
  //   }
  //   else{
  //     if (Math.abs(targetRect.bottom - containerRect.bottom) < 5 && delta < 0) {
  //       elementChild.style.backgroundColor = "black";
  //     }
  //     if (Math.abs(targetRect.bottom - containerRect.bottom) < 5 && delta > 0) {
  //       elementChild.style.backgroundColor = "white";
        
  //     }
  //     if (delta > 0 && width >= 300 && height>=5) {
  //       element.style.width = `${width - delta}px`;
  //       element.style.height = `${height - 1}px`
  //     } else if (delta < 0 && width <= 400 && height <=30) {
  //       element.style.width = `${width - delta}px`;
  //       element.style.height = `${height - rounded}px`
  //     }
  //   }

  //   if(isOutOfViewport(elementParent)){
  //     $("#secondShowcase").fadeIn()
  //   }



    

  //   width = parseInt(element.style.width || getComputedStyle(element).width);
  //   height = parseInt(element.style.height || getComputedStyle(element).height);

  //   lastScrollY = currentScrollY;
  // });

  window.addEventListener("scroll", ()=>{
    const currentScroll = window.scrollY;
    const containerRect = container.getBoundingClientRect();
    if(containerRect.bottom == 70){
      elementParent.classList.add('leftStick')
    }
  })
  elementChild.addEventListener('animationend', () => {
    console.log("🎉 Animation done!");
    elementChild.style.backgroundColor = "black";
    element.style.height = "30px"
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
