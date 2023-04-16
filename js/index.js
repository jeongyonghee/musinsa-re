$('.slideInner').slick({
    autoplay : true,        
    autoplaySpeed : 4000,   
    dots : true,           
    pauseOnHover : false,   
    arrow : true,         
    prevArrow : '<button><i class="fas fa-angle-left"></i></button>',
    nextArrow : '<button><i class="fas fa-angle-right"></i></button>'
})

// $(window).scroll(function(){
//     var sct = $(this).scrollTop()

//     if(sct >= 100 && !$('header').hasClass('on')){
//         $('#header').css({
//             position:'fixed',
//             top:'-50px',
//             backgroundColor:'rgba(0,0,0,0.5)'
//         }).animate({
//             top:'0px'
//         }, 300).addClass('on')

//     }else if(sct<100 && $('header').hasClass('on')){
//         $('#header').css({
//             position:'relative',
//             backgroundColor:'rgba(0,0,0,1)',
//             top:'-30px' 
//         }).animate({
//             top:'0px', 
//         },500).removeClass('on') 
//     }
// }) 


// $('.search input').on('mouseover',function(){
//     $('#header #searchpopup').addClass('on')
// })
// $('.search input').on('mouseout',function(){
//     $('#header #searchpopup').removeClass('on')
// })

// setInterval(function(){
//     $('.rollingtext li:first').animate({
//         marginTop:'-40px',
//     },500,function(){
//         $(this).appendTo('.rollingtext').css({
//             marginTop:'0px' 
//         })
//     })
// },3000)

var slidecount = 0;
// $('.productslide').css({
//     marginLeft:'-100%'
// })

$('.product .next').on('click',function(){
    if(slidecount<$('.productmenu').length-1){
        slidecount++
        $('.productslide').animate({
            marginLeft:'-=100%'
        },500)
    }
})

$('.product .prev').on('click',function(){
    if(slidecount>0){
        slidecount--
        $('.productslide').animate({
            marginLeft:'+=100%'
        },500)
    }
})

$('.slidetwoInner').slick({
    autoplay : true,        
    autoplaySpeed : 4000,   
    dots : false,           
    pauseOnHover : false, 
    centerMode:true,
    centerPadding:"100px",  
    arrow : true,
    slidesToShow:5,         
    prevArrow : '<button><i class="fas fa-angle-left"></i></button>',
    nextArrow : '<button><i class="fas fa-angle-right"></i></button>'
})

