/**
 * Created by hae young Joo on 2016-11-15.
 */
//변수를 만들려면
//데이터 타입이 지정되지 않기 때문에  아무값이나 들어갈 수 있다.
var test1 = 100 ;
var test2 = true;
var test3 = "소리없는 아우성";
var test4 = null;
var test5;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);

//선언적 함수
function myFunc(temp1, temp2){
    return temp1 + temp2 ;
}

var result =myFunc(10,10);
console.log(result);

//익명함수(람다함수)
var test = function( temp1, temp2 ){
    return temp1+temp2;
}
console.log(test(50,50));

//자바스크립트 객체.
//변수 : property
//함수 : method

var obj = {
    myName:"홍길동",
    myAge:30,
    myInfo:function(){

    }
};
console.log(obj.myName);
console.log(obj.myAge);
console.log(obj["myName"]);//이렇게 배열형태로 사용이 가능하다.
console.log(obj["myAge"]);//이렇게 배열형태로 사용이 가능하다.

console.log(obj.myInfo());












