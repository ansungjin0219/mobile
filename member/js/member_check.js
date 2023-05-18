$(document).ready(function(){
        
    //    회원가입 개인정보 동의 ------------------------------------
    
    $('.okcheck').on('click',check_agree);
    
    function check_agree(e){
        e.preventDefault();      //input에 checkbox는 클릭하면 checked라는 속성이붙어짐!

        var checkboxLength=$('input[type="checkbox"]').length;  //5  이건자바스크립트문법->.length .size() 둘다같다
			            // 체크박스의 총개수
        var checkedLength=$('input[type="checkbox"]:checked').length; //체크가 되어있는 체크박스 개수
         //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)
        
        if(checkboxLength != checkedLength){ //체크되있는박스랑 그냥체크박스개수가 틀리면
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
        }else{  //모두 체크 되었다면
            location.href="./join.html";   //회원가입 폼 입력 페이지로 이동
        }
    }

       //모두 체크/해제
    $('.allcheck').toggle(function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true); //한번누르면 checked라는 속성을 붙여서 다 체크되게해라!
    },function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',false); //두번누르면 checked속성없애라
    });    

    
   });


function join_cancel(){    // <-뒤로가기 함수 취소버튼만들고 저함수 적용하면 이용약관취소 뒤로가짐!
   history.go(-1);
}

$('.menubar li:eq(0) a').click(function(){
    join_cancel();
});















