$(window).scroll(function(){
    var sct = $(this).scrollTop()

    if(sct >= 100 && !$('header').hasClass('on')){
        $('#header').css({
            position:'fixed',
            top:'-50px',
            backgroundColor:'rgba(0,0,0,0.5)'
        }).animate({
            top:'0px'
        }, 300).addClass('on')

    }else if(sct<100 && $('header').hasClass('on')){
        $('#header').css({
            position:'relative',
            backgroundColor:'rgba(0,0,0,1)',
            top:'-30px' 
        }).animate({
            top:'0px', 
        },500).removeClass('on') 
    }
}) 

$('.search input').on('mouseover',function(){
    $('#header #searchpopup').addClass('on')
})
$('.search input').on('mouseout',function(){
    $('#header #searchpopup').removeClass('on')
})

setInterval(function(){
    $('.rollingtext li:first').animate({
        marginTop:'-40px',
    },500,function(){
        $(this).appendTo('.rollingtext').css({
            marginTop:'0px' 
        })
    })
},3000)

var ww = $(window).width()

function init(){
   ww = $(window).width()
   if(ww >= 800){
    $('html').addClass('pc').removeClass('mobile')
    }else{
        $('html').removeClass('pc').addClass('mobile')
    }
}
init()

$(window).on('resize',function(){
    init()
})

$('#nav .depth1 > li > a').on('click',function(){
    if($('html').hasClass('mobile')){
        $(this).next().slideToggle()
        $(this).parent().siblings().find('.depth2').slideUp()
    }
})

$('.ham').on('click',function(){
    $('#nav').toggleClass('on')
    if($(this).find('i').hasClass('fa-bars')){
        $(this).find('i').removeClass('fa-bars').addClass('fa-times')
        $(this).css({
            zIndex:'9999999999'
        })
    }else{
        $(this).find('i').addClass('fa-bars').removeClass('fa-times')
        $(this).css({
            zIndex:'99'
        })
    }
    
})