// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });
})

let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if (box.isIntersecting){
            box.target.style.opacity = 1;
        }
    })
})

let wwsection = document.querySelectorAll('.ww-section')
wwsection.forEach((d)=>{
    observer.observe(d)
})