/**
 * Created by hae young Joo on 2016-11-16.
 */
function myFunc(){

  //idx: index번호.0,1,2 (첫번쨰 호출되면 0 두번쨰호출되면 1, 세번째호출되면 2 )
  // item : 현재 선택된 문서 객체.

   $("ul > li").each( function(idx,item){
    console.log( $(item).text()+"입니다");
  }) ;



}

function addC(){

  $("ul > li").addClass("myStyle");

}

function inStyle(){
  //현재 선택된 li에 대해서 스타일을 적용.
  $(this).addClass("inStyle");

}
function outStyle(){

  $(this).addClass("outStyle");
  $(this).remoeveClass("inStyle");

}










