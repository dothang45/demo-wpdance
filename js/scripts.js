$(document).on('click', '.btnMBToggleNav, .closeNav, .overlayMenu', function() {
    $('body').toggleClass('openNav');
});
$(document).on('click', '.navSiteMain ul.nav-navbar li a i', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open').next().slideToggle();
});

$(document).ready(function() {
	if($( window ).width() > 991){
	    $('#navWrap>ul>li').hover(function() {
	        $(this).find('>a').css({
	            'background': '#f23534',
	            'color': '#fff'
	        });
	    }, function() {
	        $(this).find('>a').css({
	            'background': '#fff',
	            'color': '#000'
	        });
	    });
	}
})

jQuery('.wd_tini_account_wrapper').hover(
    function() {
        jQuery(this).children('.drop_down_container').slideDown(300);
    },
    function() {
        jQuery(this).children('.drop_down_container').slideUp(300);
    }
);

function home_parallax_sroll(element) {
    jQuery(element).each(function(i, val) {
        var offset = 0;
        offset = jQuery(window).scrollTop() - jQuery(val).offset().top;
        offset = offset * 0.5;
        jQuery(val).css({
            'background-position': '50%' + offset + 'px'
        });
    });
}

function home_parallax(element) {
    home_parallax_sroll(element);
    jQuery(window).scroll(function() {
        home_parallax_sroll(element);
    });
}
home_parallax('.fourth-footer-widget-area');

jQuery(document).ready(function($) {
    $('#oc-inivoslider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: '10000',
        startSlide: 0,
        controlNav: false,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: false,
        ocnualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        beforeChange: function() {
            var nivo_image = $('#oc-inivoslider .nivo-caption .banner7-small_image img').attr('src');
            $('#oc-inivoslider .nivo-caption').hide();
            $('.move-slides-effect img').each(function() {
                var small_image = $(this).attr('src');
                if (nivo_image == small_image) {
                    var move_class = $(this).closest('.move-slides-effect').data('class');
                    $('#oc-inivoslider .nivo-caption').removeClass().addClass('nivo-caption').addClass(move_class);
                }
            });
        },
        afterLoad: function() {
            $('.oc-loading').css("display", "none");
            var nivo_image = $('.nivo-caption .banner7-small_image img').attr('src');
            $('.move-slides-effect img').each(function() {
                var small_image = $(this).attr('src');
                if (nivo_image != small_image) {
                    var move_class = $(this).closest('.move-slides-effect').data('class');
                    $('#oc-inivoslider .nivo-caption').removeClass().addClass('nivo-caption').addClass(move_class);
                }
            });
        },

    });
});

$(document).ready(function() {
    $('#product-sidebar-1').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
});

$(document).ready(function() {
    $('.fen-testicus').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
        $(window).resize();
});



$(document).ready(function() {
    $('#product-item-1').owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $(window).resize();
});


$('.collection-sidebar-2 .tab-item').click(function() {
    var item = $(this).data('tab');
    $('.tab-item').removeClass('active');
    $('.tab-content-item').hide();
    $('#' + item).show();
    $(this).addClass('active');
});

//quickview
$('.btn-quickview').click(function(){
	$('#quickview-modal').modal();
})

$(document).ready(function() {
	$('.owl-quick-view .item img').click(function(){
		var images = $(this).attr('src');
		$('.greally-image-quick .image img').attr('src',images);
	});
});


$(document).ready(function() {
    $('.owl-quick-view').hide();
    $('#quickview-modal').on('shown.bs.modal', function (event) {
        $('.owl-quick-view').show();
        $('.owl-quick-view').owlCarousel({
            items: 4,
            nav: true,
            loop: true,
            margin: 20,
            autoplay: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        $(window).resize();
    });
});


$(document).ready(function() {
    $('.nav-tab-owl-1').owlCarousel({
        items: 4,
        nav: true,
        loop: false,
        margin: 0,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $(window).resize();
});



$(document).ready(function() {
    $('#brand-item').owlCarousel({
        items: 6,
        nav: true,
        loop: false,
        margin: 0,
        autoplay: false,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });
    $(window).resize();
});





$('.tab-pender-1 .petrotab1 a').click(function() {
    var item = $(this).data('tab');
    $('.petrotab1').removeClass('active');
    $('.pentro-content1').hide();
    $('.' + item).show();
    $(this).parents('li').addClass('active');
});



$('.tab-pender-2 .petrotab2 a').click(function() {
    var item = $(this).data('tab');
    $('.petrotab2').removeClass('active');
    $('.pentro-content2').hide();
    $('.' + item).show();
    $(this).parents('li').addClass('active');
});