// OWL CAROUSEL

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:18,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})