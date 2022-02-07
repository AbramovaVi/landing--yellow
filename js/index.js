$(document).ready(function() {
    $(".phone").mask("+7 (999) 999 - 99 - 99");

    var modal = document.getElementById("modal-form");
    var popup = document.getElementById("popup-modal");
    var cities = document.getElementById("city-modal");


    $('.modal-button').click(function() {
        modal.style.display = "block";
    });
    $('.popup-button').click(function() {
        popup.style.display = "block";
        modal.style.display = "none";
    });
    $('.cities').click(function() {
        cities.style.display = "block";
    });
    $('.close').click(function() {
        popup.style.display = "none";
        modal.style.display = "none";
        cities.style.display = "none";
    })
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
        if (event.target == popup) {
            popup.style.display = "none";
        };
        if (event.target == cities) {
            cities.style.display = "none";
        }
    }
    document.getElementById("range").oninput = function() {
        var value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to right, var(--color-yellow) 0%, var(--color-yellow) ' + value + '%, var(--color-gray) ' + value + '%, var(--color-gray) 100%)';
        if (value > 50) {
            document.getElementById("circle").style.background = 'var(--color-yellow)';
        } else {
            document.getElementById("circle").style.background = 'var(--color-gray)';
        }
    };

    var years = 1;
    var stv, stv2 = 2.5;


    function getStv(summa, mths) {
        var res;
        mths = mths * 12;
        if (mths < 13) {
            stv = 3.3;
        } else if (mths >= 13 && mths < 24) {
            stv = 2.5;
        } else if (mths >= 24) {
            stv = 2;
        }

        if (summa < 100000) {
            stv2 = 3.3;
        } else if (summa >= 100000 && summa < 500000) {
            stv2 = 3;
        } else if (summa >= 500000 && summa < 1000000) {
            stv2 = 2.5;
        } else if (summa >= 1000000) {
            stv2 = 2;
        }
        if (stv > stv2) {
            res = stv2;
        } else {
            res = stv;
        }

        return res;
    }

    function getTotal(summa, mths) {
        let res = getStv(summa, mths);
        procent = (summa * ((mths * res) / 100));
        total = parseFloat(procent) + parseInt(summa);
        every = total / mths;
        procent = Math.ceil((procent) * 100) / 100;
        total = Math.ceil((total) * 100) / 100;
        every = Math.ceil((every) * 100) / 100;

        $('#res').html(every.toFixed() + ' ₽');
        $('.stv').html(res + '%');
    }

    $('#sum-input').on('input', function() {
        $('#range').attr("value", this.value);
        getTotal($('#range').val(), $('.tab.active').attr('data-id'));
    })
    $('#range').on('input', function() {
        $('#sum-input').attr("value", this.value);
        getTotal($('#range').val(), $('.tab.active').attr('data-id'));
    })

    $('.calculation .tab').click(function() {
        $('.calculation .tab').removeClass('active');
        $(this).addClass('active');
        getTotal($('#range').val(), $(this).attr('data-id'));
    });




    $('#burger-icon').click(function() {
        $(this).toggleClass('open');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function() {
        $('.burger-icon').removeClass('open');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.requirements .tabs .tab').click(function() {
        let id = $(this).attr('data-id');
        $('.requirements .tab').removeClass('active');
        $('.req-wrapper').removeClass('req-wrapper-active');
        $(this).addClass('active');
        $('.req-wrapper').hide();
        $('#req-' + id).show().addClass('req-wrapper-active');
    });

    $('.dropdown .header').click(function() {
        $(this).parents('.dropdown').toggleClass('dropdown-expanded');
    });


    $(window).on('load resize', function () {
    if ($(this).width() > 1900) {
      $('.cars-carousel').trigger('destroy.owl.carousel');
    } else {
      $('.cars-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 1,
                stagePadding: 130
            },
            900: {
                items: 2,
                stagePadding: 30
            },
            1360: {
              items: 3
            }
        },
    });
    }
  });
$(window).on('load resize', function () {
    if ($(this).width() > 1250) {
      $('.advantages-list').trigger('destroy.owl.carousel');
      // $('.advantages-list').removeClass('owl-carousel');
      $('.advantages-list').addClass('main-content');
    } else {
      $('.advantages-list').removeClass('main-content');
      $('.advantages-list').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        stagePadding: 40,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
      });
    }
  });


    $('.examples-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
              items: 1,
              stagePadding: 150
            },
            800: {
                items: 2
            },
            1000: {
              items: 2,
                stagePadding: 100
            },
            1280: {
                items: 3,
            }
        }
    });


    $('.video-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        video: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                stagePadding: 120,
                center: true

            },
            1000: {
                items: 2,
                stagePadding: 80,
                center: true
            },
            1280: {
                items: 3
            }
        }
    });

});