$(document).ready(function() {

  var q1 = {
    question: 'Which of the following is not an erector spinae muscle?',
    choice1: 'Iliocostalis',
    choice2: 'Longissiumus',
    choice3: 'Spinalis',
    choice4: 'Multifidus',
    answer: 'Multifidus',
  };
  var q2 = {
    question: 'Which of these is innervated by the median nerve?',
    choice1: 'Latissimus Dorsi',
    choice2: 'Trapezius',
    choice3: 'Flexor Carpi Radialis',
    choice4: 'Flexor Carpi Ulnaris',
    answer: 'Flexor Carpi Radialis',
  };
  var q3 = {
    question: 'Which of these is NOT a muscle of the back?',
    choice1: 'Iliocostalis',
    choice2: 'Supinator',
    choice3: 'Teres Major',
    choice4: 'Serratus Anterior',
    answer: 'Supinator',
  };
  var q4 = {
    question: 'Which nerve is not involved in the brachial plexus?',
    choice1: 'Median Nerve',
    choice2: 'Musculocutaneous Nerve',
    choice3: 'Radial Nerve', 
    choice4: 'Obturator Nerve',
    answer: 'Obturator Nerve',
  };
  var q5 = {
    question: 'Which of the following is a muscle of the neck?',
    choice1: 'Flexor Carpi Radialis',
    choice2: 'Extensor Carpi Ulnaris',
    choice3: 'Obliquis Capitus Superior Major',
    choice4: 'Platysma',
    answer: 'Obliquis Capitus Superior Major',
  };
  var q6 = {
    question: 'Which of the following is a muscle of facial expression?',
    choice1: 'Gluteus Medius',
    choice2: 'Mentalis',
    choice3: 'Superspinatus',
    choice4: 'Splenius capitus',
    answer: 'Mentalis',
  };
  var q7 = {
    question: 'Which of the following is involved with movement of the eye?',
    choice1: 'Stylohyoid',
    choice2: 'Mylohyoid',
    choice3: 'Superior Oblique',
    choice4: 'Temporalis',
    answer: 'Superior Oblique',
  };
  var q8 = {
    question: 'Which of the following is innervated by the trochlear nerve?',
    choice1: 'Superior Oblique',
    choice2: 'Lateral Rectus', 
    choice3: 'Superior Rectus',
    choice4: 'Inferior Rectus',
    answer: 'Superior Oblique',
  };
  var q9 = {
    question: 'Which muscle is located in the foot?',
    choice1: 'Flexor Carpi Radialis',
    choice2: 'Flexor Carpi Ulnaris',
    choice3: 'Flexor Hallucis Longus',
    choice4: 'Flexor Digitorum Superficialis',
    answer: 'Flexor Hallucis Longus',
  };
  var q10 = {
    question: 'Which muscle of the eye cause can cause constriction?',
    choice1: 'Superior Oblique',
    choice2: 'Spincter Pupillae',
    choice3: 'Superior Rectus',
    choice4: 'Inferior Oblique',
    answer: 'Sphincter Pupillae',
  };

  var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
  var numberCorrect = 0;
  var numberWrong = 0;
  var outOfTime = 0;
  var questionNum = 0;
  var time = 30;

  function onwards() {
    time = 30;
    countdown = setInterval(decrease, 1000);
    $(".timer").html("Time Left: " + time);
    $(".question").html(questions[questionNum].question);
    $(".choice1").html(questions[questionNum].choice1);
    $(".choice2").html(questions[questionNum].choice2);
    $(".choice3").html(questions[questionNum].choice3);
    $(".choice4").html(questions[questionNum].choice4);
  };

  function decrease() {
    time--
    $(".timer").html("Time Left: " + time)
    if (time == 0){
      timeUp();
      stop();
      $(".option").empty();
    }
  };

  function stop() {
    clearInterval(countdown);
    questionNum++;
    if (questionNum == questions.length) {
      setTimeout(endGame, 3000);
    }
    else {
      setTimeout(onwards, 3000);
    };
  };

  function correctAn() {
    $(".question").html("Correct!");
  };

  function wrongAn() {
    numberWrong++;
    $(".question").html("Incorrect!<br>The correct answer is: " + questions[questionNum].answer);
  };

  function timeUp() {
    outOfTime++;
    $(".question").html("Out of time!<br>The correct answer is: " + questions[questionNum].answer);
  };

  function endGame() {
    $(".question").html("Total Correct: " + numberCorrect + "<br>Total Wrong: " + numberWrong + "<br>Total Unanswered: " + outOfTime);
    $("timer").empty();
    $(".option").empty();
    questionNum = 0;
    numberCorrect = 0;
    numberWrong = 0;
    outOfTime = 0;
    $("button").show();
    $("timer").hide();
  };

  $(".startUp").click(function(){
    questions;
    onwards();
    $("button").hide();
  }) 

  $(".option").click(function() {
      if ($(this).text() == questions[questionNum].answer) {
        numberCorrect++;
        correctAn();
        stop();
      }
      else {
        wrongAn();
        stop();
      };
      $(".option").empty();
  });
});