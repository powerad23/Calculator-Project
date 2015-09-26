(function () {
	var calcDisplay = [];
	var screenDisplay = [];
	function buttonPress(input) {
		calcDisplay.push(input);
		console.log(calcDisplay);
	}
	$("button#1.number").click(function () {
		buttonPress(1);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#2.number").click(function () {
		buttonPress(2);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#3.number").click(function () {
		buttonPress(3);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#4.number").click(function () {
		buttonPress(4);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#5.number").click(function () {
		buttonPress(5);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#6.number").click(function () {
		buttonPress(6);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#7.number").click(function () {
		buttonPress(7);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#8.number").click(function () {
		buttonPress(8);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#9.number").click(function () {
		buttonPress(9);
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#10.number").click(function () {
		buttonPress("+");
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#11.number").click(function () {
		buttonPress("-");
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#12.number").click(function () {
		buttonPress("/");
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#13.number").click(function () {
		buttonPress("*");
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	$(".number#14.number").click(function () {
		var compute = calcDisplay.join("");
		$("<p>"+ eval(compute)+"</p>").appendTo('#output')
	});
	$(".number#15.number").click(function () {
		calcDisplay = []
		$("#output").empty();
	});
	
})();