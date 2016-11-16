/**
 * Created by hae young Joo on 2016-11-15.
 */
function startClock(){

    //현재 시간을 구해요! " 2016-11-15 20:10:50 "
    //html div 영역에 출력.
    //html div영역을 자바스크립트 객체로 들고와요
    var div = document.getElementById("clockDiv"); // document는 body 밑을 지시한다.
    // div.innerHTML = "바뀌어요";
    // 이게 자바스크립트가 하는 짓이다. 웹페이지를 동적으로 변화시키는것!
    //HTML은 웹페이지를 정적으로 찍어낸다.
    //html element를 자바스크립트 객체로 변화시킨것 => document object

    //1초마다 반복적으로 현재 시간을 구해서 div에 출력할것.
    window.setInterval( function(){
        //현재시간을 구해와서 현재시간을 div에 찍으면 된다.
        var today = (new Date()).toLocaleString(); //우리나라 로케일로 맞춰서 바꿔준다.
        div.innerHTML = today;
    },1000 );//1초마다 람다함수를 반복하는거임.


}