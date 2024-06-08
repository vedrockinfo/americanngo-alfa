(function ($) {
    $(function () {

        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
        });

        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });

        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });

        $('html').click(function () {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');

            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');

            document.body.style.paddingTop = '0';
        }
    });
});
$(document).ready(function () {
    $(document).click(function (e) {
        if (!$(e.target).is('.navbar, .navbar *')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});

// Header JS Ends
jQuery(document).ready(function () {
    jQuery('.signup-form .form-control').on('focus', function () {
        jQuery(this).parent().addClass('focused');
    }).on('blur', function () {
        jQuery(this).parent().removeClass('focused');
    }).on('input', function () {
        jQuery(this).parent().addClass('inputted');
    });

});


jQuery('.latest-article').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$(".owl-partners").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 5,
        },
    },
});

$('.managementslides').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        }
    }
})

$('.internationalpartners').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        992: {
            items: 5
        }
    }
})

$('.inspiration-quotes').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$('.peru-slides').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

jQuery('.intested-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

jQuery('.vector-shapes').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    mouseDrag:false,
    nav: false,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.testimonial-quotes').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

jQuery(document).ready(function () {
    jQuery('.call-wrapper .form-control').on('focus', function () {
        jQuery(this).parent().addClass('focused');
    }).on('blur', function () {
        jQuery(this).parent().removeClass('focused');
    }).on('input', function () {
        jQuery(this).parent().addClass('inputted');
    });

});


// By focusing on input type text, input type radio get unselected 

jQuery(document).ready(function () {
    var lastSelectedRadio;
    jQuery("input[type='radio']").change(function () {
        lastSelectedRadio = this;
    });
    jQuery("#textInput").focus(function () {
        if (lastSelectedRadio) {
            jQuery(lastSelectedRadio).prop("checked", false);
        }
    });
    jQuery("#other-amt, #month-other-amt").focus(function () {
        if (lastSelectedRadio) {
            jQuery(lastSelectedRadio).prop("checked", false);
        }
    });
});


$(function () {

    $('.thumbnail').viewbox();
    $('.thumbnail-2').viewbox({ fullscreenButton: true });

    (function () {
        var vb = $('.popup-link').viewbox();
        $('.popup-open-button').click(function () {
            vb.trigger('viewbox.open');
        });
        $('.close-button').click(function () {
            vb.trigger('viewbox.close');
        });
    })();

});