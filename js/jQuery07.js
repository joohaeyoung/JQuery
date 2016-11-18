/**
 * Created by hae young Joo on 2016-11-16.
 */
//텍스트를 사용할수 있도록 한다
function myFunc1(){
  $("[type=text]").removeAttr("disabled")
}
//텍스트를 사용할 수 없도록 한다.
function myFunc2(){
  $("[type=text]").attr("disabled","disabled");
}









