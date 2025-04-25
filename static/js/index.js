document.addEventListener("DOMContentLoaded", function () {
  let lastScrollY = window.scrollY;
  const elementParent = document.querySelector(".progressBar");
  const element = document.querySelector(".bgProgress");
  const elementChild = document.querySelector(".trueProgress");
  const container = document.getElementById("firstShowcase");
  let width = parseInt(element.style.width || getComputedStyle(element).width);

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = lastScrollY - currentScrollY;
    rounded = delta / 5;
    const incr = 2;
    const containerRect = container.getBoundingClientRect();
    const targetRect = element.getBoundingClientRect();

    if (Math.abs(targetRect.bottom - containerRect.bottom) < 10 && delta < 0) {
      elementChild.style.backgroundColor = "black";
      elementParent.classList.add("stick");
    }
    if (Math.abs(targetRect.bottom - containerRect.bottom) < 10 && delta > 0) {
      elementChild.style.backgroundColor = "white";
      elementParent.classList.remove("stick");
    }

    if (delta > 0 && width >= 200) {
      element.style.width = `${width - rounded}px`;
    } else if (delta < 0 && width <= 340) {
      element.style.width = `${width - rounded}px`;
    }

    width = parseInt(element.style.width || getComputedStyle(element).width);

    lastScrollY = currentScrollY;
  });
});
