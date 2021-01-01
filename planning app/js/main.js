
$(window).ready(function () {
    $('#welcome-section__carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        touchDrag:true,
        items:1,
        autoplayTimeout:7500,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed:700
    })
});
