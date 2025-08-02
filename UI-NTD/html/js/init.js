let App = {
    windowW: $(window).width(),
    initHelpers: function ($helpers) {
        let me = this;
        $(document).ready(function () {
            me.initHelper('common');
            if ($helpers != undefined) {
                if ($helpers instanceof Array) {
                    for (let $index in $helpers) {
                        me.initHelper($helpers[$index]);
                    }
                } else {
                    me.initHelper($helpers);
                }
            } else {

            }
        });

    },
    initHelper: function ($helper) {
        let me = this;
        //console.log($helper);


        if ($helper.length > 0) {
            console.log('init <' + $helper + '> function window width = ' + me.windowW);
            App[$helper]();
        }

    },

    common: function () {
        $('.close-noti').click(function () {
            $('.td-wrapper').removeClass('active-noti')
        })

        let me = this;

        if (me.windowW > 800) {
            $(".scrollTop").click(function () {
                $("html, body").animate({scrollTop: 0});
                return false;
            });


        } else {


        }
    },

    bnerBottom: function () {

        let me = this;

        if (me.windowW > 800) {
            $('.bner-booking-bottom .video-bg').attr('src', 'http://storage.quannhautudo.com/Data/images/home/Bia-Web.mp4')


        } else {
            $('.bner-booking-bottom .video-bg').attr('src', 'http://storage.quannhautudo.com/Data/images/home/Bia-Mob.mp4')

        }
    },
    header: function () {

        let me = this;

        if (me.windowW > 800) {

        } else {
            $('.td-header .src-btn').click(function () {
                if ($(this).parent().parent().hasClass('expanded')) {
                    $(this).parent().parent().removeClass('expanded')
                } else {
                    $(this).parent().parent().addClass('expanded')
                }
            });

        }
    },
    listBranch: function () {

        let me = this;

        if (me.windowW > 800) {
            $('a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                var target = this.hash;
                var $target = $(target);
                $('.content-tab').stop().animate({
                    'scrollTop': $target.offset().top,

                }, 900, 'swing', function () {
                    // window.location.hash = target;
                });
                console.log($target.offset().top)
            });
        } else {
            $('.branch-toggleBox .district-toggle').click(function () {
                if ($(this).parent().hasClass('active')) {
                    $(this).parent().removeClass('active')
                } else {
                    $(this).parent().addClass('active');
                    $('.branch-toggleBox .district-toggle').not(this).parent().removeClass('active');
                }
            });

            $(".branch-toggleBox .swiper-container").each(function () {
                let countChild = $(this).find('.swiper-wrapper').children().length;
                console.log('So phan tu con: ' + countChild)
                if (countChild > 1) {
                    let swiperBranch = new Swiper('.swiper-branch', {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                    })
                } else {
                    $(this).addClass('one-child')
                }
            });

        }
    },

    foodPopup: function () {

        // Plus and Minus order in PopUp Detail
        $('.minus').click(function () {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            let $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

        let me = this;

        if (me.windowW > 800) {
            // Fancy Box Popup Detail
            $('.popupFood').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-detail-atc',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        // animationEffect: 'fade-in',
                        touch: false,
                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            swiperGallery = new Swiper(".swiper-gallery", {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                pagination: {
                                    el: ".galleryBox .swiper-pagination",
                                    type: "fraction",
                                },
                                initialSlide: 0,
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                            swiperGallery.destroy();
                        }
                    },
                });
            });
        } else {

            // Fancy Box Popup Detail
            $('.popupFood').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-detail-atc',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        animationEffect: 'slide-in-out',
                        touch: false,
                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            swiperGallery = new Swiper(".swiper-gallery", {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                pagination: {
                                    el: ".galleryBox .swiper-pagination",
                                    type: "fraction",
                                },
                                initialSlide: 0,
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                            swiperGallery.destroy();
                        }
                    },
                });
            });
        }
    },
    bookingPopup: function () {


        let me = this;

        if (me.windowW > 800) {
            // Fancy Box Popup Detail
            $('.bookingPopup').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-booking-atc',
                    type: 'inline',

                    opts: {

                        protect: true,
                        animationDuration: 500,
                        // animationEffect: 'fade-in',
                        touch: false,
                        clickSlide: false,
                        clickOutside: false,
                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            // Plus and Minus order in PopUp Detail
                            $('.minus').click(function () {
                                let $input = $(this).parent().find('input');
                                let count = parseInt($input.val()) - 1;
                                count = count < 1 ? 1 : count;
                                $input.val(count);
                                $input.change();
                                return false;
                            });
                            $('.plus').click(function () {
                                let $input = $(this).parent().find('input');
                                $input.val(parseInt($input.val()) + 1);
                                $input.change();
                                return false;
                            });


                            // Pick Date init
                            var $button_open_close = $('#button__api-open-close'),
                                $input_open_close = $('#demo__api-open-close').pickadate({
                                    monthsFull: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                                    monthsShort: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
                                    weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                                    format: 'dd mmmm',
                                    formatSubmit: 'dd/mm/yyyy',
                                    firstDay: 1,
                                    today: 'Hôm nay',
                                    close: 'Đóng',
                                    min: 0,
                                    max: 90,
                                    clear: false,
                                    onOpen: function () {
                                        $button_open_close.text('Close')
                                    },
                                    onClose: function () {
                                        $button_open_close.text('Open')
                                    }
                                }),
                                picker_open_close = $input_open_close.pickadate()
                            $button_open_close.on('click', function (event) {
                                if (picker_open_close.get('open')) {
                                    picker_open_close.close()
                                } else {
                                    picker_open_close.open()
                                }
                                event.stopPropagation()
                            }).on('mousedown', function (event) {
                                event.preventDefault()
                            })

                            var $input_close_focus = $('#demo__api-close-focus').pickadate(),
                                picker_close_focus = $input_close_focus.pickadate()
                            $('#button__api-close-focus').on('click', function () {
                                picker_close_focus.close(true)
                            })

                            var $input_open_focus = $('#demo__api-open-focus').pickadate(),
                                picker_open_focus = $input_open_focus.pickadate()
                            $('#button__api-open-focus').on('click', function (event) {
                                picker_open_focus.open(false)
                                event.stopPropagation()
                                $(document).on('click.open_focus', function () {
                                    picker_open_focus.close()
                                    $(document).off('.open_focus')
                                })
                            })

                            $('.open-fancy-warning').off('click').click(function () {


                                $.fancybox.open({
                                    src: '#popup-warning',
                                    type: 'inline',
                                    opts: {
                                        protect: true,
                                        animationDuration: 500,
                                        touch: false,
                                        beforeShow: function () {
                                            $('body').addClass('popup-warning-active');


                                        },
                                        afterShow: function () {


                                        },
                                        afterClose: function () {
                                            $('body').removeClass('popup-warning-active');
                                        }
                                    },
                                });
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                        }
                    },
                });
            });
            $('.open-fancy-warning').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-warning',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        touch: false,
                        beforeShow: function () {
                            $('body').addClass('popup-warning-active');


                        },
                        afterShow: function () {


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-warning-active');
                        }
                    },
                });
            });
            $('.Popup-warning .confirm-btn').off('click').click(function () {
                $.fancybox.destroy();
            });

        } else {

            $('.bookingPopup').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-booking-atc',
                    type: 'inline',

                    opts: {

                        protect: true,
                        animationDuration: 500,
                        // animationEffect: 'fade-in',
                        touch: false,
                        clickSlide: false,
                        clickOutside: false,
                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            // Plus and Minus order in PopUp Detail
                            $('.minus').click(function () {
                                let $input = $(this).parent().find('input');
                                let count = parseInt($input.val()) - 1;
                                count = count < 1 ? 1 : count;
                                $input.val(count);
                                $input.change();
                                return false;
                            });
                            $('.plus').click(function () {
                                let $input = $(this).parent().find('input');
                                $input.val(parseInt($input.val()) + 1);
                                $input.change();
                                return false;
                            });


                            // Pick Date init
                            var $button_open_close = $('#button__api-open-close'),
                                $input_open_close = $('#demo__api-open-close').pickadate({
                                    monthsFull: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                                    monthsShort: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
                                    weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                                    format: 'dd mmmm',
                                    formatSubmit: 'dd/mm/yyyy',
                                    firstDay: 1,
                                    today: 'Hôm nay',
                                    close: 'Đóng',
                                    min: 0,
                                    max: 90,
                                    clear: false,
                                    onOpen: function () {
                                        $button_open_close.text('Close')
                                    },
                                    onClose: function () {
                                        $button_open_close.text('Open')
                                    }
                                }),
                                picker_open_close = $input_open_close.pickadate()
                            $button_open_close.on('click', function (event) {
                                if (picker_open_close.get('open')) {
                                    picker_open_close.close()
                                } else {
                                    picker_open_close.open()
                                }
                                event.stopPropagation()
                            }).on('mousedown', function (event) {
                                event.preventDefault()
                            })

                            var $input_close_focus = $('#demo__api-close-focus').pickadate(),
                                picker_close_focus = $input_close_focus.pickadate()
                            $('#button__api-close-focus').on('click', function () {
                                picker_close_focus.close(true)
                            })

                            var $input_open_focus = $('#demo__api-open-focus').pickadate(),
                                picker_open_focus = $input_open_focus.pickadate()
                            $('#button__api-open-focus').on('click', function (event) {
                                picker_open_focus.open(false)
                                event.stopPropagation()
                                $(document).on('click.open_focus', function () {
                                    picker_open_focus.close()
                                    $(document).off('.open_focus')
                                })
                            })

                            $('.open-fancy-warning').off('click').click(function () {


                                $.fancybox.open({
                                    src: '#popup-warning',
                                    type: 'inline',
                                    opts: {
                                        protect: true,
                                        animationDuration: 500,
                                        touch: false,
                                        beforeShow: function () {
                                            $('body').addClass('popup-warning-active');


                                        },
                                        afterShow: function () {


                                        },
                                        afterClose: function () {
                                            $('body').removeClass('popup-warning-active');
                                        }
                                    },
                                });
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                        }
                    },
                });
            });
            $('.open-fancy-warning').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-warning',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        touch: false,
                        beforeShow: function () {
                            $('body').addClass('popup-warning-active');


                        },
                        afterShow: function () {


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-warning-active');
                        }
                    },
                });
            });
            $('.Popup-warning .confirm-btn').off('click').click(function () {
                $.fancybox.destroy();
            });
        }
    },
    menuList: function () {

        $('.tags-filter').each(function () {
            $(this).click(function () {
                $(".tags-filter").removeClass("active");
                $(this).addClass("active");
                scrollToId('head-menu');
            })
        });

        let me = this;

        if (me.windowW > 800) {
            let swiperMenuTags = new Swiper(".menu__tags-list", {
                slidesPerView: 'auto',
                spaceBetween: 20,
                freeMode: true,
                loop: false,
                navigation: {
                    nextEl: ".tagBox .swiper-button-next",
                    prevEl: ".tagBox .swiper-button-prev"
                }
            });
        } else {


        }
    },

    menuPopup: function () {


        let me = this;

        if (me.windowW > 800) {
            // Fancy Box Popup Detail
            $('.menuPopup').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-menu-atc',
                    type: 'inline',

                    opts: {

                        protect: true,
                        animationDuration: 500,
                        // animationEffect: 'fade-in',
                        touch: false,

                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            // Plus and Minus order in PopUp Detail
                            $('.minus').click(function () {
                                let $input = $(this).parent().find('input');
                                let count = parseInt($input.val()) - 1;
                                count = count < 1 ? 1 : count;
                                $input.val(count);
                                $input.change();
                                return false;
                            });
                            $('.plus').click(function () {
                                let $input = $(this).parent().find('input');
                                $input.val(parseInt($input.val()) + 1);
                                $input.change();
                                return false;
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                        }
                    },
                });
            });


            $('.open-fancy-warning').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-warning',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        touch: false,
                        beforeShow: function () {
                            $('body').addClass('popup-warning-active');


                        },
                        afterShow: function () {


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-warning-active');
                        }
                    },
                });
            });
            $('.Popup-warning .confirm-btn').off('click').click(function () {
                $.fancybox.destroy();
            });

        } else {

            $('.menuPopup').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-menu-atc',
                    type: 'inline',

                    opts: {

                        protect: true,
                        animationDuration: 500,
                        animationEffect: 'slide-in-out',
                        touch: false,

                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            // Plus and Minus order in PopUp Detail
                            $('.minus').click(function () {
                                let $input = $(this).parent().find('input');
                                let count = parseInt($input.val()) - 1;
                                count = count < 1 ? 1 : count;
                                $input.val(count);
                                $input.change();
                                return false;
                            });
                            $('.plus').click(function () {
                                let $input = $(this).parent().find('input');
                                $input.val(parseInt($input.val()) + 1);
                                $input.change();
                                return false;
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                        }
                    },
                });
            });

        }
    },

    foodDetail: function () {

        let me = this;

        if (me.windowW > 800) {
            swiperGallery = new Swiper(".swiper-gallery", {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: ".galleryBox .swiper-pagination",
                    type: "fraction",
                },
                initialSlide: 0,
            });

        } else {

            swiperGallery = new Swiper(".swiper-gallery", {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: ".galleryBox .swiper-pagination",
                    type: "fraction",
                },
                initialSlide: 0,
            });
        }
    },
    bookingDetail: function () {

        // Plus and Minus order in PopUp Detail
        $('.minus').click(function () {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;

        });
        $('.plus').click(function () {
            let $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

        // Pick Date init
        var $button_open_close = $('#button__api-open-close'),
            $input_open_close = $('#demo__api-open-close').pickadate({
                monthsFull: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                monthsShort: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
                weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                format: 'dd mmmm',
                formatSubmit: 'dd/mm/yyyy',
                firstDay: 1,
                today: 'Hôm nay',
                close: 'Đóng',
                min: 0,
                max: 90,
                clear: false,
                onOpen: function () {
                    $button_open_close.text('Close')
                },
                onClose: function () {
                    $button_open_close.text('Open')
                }
            }),
            picker_open_close = $input_open_close.pickadate()
        $button_open_close.on('click', function (event) {
            if (picker_open_close.get('open')) {
                picker_open_close.close()
            } else {
                picker_open_close.open()
            }
            event.stopPropagation()
        }).on('mousedown', function (event) {
            event.preventDefault()
        })

        var $input_close_focus = $('#demo__api-close-focus').pickadate(),
            picker_close_focus = $input_close_focus.pickadate()
        $('#button__api-close-focus').on('click', function () {
            picker_close_focus.close(true)
        })

        var $input_open_focus = $('#demo__api-open-focus').pickadate(),
            picker_open_focus = $input_open_focus.pickadate()
        $('#button__api-open-focus').on('click', function (event) {
            picker_open_focus.open(false)
            event.stopPropagation()
            $(document).on('click.open_focus', function () {
                picker_open_focus.close()
                $(document).off('.open_focus')
            })
        })
        let me = this;

        if (me.windowW > 800) {


        } else {


        }
    },
    coso: function () {
        new WOW().init();

        let me = this;

        $('.csdcb-toc .toc-header').click(function () {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active')
            } else {
                $(this).parent().addClass('active');

            }
        });
        if (me.windowW > 800) {
            swiperGallery = new Swiper(".ccbr-gallery.multi-thumb", {
                slidesPerView: 1,
                spaceBetween: 0,
                freeMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });

        } else {

            $.each($('.cc-wrapper .ccBox'), function (i, v) {
                let insertRowPhone = $(v).find(".ccbl-des");
                $(v).find('.ccbl-phone').insertAfter(insertRowPhone);
            });

            $('.cosoDetail-wrapper .csdcb-phone').insertAfter(".cosoDetail-wrapper .csdcb-des");

            swiperMultiBox = new Swiper(".ccBox-container.multiBox", {
                slidesPerView: 'auto',
                spaceBetween: 10,
                freeMode: true,
            });
        }
    },
    news: function () {

        let me = this;

        if (me.windowW > 800) {


        } else {
            $(".btnPagination.btnPrev").insertBefore(".nf-left");

            // swiperMultiNews = new Swiper(".newsDetail-wrapper .grid-news-container", {
            //     slidesPerView: 'auto',
            //     spaceBetween: 15,
            //     freeMode: true,
            // });
        }
    },

    home: function () {
        gsap.registerPlugin(ScrollTrigger);

        //SlpitText
        const wrapElements = (elems, wrapType, wrapClass) => {
            elems.forEach(char => {
                const wrapEl = document.createElement(wrapType);
                wrapEl.classList = wrapClass;
                char.parentNode.appendChild(wrapEl);
                wrapEl.appendChild(char);
            });
        }

        Splitting();

        const fx1Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect1]')];

        let me = this;

        if (me.windowW > 800) {

            $.fn.calHeightBranch = function () {
                let hBranch = $('.branch-web .branch-left').innerHeight();

                $('.branch-web .content-right').css('max-height', hBranch);

                console.log('Height branch' + hBranch)
            }
            $.fn.calHeightBranch();

            $(window).resize(function () {
                $.fn.calHeightBranch();
            });


            // GSAP Scroll Triggers
            fx1Titles.forEach(title => {
                const words = [...title.querySelectorAll('.word')];

                for (const word of words) {

                    const chars = word.querySelectorAll('.char');
                    const charsTotal = chars.length;

                    gsap.fromTo(chars, {
                        'will-change': 'transform, filter',
                        transformOrigin: '50% 100%',
                        scale: position => {
                            const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                            return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0.5, 2.1, factor);
                        },
                        y: position => {
                            const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                            return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 60, factor);
                        },
                        rotation: position => {
                            const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                            return position < charsTotal / 2 ? gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), -4, 0, factor) : gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 4, factor);
                        },
                        filter: 'blur(12px) opacity(0)',
                    }, {
                        ease: 'power2.inOut',
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        delay: 0.3,
                        filter: 'blur(0px) opacity(1)',
                        duration: 1.2,
                        scrollTrigger: {
                            start: 'center bottom',
                            end: 'bottom top',
                            trigger: title,
                        },
                        stagger: {
                            amount: 0.15,
                            from: 'center'
                        }
                    });

                }
            });

            var scenePrl = document.getElementById('scenePrl');
            var parallaxInstance = new Parallax(scenePrl);

            // Parallax Vertical
            function parallax() {
                var parallaxController = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        triggerHook: "onEnter",
                        duration: "200%"
                    }
                });

                $('.parallax').each(function () {
                    var trig = this.parentNode,
                        parallax = this.getAttribute('data-parallax'),
                        speed = parallax * 100 + '%';

                    new ScrollMagic.Scene({triggerElement: trig})
                        .setTween(this, {y: speed, ease: Linear.easeNone})
                        .addTo(parallaxController);
                })
            }

            parallax();

            // Parallax Horizontal
            function parallaxHoz() {
                var parallaxHController = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        triggerHook: "onEnter",
                        duration: "200%"
                    }
                });

                $('.parallaxHoz').each(function () {
                    var trigH = this.parentNode,
                        parallaxH = this.getAttribute('data-parallax'),
                        speedH = parallaxH * 100 + '%';

                    new ScrollMagic.Scene({triggerElement: trigH})
                        .setTween(this, {x: speedH, ease: Linear.easeNone})
                        .addTo(parallaxHController);
                })
            }

            parallaxHoz();

            let swiperNewFood = new Swiper('.swiper-newfood', {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 25,
                navigation: {
                    nextEl: '.new-food .swiper-button-next',
                    prevEl: '.new-food .swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-newfood .swiper-pagination',
                    clickable: true,
                },
            })

            let swiperDscHome = new Swiper('.swiper-dscHome', {
                slidesPerView: 'auto',
                spaceBetween: 24,
                navigation: {
                    nextEl: '.discount-box .swiper-button-next',
                    prevEl: '.discount-box .swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-dscHome .swiper-pagination',
                    clickable: true,
                },
            })

            let windowHeight = window.innerHeight;

            const tl = gsap.timeline().fromTo('.box-2', {y: windowHeight}, {y: 0})

            ScrollTrigger.create({
                trigger: '.slide-up-box',
                animation: tl,
                pin: true,
                start: 'top top',
                end: 2.3 * windowHeight + ' bottom',
                duration: 1,
                scrub: 0,
                // markers: true,
            })

            const elemFade = gsap.utils.toArray('.fade-inup');
            elemFade.forEach((elemAnim) => {
                gsap.from(elemAnim, {
                    scrollTrigger: {
                        start: 'center bottom',
                        end: 'bottom top',
                        trigger: elemAnim,
                        onEnter() {
                            elemAnim.classList.add('active');
                        },
                    }
                });
            });

            $('.swiper-club').marquee({
                duration: 12000,
                duplicated: true,
                pauseOnHover: true,
                gap: 0,
                startVisible: true
            });

        } else {
            fx1Titles.forEach(title => {
                const words = [...title.querySelectorAll('.word')];

                for (const word of words) {

                    const chars = word.querySelectorAll('.char');
                    const charsTotal = chars.length;

                    gsap.fromTo(chars, {
                        'will-change': 'transform, filter',
                        transformOrigin: '50% 100%',
                        scale: position => {
                            const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                            return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0.5, 2.1, factor);
                        },
                        y: position => {
                            const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                            return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 60, factor);
                        },
                        rotation: position => {
                            const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                            return position < charsTotal / 2 ? gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), -4, 0, factor) : gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 4, factor);
                        },
                        filter: 'blur(12px) opacity(0)',
                    }, {
                        ease: 'power2.inOut',
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        filter: 'blur(0px) opacity(1)',
                        duration: 1.2,

                        stagger: {
                            amount: 0.15,
                            from: 'center'
                        }
                    });

                }


            });


            let windowHeight = window.innerHeight;


            const elemFade = gsap.utils.toArray('.fade-inup');
            elemFade.forEach((elemAnim) => {
                gsap.from(elemAnim, {
                    scrollTrigger: {
                        start: 'center bottom',
                        end: 'bottom top',
                        trigger: elemAnim,
                        onEnter() {
                            elemAnim.classList.add('active');
                        },
                    }
                });
            });


        }
    },


};

function scrollToId(id) {
    $("html, body").animate({scrollTop: $('#' + id).offset().top}, 400);
}

function scrollToObj(obj, top) {
    $("html, body").animate({scrollTop: obj.offset().top - top}, 400);
}