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