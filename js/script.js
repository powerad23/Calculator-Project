(function () {
	var calcDisplay = [];
	var space = ""

	function buttonPress(input) {
		calcDisplay.push(input);
		//calcDisplay.push(space)
		console.log(calcDisplay);
	}
	$("button#1.number").click(function () {
		buttonPress(1);
	});
	$(".number#2.number").click(function () {
		buttonPress(2);
	});
	$(".number#3.number").click(function () {
		buttonPress(3);
	});
	$(".number#4.number").click(function () {
		buttonPress(4);
	});
	$(".number#5.number").click(function () {
		buttonPress(5);
	});
	$(".number#6.number").click(function () {
		buttonPress(6);
	});
	$(".number#7.number").click(function () {
		buttonPress(7);
	});
	$(".number#8.number").click(function () {
		buttonPress(8);
	});
	$(".number#9.number").click(function () {
		buttonPress(9);
	});
	$(".number#10.number").click(function () {
		buttonPress("+");
	});
	$(".number#11.number").click(function () {
		buttonPress("-");
	});
	$(".number#12.number").click(function () {
		buttonPress("/");
	});
	$(".number#13.number").click(function () {
		buttonPress("*");
	});
	$(".number#14.number").click(function () {
		var compute = calcDisplay.join("");
		console.log(eval(compute));
	});
	$(".number#15.number").click(function () {
		calcDisplay = []
	});
	$("h4").append(calcDisplay);
})();