  /*
	1.Fix n errors.
	2.Finish all functions
	3.Find error states and make a way to catch them
  */
  var evalObject = {
    initArray: [],
    initString: '',
    currEval: {
      baseNum: 0,
      operator: undefined,
      secondNum: 0
    },
    total: 0
  }

  function processInputArray(array) {
    evalObject.initArray = array;
    evalObject.initString = array.join(' ');
    evalObject.total = evaluateScope(array, 0);
  }

  function evaluateScope(array, total) {
    var i = 0,
      hasNumber = false;

    for (i; i < array.length; i++) {
      var char = array[i];

      if (newScope(char)) {
        evaluateScope(array, total);
        continue;
      }
      if (closedScope(char)) {
        return total;
      }

      if (isNumeric(char) && !hasNumber) {
        evalObject.currEval.baseNum = char;
        hasNumber = true;
        continue;
      } else if (isNumeric(char) && hasNumber) {
        throw new Error();
      }

      evalObject.currEval.operator = getExpressionType(array[i]);
      char = array[++i];
      evalObject.currEval.secondNum = char;

      total += evaluate();
      hasNumber = false;
    }

    return total;
  }

  function newScope(char) {
    return char === '(';
  }

  function closedScope(char) {
    return char === ')';
  }

  function isNumeric(char) {
	var numberCheck = /[0-9]{1,}/
	var regex = new RegExp(numberCheck);
	return numberCheck.test(char);
  }

  function evaluate() {

  }

  function isExpressionChar(char) {
    var i = 0;
    for (i; i < expressionTypes.length; i++) {
      var type = expressionTypes[i];
      if (type.val === char) {
        return true;
      }
    }

    return false;
  }

  function getExpressionType(char) {
    var i = 0;
    for (i; i < expressionTypes.length; i++) {
      var type = expressionTypes[i];
      if (type.val === char) {
        return type;
      }
    }

    throw new Error();
  }
  var expressionTypes = [{
    val: '+',
    eval: function (input1, input2) {
      return input1 + input2;
    }
  }, {
    val: '-',
    eval: function (input1, input2) {
      return input1 - input2;
    }
  }];