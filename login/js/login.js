$(document).ready(function(){

function join_cancel(){    // <-뒤로가기 함수 취소버튼만들고 저함수 적용하면 이용약관취소 뒤로가짐!
   history.go(-1);
}

$('.menubar li:eq(0) a').click(function(){
    join_cancel();
});

});















