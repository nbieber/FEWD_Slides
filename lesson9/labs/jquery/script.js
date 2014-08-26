$("body h1").html("Hello jQuery");
$("#results").html("Nice to meet you...");

$("h1").click(saySomething);

function saySomething() {
	alert("hi");
}

$("h1").mouseout(function() {
	alert("bye");
});