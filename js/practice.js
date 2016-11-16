/**
 * Created by hae young Joo on 2016-11-16.
 */
//현재 html 안에 있는 모든 엘리먼트를 다 선택해서 글자색을 red로 변경한다.
// $(" * ").css("color", "red");//전체선택
//$("h1,input").css("color","red");//태그선택
//$("#inchon").remove();//아이디선택
//$(".myClass").css("background-color","yellow");//클래스선택
//$("[type=button]").css("color","yellow");//속성선택
//$("div > ul > li[id]").css("color","red"); >는 자식
//$("div li[id=inchon]").css("color","red"); // 공백은 후손.
//alert( $("#inchon + li").text() ); //태그사이에 있는 글자를 긁어 온다.

function myFunc(){

    console.log( $("#apple").text() );
    console.log( $("#pineapple").text() );
    console.log( $("ul > li.myList" ).text() );
    console.log( $("#uId").val() );//입력상자 안에 있는 값을 불러옴!
    console.log( $("form > input").attr("id") );//속성중에 id속성값을 알아낸다.
    console.log( $("ol > li:first").text() );//ol의 자식으로 있는 li의 첫번째
    console.log( $("ol > li:nth-child(2)").text() );
    console.log( $("ol > li:last").text() );

}










