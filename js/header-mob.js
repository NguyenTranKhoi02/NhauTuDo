$(document).ready(function () {
    let me = $(window).width();

    if (me > 800) {

    } else {
        $('.menu-header-content .src-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.menu-expand').removeClass('active')
            } else {
                $(this).addClass('active');
                $('.menu-expand').addClass('active')
            }
        })

    }
});