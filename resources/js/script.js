$(document).ready(function () {

    /*Sticky Nav*/
    $('#features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });


    $('#goToPlan').click(function () {
        $('html,body').animate({
            scrollTop: $('#pricing').offset().top
        }, 1000);
    });
    $('#goToNext').click(function () {
        $('html,body').animate({
            scrollTop: $('#features').offset().top
        }, 1000);
    });


    /*Smooth Scroll*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*Animations*/

    $('.wp1').waypoint(function (direction) {
        $('.wp1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.wp2').waypoint(function (direction) {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '35%;'
    });

    $('.wp3').waypoint(function (direction) {
        $('.wp3').addClass('animated fadeIn');
    }, {
        offset: '35%;'
    });

    $('.wp4').waypoint(function (direction) {
        $('.wp4').addClass('animated pulse');
    }, {
        offset: '35%;'
    });



    $('.mob-nav').click(function () {
        var icon = $('#toggler');
        $('.main-nav').slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });

});
