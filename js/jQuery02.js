/**
 * Created by hae young Joo on 2016-11-16.
 */

function myFunc(){

    //현재 html 안에 있는 모든 엘리먼트를 다 선택해서 글자색을 red로 변경한다.
    $(" * ").css("color", "red");
    $("h1,input").css("color","red");
    $("#inchon").remove();
    $(".myClass").css("background-color","yellow");
    $("[type=button]").css("color","yellow");
    $("div > ul > li[id]").css("color","red");// >는 자식
    $("div li[id=inchon]").css("color","red"); // 공백은 후손.
    alert( $("#inchon + li").text() ); //태그사이에 있는 글자를 긁어 온다.

}