$(function() {
    $('.top-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }

        ]
    });

});