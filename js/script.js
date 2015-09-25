var calcDisplay = [];
var space = ""
function buttonPress(input) {
	calcDisplay.push(input);
	calcDisplay.push(space)
	console.log(calcDisplay);
}
$('.button1').click(function() {
	buttonPress(1);
});
$('.button2').click(function() {
	buttonPress(2);
});
$('.button3').click(function() {
	buttonPress(3);
});
$('.button4').click(function() {
	buttonPress(4);
});
$('.button5').click(function() {
	buttonPress(5);
});
$('.button6').click(function() {
	buttonPress(6);
});
$('.button7').click(function() {
	buttonPress(7);
});
$('.button8').click(function() {
	buttonPress(8);
});
$('.button9').click(function() {
	buttonPress(9);
});
$("h4").append(calcDisplay);