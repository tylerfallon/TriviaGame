$(document).ready(function() {

	var q1 = {
		question: 'test question?',
		choice1: 'testchoice1',
		choice2: 'tc2',
		choice3: 'tc3',
		choice4: 'tc4',
	};

	var q2 = {
		question: 'guag2',
		choice1: 'guagchoice',
		choice2: 'guag',
		choice3: 'guag',
		choice4: 'guag',
	};

$('#question').html(q1.question);
$('#choice1').html(q1.choice1);
$('#choice2').html(q1.choice2);
$('#choice3').html(q1.choice3);
$('#choice4').html(q1.choice4);


});