$(document).ready(function() {
	var count = 1,
		numberCorrect = 0,
		currentQuestion = 0,
		$answers = $('.answers'),
		$count = $('#count'),
		$end = $('#end'),
		$quiz = $('#quiz'),
		$quizContainer = $('#quiz-container'),
		$restart = $('.restart'),
		$result = $('.result'),
		$resultFinal = $('.result-final'),
		$submit = $('.submit'),
		$totalCorrect = $('#total-correct');

//All questions and answers
	var allQuestions = [
		{
			question: 'Which senshi is awakened before Sailor Moon?',
			choices: ['Sailor Mars', 'Sailor Jupiter', 'Sailor Mercury', 'Sailor Venus'],
			correctAnswer: 3
		},
		{
			question: 'In the anime, what flower does Tuxedo Mask throw as an attack?',
			choices: ['Rose', 'Lily', 'Peony', 'Ranunculus'],
			correctAnswer: 0
		},
		{
			question: 'Which senshi could control time?',
			choices: ['Sailor Saturn', 'Sailor Pluto', 'Sailor Neptune', 'Sailor Moon'],
			correctAnswer: 1
		},
		{
			question: 'What instrument does Sailor Neptune play?',
			choices: ['Piano', 'Guitar', 'Violin', 'Drums'],
			correctAnswer: 2
		},
		{
			question: 'What does Mamoru call Usagi?',
			choices: ['Oden', 'Odango', 'Takoyaki', 'Poteto'],
			correctAnswer: 1
		}
	]

//Keep track of question number
	function trackQuestionProgress() {
		count++;
		$count.text(count);
	}

//Load question and choices
	function loadQuestion() {
		$quiz.append('<p>' + allQuestions[currentQuestion].question + '</p>');
		for (var i = 0; i <= 3; i++) {
			document.getElementById('answers').innerHTML += '<input type="radio" name="choice" value='+i+'>' + allQuestions[currentQuestion].choices[i] + '<br/>';
		}
	}

//Check choice selected
	function checkChoice() {
		var choice = $('input[type="radio"]:checked').val();

		if (choice == undefined) {
			alert('Please select an answer.');
		}
		else if (choice == allQuestions[currentQuestion].correctAnswer) {
			numberCorrect++;
			$totalCorrect.text(numberCorrect);
			$submit.hide();
			$('input[type="radio"]').attr("disabled",true);
			$result.text('Correct, Next Question').show();
		}
		else {
			$submit.hide();
			$('input[type="radio"]').attr("disabled",true);
			$result.text('Incorrect, Next Question').show();
		}
	}

//Restart Properties
	function restart() {
		count = 1;
		currentQuestion = 0;
		numberCorrect = 0;
		$count.text(count);
		$totalCorrect.text(numberCorrect);
		$end.hide();
		$quizContainer.show();
		$resultFinal.hide();
		$submit.show();
		loadQuestion();
	}

//Start Screen
loadQuestion();

//Click on submit button
	$submit.click(function() {
		checkChoice();
	});


//Click on next button
	$result.click(function() {
			$result.hide();
			$submit.show();
		if (currentQuestion <= 3) {
			currentQuestion++;
			loadQuestion();
			trackQuestionProgress();
		}
		else {
			$submit.hide();
			$resultFinal.text('End of Quiz! Click for Results').show();
		};
	});

//Click on final results button
	$resultFinal.click(function() {
		$quizContainer.hide();
		$end.fadeIn('fast');
	});

//Click on restart button
	$restart.click(function() {
		restart();
	});
});