

$('.item').on('click',function(){
    "use strict";
    $(this).addClass('active').siblings().removeClass('active');
    $(this).children().addClass('arrow').parent().siblings().children().removeClass('arrow');
});
$('.menu').bind('click',function(){
    "use strict";
    $(this).addClass('current').siblings().removeClass('current');
});
$('.menu').bind('mouseover',function(){
    "use strict";
        $(this).addClass('over-active').siblings().removeClass('over-active');
});
$('.menu').bind('mouseout',function(){
    "use strict";
    $(this).removeClass('over-active');
});
$('.option').bind('mouseover',function(){
    "use strict";
    $(this).css('backgroundColor','#cc9f14');
    $(this).css('color','#000');
    $(this).children('.cont-box').css('backgroundColor',"#ffd50f");
    $(this).children('.option-title').children('.try-btn').show();
});
$('.option').bind('mouseout',function(){
    "use strict";
    $(this).css('backgroundColor','');
    $(this).css('color','#a7a6ca');
    $('.cont-box').css('backgroundColor',"");
    $('.try-btn').hide();
});
