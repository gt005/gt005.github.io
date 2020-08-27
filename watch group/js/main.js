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

document.querySelector('.open-mobile-menu-btn').onclick = function () {
    let subHeader = document.querySelector('.sub-header'),
        subHeaderContainer = document.querySelector('.sub-header-container');

    subHeaderContainer.style.left = '0';
    subHeaderContainer.style.opacity = '1';
    subHeader.style.transform = "translateX(0%)";
}

document.querySelector('.close-mobile-header-btn').onclick = function () {
    let subHeader = document.querySelector('.sub-header'),
        subHeaderContainer = document.querySelector('.sub-header-container');

    subHeader.style.transform = "translateX(-110%)";
    subHeaderContainer.style.opacity = '0';
    setTimeout(function () {
        subHeaderContainer.style.left = '-150%';
    }, 200)
}



document.querySelector('.header-shopping-cart').onclick = function () {
    let shoppingCartDropdown = document.querySelector('.shopping-cart-dropdown'),
        shoppingCartDropdownContainer = document.querySelector('.shopping-cart-dropdown-container');

    shoppingCartDropdownContainer.style.left = '0';
    shoppingCartDropdownContainer.style.opacity = '1';
    shoppingCartDropdown.style.transform = "translateX(0%)";
}

document.querySelector('.shopping-cart-dropdown-container').onclick = function () {
    let shoppingCartDropdown = document.querySelector('.shopping-cart-dropdown');

    shoppingCartDropdown.style.transform = "";
    this.style.opacity = '0';
    // setTimeout(function () {
    //     this.style.left = '-150%';
    // }, 200)

}
