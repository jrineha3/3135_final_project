$(document).ready(function() {
    let $slider = $("#slider");
    $slider.bxSlider({
        auto: false,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 700,
        adaptiveHeight: true,
        captions: true,
        pause: 3000,
        pager: true,
        pagerType: "short",
        pagerSelector: "#id_pager"
    });

});