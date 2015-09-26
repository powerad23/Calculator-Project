(function () {
	var calcDisplay = [];
	var space = ""

	function buttonPress(input) {
		calcDisplay.push(input);
		calcDisplay.push(space)
		console.log(calcDisplay);
	}
	$("button#1.number").on('click', function () {
		buttonPress(1);
	});
	$(".number2").click(function () {
		buttonPress(2);
	});
	$(".number3").click(function () {
		buttonPress(3);
	});
	$(".number4").click(function () {
		buttonPress(4);
	});
	$(".number5").click(function () {
		buttonPress(5);
	});
	$(".number6").click(function () {
		buttonPress(6);
	});
	$(".number7").click(function () {
		buttonPress(7);
	});
	$(".number8").click(function () {
		buttonPress(8);
	});
	$(".number9").click(function () {
		buttonPress(9);
	});
	$("h4").append(calcDisplay);
})();