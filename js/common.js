$(document).ready(function() {
  
    var smh=$('.main').height()-$('#headerArea').height();  
    //console.log(smh);

     $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();  
            

            if(scroll>smh){
                $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                $('.menu_ham').css('color','#333');
                $('.movetop').fadeIn('slow');
               
            }else{
             
                $('#headerArea').css('background','none').css('border-bottom','none');
                $('.menu_ham').css('color','#fff');
                $('.movetop').fadeOut('fast');
              
            }; 
            
    });

    $('.movetop').click(function(e){
            e.preventDefault();   //a태그 니까 꼭 사용
             //상단으로 스르륵 이동합니다.
            $("html,body").stop().animate({"scrollTop":0},1000);
            //$("html,body").stop().animate({"scrollTop":100},1000); //해당 높이로 이동
         });

});