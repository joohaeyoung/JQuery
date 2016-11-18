/**
 * Created by hae young Joo on 2016-11-16.
 */


function myEmpty(){
  $("div").empty();
}
function myRemove() {
  $("div").remove();
}

function myAddTag(){

//1.태그를 새로 만들어요 !!
  //<h1>이것은 소리없는아우성</h1>
  //<h1></h1>

   var h1= $("<h1></h1>").text("이것은 소리없는 아우성");

  //1. 자식으로 맨 마지막에 붙이기
 // $("div").append(h1);
  //2. 자식으로 맨 처음에 붙이기
  $("div").prepend(h1);

  //3. 형제로 앞에 붙이기
  //$("div > h1:first"),after(h1);
  //4. 형제로 뒤에 붙이기
  //$("div > h1:nth-child(2)").before(h1);

  //<img src="image/img.jpg " width="50" >
  //var img =$("<img />").attr("src","image/img2.jpg").attr("width","50");
  //$("div > h1:nth-child(2)").before(img);

}












