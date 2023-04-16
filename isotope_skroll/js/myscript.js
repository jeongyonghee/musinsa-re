$(window).on("load", function(){
        skroll.recalcPosition();

        $(".grid").isotope({
           filter:"*",
           layoutMode:'masonry', 
           itemSelector:'.item',
       })


    })

    //isotope 플러그인 연결(갤러리필터링)
    $("#navi li").on("click", function(){
        var filterValue =  $(this).attr("data-filter")
         $(".grid").isotope({
             filter:filterValue,
             layoutMode:'masonry', // fitRows, masonry
             itemSelector:'.item',
         })
     })
     
     // duration(애니메이션 진행시간) wait(대기시간), 
     // delay(같은줄에 있는 동일클래스들간의 간격시간)
     // repeat ()
     var skroll = new Skroll()
     .add(".sk1", {animation:"zoomIn", duration:1000, wait:500, delay:300, repeat:true})
     .add(".sk2", {animation:"fadeInLeft", duration:1000,})
     .add(".sk3", {animation:"fadeInRight", duration:1000,delay:300})
     .add(".sk4", {animation:"rotateRightIn", duration:1000,})
     .init()
      
     setInterval(function(){
         skroll.recalcPosition();
     },2000)






    

    
