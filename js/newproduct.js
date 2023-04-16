$('#main .productlist .depth1 > li > a').on('click',function(){
    $(this).next().slideToggle(500)
    $(this).parent().siblings().find('.depth2').slideUp(500)
    $(this).parent().siblings().find('i').removeClass('fa-minus').addClass('fa-plus')
    if($(this).find('i').hasClass('fa-plus')){
        $(this).find('i').removeClass('fa-plus').addClass('fa-minus')
    }else{
        $(this).find('i').removeClass('fa-minus').addClass('fa-plus')
    }
    return false
})