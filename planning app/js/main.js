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

    $('#resources__carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        touchDrag:true,
        items:1,
        autoplayTimeout:7500,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed:700,
        navText: ["<svg width=\"27\" height=\"19\" viewBox=\"0 0 27 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 9.5L2 9.5M2 9.5L9.81132 17M2 9.5L9.81132 2\" stroke=\"#A8B4E5\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>", "<svg width=\"27\" height=\"19\" viewBox=\"0 0 27 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 9.5H25M25 9.5L17.1887 2M25 9.5L17.1887 17\" stroke=\"#A8B4E5\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"]
    })

    $('#testimonials__carousel').owlCarousel({
        loop:false,
        center:true,
        nav:false,
        dots:true,
        touchDrag:true,
        items:2,
        autoplayTimeout:75000,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed:700,
        margin: 64
    })
});
