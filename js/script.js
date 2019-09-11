$(document).ready(function () {    

    $('select').selectpicker();

    $(".outer").click(function() {
	  $(".box-modal").hide();
	  $(this).hide();
	})
    
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