(function ($) {
    "use strict";

    // Header Type = Fixed
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();

        if (scroll >= box - header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    // Initialize Owl Carousel
    $('.loop').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        margin: 0,
        responsive: {
            1200: {
                items: 5
            },
            992: {
                items: 3
            },
            760: {
                items: 2
            }
        }
    });

    // Menu Dropdown Toggle
    $(".menu-trigger").on('click', function () {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
    });

    // Smooth Scroll for Menu Links
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
        var target = $(this.hash);
        if (target.length) {
            var width = $(window).width();
            if (width < 991) {
                $('.menu-trigger').removeClass('active');
                $('.header-area .nav').slideUp(200);
            }
            $('html,body').animate({
                scrollTop: (target.offset().top) + 1
            }, 700);

            // Add active class to clicked navigation item
            $('.scroll-to-section a').removeClass('active');
            $(this).addClass('active');

            return false;
        }
    });

    // Add Active Class to Menu Items on Scroll
    $(document).on("scroll", function () {
        var scrollPos = $(document).scrollTop();
        $('.scroll-to-section a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.length && refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos) {
                $('.scroll-to-section a').removeClass("active");
                currLink.addClass("active");
            }
        });
    });

    // Accordion Navigation
    $(document).on("click", ".naccs .menu div", function () {
        var numberIndex = $(this).index();

        if (!$(this).hasClass("active")) {
            $(".naccs .menu div").removeClass("active");
            $(".naccs ul li").removeClass("active");

            $(this).addClass("active");
            $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

            var listItemHeight = $(".naccs ul")
                .find("li:eq(" + numberIndex + ")")
                .innerHeight();
            $(".naccs ul").height(listItemHeight + "px");
        }
    });

    // Page Loading Animation
    $(window).on('load', function () {
        $('#js-preloader').addClass('loaded');
    });

    // Window Resize Mobile Menu Fix
    $(window).on('resize', function () {
        var width = $(window).width();
        if (width < 767) {
            $('.submenu').on('click', function () {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            });
        }
    });

})(window.jQuery);
