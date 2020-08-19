$(document).ready(function () {
    $('.main-page-main-carousel-section').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots:true,
        items:1
    })

    $('.main-page-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        LazyLoad:true,
        responsive:{
            0:{
                items: 2
            },
            992: {
                items: 4
            }
        }
    })

});