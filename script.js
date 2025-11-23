const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem = document.querySelector("#elem-cont")
var fixed = document.querySelector("#popup")

elem.addEventListener("mouseenter", function (e) {
    fixed.style.display = "block"
})
elem.addEventListener("mouseleave", function (e) {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("img-data")
        fixed.style.backgroundImage = `url(${image})`
        fixed.style.backgroundSize = "cover"
        fixed.style.backgroundPosition = "center center";
    })
})
var swiper = new Swiper(".mySwiper", {
    // loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
   
});
var loader=document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4000)
