//(function () {
	var calcDisplay = [];
	
	
	function display() {
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	}
	
	function buttonPress(input) {
		calcDisplay.push(input);
		console.log(calcDisplay);
	}

	function expressionPress(expression){
		switch(expression){
			case "plus":
				calcDisplay.push("+")
			break;
			
			case "minus":
				calcDisplay.push("-")
			break;
			
			case "divide":
				calcDisplay.push("/")
			break;
			
			case "multiply":
				calcDisplay.push("*")
			break;
			
			case "sqr":
				calcDisplay.push(Math.sqrt(calcDisplay[calcDisplay.length -1]))
			break;
			
			case "evaulate":
				var compute = calcDisplay.join("")
				var answer = eval(compute)
			break;
	}
	}
	
	$("button.number").click(function() {
		var value = $(this).data('value');
		buttonPress(value);
		display();
	});
	
	$("button.expression").click(function() {
		var value = $(this).data('type');
		expressionPress(value);
		display();
	});
	
	
	
	
	
	
	
	
	
	
	/*$(".number#2.number").click(function () {
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
	$(".number#16.number").click(function () {
		buttonPress("*")
		buttonPress(calcDisplay[calcDisplay.length -2])
		$("<p>"+ calcDisplay+"</p>").appendTo('#output')
	});
	
})();*/