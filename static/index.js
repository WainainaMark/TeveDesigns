document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('section')
    const rectangle = document.getElementById('rectangle')

    rectangle.style.opacity = "1"
    setTimeout(()=> {
        section.style.opacity = "0"
    }, 4000)
})