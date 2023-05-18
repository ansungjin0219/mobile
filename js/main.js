//메인 인덱스 영역
//헤더 네비 영역
var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false) 가설세운거임
//처음에 네비는 닫혀(안보이는상태)있으니 닫혀있으면 false라고 가설세운거
  
$(".menu_ham, .menu_close, .modal").click(function(e) { //메뉴버튼 클릭시
    e.preventDefault()

    var documentHeight =  $(document).height(); //전체 페이지의 높이
    $("#gnb").css('height',documentHeight); //네비의 높이를 전체페이지의 높이로 변경

   if(op==false){ //메뉴가 닫혀있는 상태에서 클릭했냐 가설세운거임
     $("#gnb").animate({left:0,opacity:1}, 'fast');
     $('#headerArea .menu_close').css('display', 'block');
     $('#headerArea .menu_ham').css('display', 'none');
     $('#headerArea .modal').fadeIn('fast')
     op=true;
   }else{  //메뉴가 열려있는 상태에서 클릭했냐
     $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
     $('#headerArea .menu_close').css('display', 'none');
     $('#headerArea .menu_ham').css('display', 'block');
     $('#headerArea .modal').fadeOut('fast')
     op=false;
   }

});

//2depth 메뉴 교대로 열기 처리   가정법 각메뉴들이 열려있냐 닫혀있냐상태를 잡아주는 변수 onoff
var onoff=[false,false,false,false,false,false]; //가정법 false(서브닫혀있는상태) , true(서브열려있는상태)
var arrcount=onoff.length;  //배열의 개수 6

// console.log(arrcount);

$('#gnb .depth1 h3 a').click(function(e){  //1depth메뉴를 클릭하면
    e.preventDefault();

    var ind=$(this).parents('.depth1').index(); //0~5
    // var ind=$(this).index('#gnb .depth1 h3 a')
    
    //console.log(ind);
    
    if(onoff[ind]==false){  //각각의 1depth메뉴의 서브가 닫혀있냐? [닫혀있는상태에서 클릭했냐!!]
        //ㄴ 애초에 닫혀있으니까 닫힌게 false라고 가정을해놓고 그때 클릭하면 내꺼만 true되고 다른얘들은 false
    //$('#gnb .depth1 ul').hide();
    $(this).parents('.depth1').find('ul').slideDown('slow'); //자신의 서브를 열어라
    $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //자신을 제외한 모든 서브를 닫아라
        for(var i=0; i<arrcount; i++) onoff[i]=false; //모든 배열값을 false
        onoff[ind]=true; //자기 번호에대한 배열만 true 자신의 대한 배열번호만 true
        
        $('#gnb .depth1 h3 a').parents('li').find('span').text('expand_more');
        $(this).parents('li').find('span').text('expand_less');   
        
    }else{ // [열려있는상태에서 클릭했냐!!]
        $(this).parents('.depth1').find('ul').slideUp('fast'); //클릭한자기 서브를 닫아라
        onoff[ind]=false;  //true -> false 변경 닫힌상태로가정해야하니까

        $(this).parents('li').find('span').text('expand_more');
             
    }
});  


//  헤더 스크롤 영역
var smh=$('.main').height();

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);

    if(scroll>smh/3){//스크롤300까지 내리면
        $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
        $('.menu_ham').css('color','#333');
        $('.movetop').fadeIn('slow');
        
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
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





//ESG 경영 영역
$('.esg_management li:eq(0) a').addClass('current'); 
$('.esg_imgbox img:eq(1)').css('filter', 'grayscale(1)')  //두번째 이미지 흑백
          //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
  
$('.esg_management li a').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      var ind = $(this).index('.esg_management li a');  // 클릭시 해당 index를 뽑아준다
      //var ind = $(this).parent().index();  
      //console.log(ind);

      $('.esg_txtbox').hide('fast'); //모든 내용을 안보이게...
      $('.esg_txtbox'+(ind+1)).show('fast');
      $('.esg_imgbox img').css('z-index', '0').css('filter', 'grayscale(1)');
      $('.esg_imgbox img:eq('+ind+')').css('z-index', '20').css('filter', 'grayscale(0)');

      $('.esg_management li a').removeClass(); //모든 탭메뉴를 비활성화
      $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

});

//푸터 패밀리사이트 영역
$('#footerArea .fs').toggle(function(){
    $('#footerArea .fs_list').slideDown('fast');
    $('#footerArea .fs').css('background', '#ed2024')
},function(){
    $('#footerArea .fs_list').slideUp('fast');	
    $('#footerArea .fs').css('background', '#0c2340')
});



//서브 페이지 영역

//sub1 서브 네비 공통 영역
$('.sub_nav .subnav_btn').toggle(function(){
    $('.sub_nav ul').slideDown('fast');
    $(this).find('span:eq(1)').text('expand_less')
},function(){
    $('.sub_nav ul').slideUp('fast');	
    $(this).find('span:eq(1)').text('expand_more')
});

//sub1_3 회사연혁 영역

var nav_on = false

// $('.navhistory_btn').toggle(function(){
//     $('.nav_history ul').slideDown('fast');
//     $(this).find('span').text('expand_less')
// },function(){
//     $('.nav_history ul ').slideUp('fast');	
//     $(this).find('span').text('expand_more')
// });


$('.navhistory_btn').click(function(e) {
    e.preventDefault();
    if (nav_on == true) {
        $('.nav_history ul ').slideUp('fast');	
        $(this).find('span').text('expand_more');
        nav_on=false;

    } else {
        $('.nav_history ul').slideDown('fast');
        $(this).find('span').text('expand_less')
        nav_on=true;
    }
})


var ins= ['2014~2023', '2009~2013', '2005~2008', '1935~2004']

$('.nav_history ul a').click(function(e){
    e.preventDefault();

   $('.company_history').hide();
   var ind = $(this).parent('li').index();
   $('.company_history:eq('+ind+')').show();
   $('.navhistory_btn strong').text(ins[ind]);

   $('.nav_history ul ').slideUp('fast');
   $('.navhistory_btn').find('span').text('expand_more');
   nav_on=false;
})

//sub1_4 오시는 길 영역
 //var cnt=3;  //탭메뉴 개수 ***
 $('.map1').show(); // 첫번째 탭 내용만 열어라
 $('.tab a:eq(0)').addClass('tab_a1'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
     
 $('.tab a').click(function(e){
    e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
    
    var ind = $(this).index('.tab a');  // 클릭시 해당 index를 뽑아준다
    //var ind = $(this).parent().index();  
    //console.log(ind);
    $('.map_box').css('overflow','visible').css('height','auto');
    //           ㄴvisible : 기본값으로 내용이 더길어도 그대로보여짐(내용흘러넘침)

    $(".map_box>div").hide(); //모든 탭내용을 안보이게...
    $(".map_box>div:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
    $('.tab a').removeClass(); //모든 탭메뉴를 비활성화
    $(this).addClass('tab_a1'); // 클릭한 해당 탭메뉴만 활성화
});

//sub2_1 고객서비스사업 영역
 $('.nav_business li:eq(0) a').addClass('tab_a1'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
     
 $('.nav_business li a').click(function(e){
    e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
    
    var ind = $(this).index('.nav_business li a');
    $(".service_overview1, .service_overview2").fadeOut('fast');
    $('.service_overview'+(+ind+1)).fadeIn('fast');
    $('.nav_business li a').removeClass();
    $(this).addClass('tab_a1');
});

 //sub2_3 디지털사업 영역
 $('.pop_btn').hide('fast');
$.ajax({
    url: './sub2_3.json',
    dataType: 'json',
    success: function(data){
        var useData = data.product;  // 객체배열이 저장된다
        var txt='';
        var ind1 = 0;
        var total1 = useData.length; // 총 8개
        //console.log(total1);
                
        function dataPrint(){
                //for(var i=0; i<useData.length; i++){}   ↓ for in문
               
                    var $img = useData[ind1].img;  //담아두고 써도되고, 그대로 써도 되고~
                    var $company_name = useData[ind1].company_name;
                    var $product_name = useData[ind1].product_name;
                    var $product_content = useData[ind1].product_content;
  
  
                    $(".popup img").attr("src",$img);
                    
                    txt = "<div>";
                    txt += "<span>" + $company_name + "</span>";
                    txt += "<strong>" + $product_name + "</strong>";
                    txt += "<p>" + $product_content + "</p>";
                    txt += "</div>";
                    // $(".pop .popup .txt").html(txt);

                    
                    
                    $('.popup .txt').html(txt);
                
                // console.log(txt);
        
              }
    
        //버튼 이벤트
        $(".product ul li a").click(function (e) {
          e.preventDefault();

      
          ind1 = $(this).index(".product ul li a"); // 0 1 2 3 4 5 
          $('.pop_btn').fadeIn('fast')
          $(".popup").fadeIn("fast");
        //  $('body').css('overflow','hidden');

          dataPrint();
        });

        // 팝업 닫기
        $(".close_btn").click(function (e) {
          e.preventDefault();
          // $(".pop .modal_box").fadeOut("fast");
          $(".popup").fadeOut("fast");
          $('.pop_btn').fadeOut('fast')
          //$('body').css('overflow','initial');
            
  
        });
       
        // 팝업 좌우 버튼
        $('.pop_btn a').click(function(e){
          e.preventDefault();
      
          $('.popup').fadeIn('fast');
      
          if($(this).hasClass('pre')){
            if(ind1==0)ind1=total1;    // 5 4 3 2 1 0 5 4 3 2 1 0...
            ind1--;
            dataPrint();
          }else if($(this).hasClass('next')){
            if(ind1==total1-1)ind1=-1;   // 0 1 2 3 4 5 0 1 2 3 4 5...
            ind1++;
            dataPrint();
          }
      
        });
  
      }
    });
  
  
  
  