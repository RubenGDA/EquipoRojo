(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.carousel').carousel();
        $('.carousel.carousel-slider').carousel({
            duration: 2000,
            fullWidth: true,
            indicators: false
        });
        setInterval(()=>{$('.carousel.carousel-slider').carousel('next')},4000)
        // move next carousel
        $('.moveNextCarousel').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.carousel').carousel('next');
        });

        // move prev carousel
        $('.movePrevCarousel').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.carousel').carousel('prev');
        });

        $('.collapsible').collapsible();
        // $('#imagenes').carousel({
        //     duration: 1000,

        // });

    }); // end of document ready
})(jQuery); // end of jQuery name space
