var questions = [
    {
        question: '1. Who invented OOP?',
        choices: ['Andrea Ferro', 'Adele Goldberg', 'Alan Kay', 'Dennis Ritchie'],
        correctAnswer: 2
    },
    {
        question: '2. Which of the following is not OOPS concept in Java?',
        choices: ['Inheritance', 'Encapsulation', 'Polymorphism', 'Compilation'],
        correctAnswer: 3
    },
    {
        question: '3. Which of the following is a type of polymorphism in Java?',
        choices: ['Compile time polymorphism', 'Execution time polymorphism', 'Multiple polymorphism', 'Multilevel polymorphism'],
        correctAnswer: 0
    },
    {
        question: '4. Which concept of Java is a way of converting real world objects in terms of class?',
        choices: ['Inheritance', 'Encapsulation', 'Polymorphism', 'Abstraction'],
        correctAnswer: 3
    },
    {
        question: '5. Method overriding is combination of inheritance and polymorphism?',
        choices: ['True', 'False'],
        correctAnswer: 0
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){
        
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Ohhh noo Dude, Play Again?';
                    quizOver = true;
                 }
                }   
        } else {
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);

    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    document.querySelector('.quizContainer > .result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
    document.querySelector('.quizContainer > .result').style.display = 'block';
}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
}
//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event