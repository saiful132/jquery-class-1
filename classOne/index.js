function example1() {
	$(".demo1").text("I am changed from jQuery code");
}

function example2() {
	$(".demo2").html("<b> I am changed from jQuery code and I am bold </b>");
}

function example3() {
	$(".demo3").append(" (I am added in the end position)");
}

function example4() {
	$(".demo4").prepend(" (I am added in the start position)");
}

var beforeP = $("<p></p>").text("I am an element added before the text");

function example5() {
	$(".demo5").before(beforeP);
}

var afterP = $("<p></p>").text("I am an element added after the text");
function example6() {
	$(".demo6").after(afterP);
}
