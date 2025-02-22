document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector(".box"); // Select the element
    const yPosition = element.getBoundingClientRect().top;

    console.log(yPosition)
})