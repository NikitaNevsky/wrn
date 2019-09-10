$(document).ready(function () {    

    $('select').selectpicker();
    
});

$(window).resize(function () {
    var width = $('body').innerWidth()
    if (width < 660) {
        $('.plans-list').slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

});