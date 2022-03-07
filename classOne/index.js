// document.querySelector(".demo").innerHTML = "The text changed";
$(".demo").text("Hello I am changed using jquery");
$(".div1 h1, #demo2").text("I am changed from jquery");
$("#demo3").html("<u> Rony Begum </u>");
$(".demo4").append(" Rony");
$(".demo5").prepend("Rony and ");

var para0 = $("<p></p>").text("This is paragraph 0");
$(".para1").before(para0);
var para2 = $("<p></p>").text("This is paragraph 2");
$(".para1").after(para2);
