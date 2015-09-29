(function () {
	var calcDisplay = [];


	function display(input) {
		$('<span>' + input + '</span>').appendTo('#output');
	}

	function evaluate() {
		Processor.ProcessInputArray(calcDisplay);
	}

	function buttonPress(input) {
		calcDisplay.push(input);
		console.log(calcDisplay);
	}

	function expressionPress(expression) {
		switch (expression) {
			case "plus":
				buttonPress("+")
				display("+")
				break;

			case "minus":
				buttonPress("-")
				display("-")
				break;

			case "divide":
				buttonPress("/")
				display("/")
				break;

			case "multiply":
				buttonPress("*")
				display("*")
				break;

			case "sqr":
				var findNumber = calcDisplay[calcDisplay.length - 2]
				buttonPress(findNumber)
				break;

			case "evaluate":
				evaluate()
				break;

			case "clear":
				calcDisplay = []
				$('#output').empty();
				break;
		}
	}

	$("button.number").click(function () {
		var value = $(this).data('value');
		buttonPress(value);
		display(value);
	});

	$("button.expression").click(function () {
		var value = $(this).data('type');
		expressionPress(value);
	});

})();