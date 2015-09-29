(function () {
	var calcDisplay = [];


	function display(input) {
		$('<span>' + input + '</span>').appendTo('#output');
	}

	function evaluate() {
		var answer = Processor.ProcessInputArray(calcDisplay);
		display(answer);
	}

	function buttonPress(input) {
		calcDisplay.push(input);
		display(input)
		console.log(calcDisplay);
	}

	function expressionPress(expression) {
		switch (expression) {
			case "plus":
				buttonPress("+")
				break;

			case "minus":
				buttonPress("-")
				break;

			case "divide":
				buttonPress("/")
				break;

			case "multiply":
				buttonPress("*")
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
				
			case "(":
				buttonPress("(")
				break;
				
			case ")":
				buttonPress(")")
				break;
		}
	}

	$("button.number").click(function () {
		var value = $(this).data('value');
		buttonPress(value);
	});

	$("button.expression").click(function () {
		var value = $(this).data('type');
		expressionPress(value);
	});

})();