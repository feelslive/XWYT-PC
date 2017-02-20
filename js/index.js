/**
 * Created by wall on 2016/12/19.
 */
$(function(){
    setTimeout(function(){
        $('.logo').addClass('animated zoomIn');
        setTimeout(function(){
            $('.logo').removeClass('zoomIn');
        }, 2000);
    }, 500);
    setTimeout(function(){
        $('.list-1').show();
        $('.list-1').addClass('animated bounceInUp');
        setTimeout(function(){
            $('.list-1').removeClass('bounceInUp');
        }, 2000);
    }, 500);
    setTimeout(function(){
        $('.list-2').show();
        $('.list-2').addClass('animated bounceInUp');
        setTimeout(function(){
            $('.list-2').removeClass('bounceInUp');
        }, 2000);
    }, 700);
    setTimeout(function(){
        $('.list-3').show();
        $('.list-3').addClass('animated bounceInUp');
        setTimeout(function(){
            $('.list-3').removeClass('bounceInUp');
        }, 2000);
    }, 900);
    setTimeout(function(){
        $('.list-4').show();
        $('.list-4').addClass('animated bounceInUp');
        setTimeout(function(){
            $('.list-4').removeClass('bounceInUp');
        }, 2000);
    }, 1100);
    setTimeout(function(){
        $('.list-5').show();
        $('.list-5').addClass('animated bounceInUp');
        setTimeout(function(){
            $('.list-5').removeClass('bounceInUp');
        }, 2000);
    }, 1300);
    setTimeout(function(){
        $('.present').show();
        $('.present').addClass('animated bounceInRight');
        setTimeout(function(){
            $('.present').removeClass('bounceInRight');
        }, 2000);
    }, 1500);
    setTimeout(function(){
        $('.an-bd').show();
        $('.an-bd').addClass('animated zoomInUp');
        setTimeout(function(){
            $('.an-bd').removeClass('zoomInUp');
        }, 2000);
    }, 1700);

    $(".an-nav-ts li").click(function(){
        $(this).addClass("pitch").siblings().removeClass("pitch");
        var index=$(this).index();
        $(".an-switch > div").eq(index).show().siblings().hide();
    });

    /*点击头像弹窗*/
    $('#an-login').click(function () {
        $('.an-pop,.an-ups').fadeIn();
    });
    $('.an-pop,.an-ups').click(function () {
        $('.an-pop,.an-ups').hide();
    });
    $('#an-login-1').click(function () {
        $('.an-pop-1,.an-ups-1').fadeIn();
    });
    $('.an-pop-1,.an-ups-1').click(function () {
        $('.an-pop-1,.an-ups-1').hide();
    })
    $('#an-login-2').click(function () {
        $('.an-pop-2,.an-ups-2').fadeIn();
    });
    $('.an-pop-2,.an-ups-2').click(function () {
        $('.an-pop-2,.an-ups-2').hide();
    })
    $('#an-login-3').click(function () {
        $('.an-pop-3,.an-ups-3').fadeIn();
    });
    $('.an-pop-3,.an-ups-3').click(function () {
        $('.an-pop-3,.an-ups-3').hide();
    })
    $('#an-login-4').click(function () {
        $('.an-pop-4,.an-ups-4').fadeIn();
    });
    $('.an-pop-4,.an-ups-4').click(function () {
        $('.an-pop-4,.an-ups-4').hide();
    })
});
