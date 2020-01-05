//eventclick landingpage animate
$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();
});


//efek parallax  
// paralax scroll
$(window).scroll(function () {

    //jumbotron scroll h,1p up ke atas
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 3 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });


    //about
    if (wScroll > $('.about').offset().top) {
        $('.pKiri').addClass('pMuncul')
        $('.pKanan').addClass('pMuncul')
    }

    //portfolio
    if (wScroll > $('.portfolio').offset().top - 130) {
        //jalankan setiap gambar index
        $('.portfolio .thumbnail').each(function (index) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(index).addClass('muncul');
            }, 300 * (index + 1));
        });
    }

});