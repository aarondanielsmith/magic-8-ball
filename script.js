$(document).ready(function(){

// ---------- VARIABLES ----------

var magic8Ball = {};
magic8Ball.listOfAnswers = ["Yes", "No", "It is certain", "It is decidedly so", "Without a doubt, Yes", "Yes - definitely", "You may rely on it", "Most likely", "Outlook good, Yes", "Signs point to yes", "Reply hazy", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
magic8Ball.shake = function (question) 
{
	// generate a random index number for selecting the answer
	var answerIndex = Math.floor(Math.random() * this.listOfAnswers.length);
	// select the answer from the 8-ball's listOfAnswers array
	var answer = this.listOfAnswers[answerIndex];
	// shake it! shake, shake it! shake it like a polaroid picture!
	$("#8ball").effect("shake");
	// show the answer-side image
	$("#8ball").attr("src", imageAnswerSide);
	// display the answer on the 8-ball
	$("#answer").text(answer);
	// fade in the new answer
	$("#answer").fadeIn(4000);

};
var image8Side = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png";
var imageAnswerSide = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png";

// ---------- ACTION CODE(?) ----------

$("#answer").hide();

// ---------- FUNCTIONS ----------

var askQuestion = function() {
	// hide the last answer
	$("#answer").hide();
	// show the 8-side image
	$("#8ball").attr("src", image8Side);
	// "wait half a second!" before asking the question
	setTimeout( function() {
		// prompt the user for a question
		var question = prompt("What yes-or-no question would you like to ask?");
		// shake the 8-ball and output the result to the #answer
		magic8Ball.shake(question);
	}, 500);
};

// ---------- EVENT LISTENERS ----------

$("#questionButton").click(askQuestion);

});