let questionDisplay = document.getElementById('question');
let choicesList = Array.from(document.getElementsByClassName('choices_text'));
let progressBarFull = document.getElementById('progressBarFull');
let questionDisplays = document.getElementById('questionDisplays');
let scoredisplay = document.getElementById('scoredisplay');


let presentQuestion = {};
let questionMarker = 0;
let score = 0;
let acceptingAnswer = false;
let questionList = [];


// CONST 
const MAX_QUESTION = 3;
const CORRECT_REWARD = 10;

let questionBundle = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        option1: "<script>",
        option2: "<javascript>",
        option3: "<js>",
        option4: "<scripting>",
        answer: 1,

    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        option1: "<script href='xxx.js'>",
        option2: "<script name='xxx.js'>",
        option3: "<script src='xxx.js'>",
        option4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        option1: "msgBox('Hello World');",
        option2: "alertBox('Hello World');",
        option3: "msg('Hello World');",
        option4: "alert('Hello World');",
        answer: 4,
    },
];
SART_GAME = () => {
    presentQuestion = {};
    questionMarker = 0;
    score = 0
    acceptingAnswer = true;
    questionList = [...questionBundle]
    pickpUp_NewQuestion()
}



pickpUp_NewQuestion = () => {
    if (questionList.length === 0 || questionMarker.lenght <= MAX_QUESTION) {
        location.assign("end.html");
        localStorage.setItem("recentScore", score)
    }

    questionMarker++;

    const questionIndex = Math.floor(Math.random() * questionList.length);
    presentQuestion = questionList[questionIndex];
    questionDisplay.innerText = presentQuestion.question;

    questionDisplays.innerText = `${questionMarker}/${MAX_QUESTION}`
    if (questionMarker < 3) {
        progressBarFull.style.borderRadius = "50px 0 0 50px "
    }
    else {
        progressBarFull.style.borderRadius = "50px"

    }
    progressBarFull.style.width = `${(questionMarker / MAX_QUESTION) * 100}%`

    choicesList.forEach((choice) => {
        const number = choice.dataset['number'];

        choice.innerText = presentQuestion['option' + number];
    });

    questionList.splice(questionIndex, 1);
    acceptingAnswer = true;

};

choicesList.forEach((choice) => {
    choice.addEventListener('click', (element) => {
        const selectedOption = element.target;
        const selectedAnswer = selectedOption.dataset['number'];
        let classToApply;
        if (selectedAnswer == presentQuestion.answer) {
            classToApply = "correct"
            console.log('wow')
        } else {
            classToApply = "incorrect"
    
        }
        selectedOption.classList.add(classToApply)
        if (classToApply == "correct") {
            scoreIncrement(CORRECT_REWARD);
            console.log("done mnm,nmk")
        }


        setTimeout(() => {
            selectedOption.classList.remove(classToApply)
            pickpUp_NewQuestion()
        }, 1000);



    });
});
scoreIncrement = (num) => {
    score += num;
    scoredisplay.innerText = score;
};

SART_GAME()