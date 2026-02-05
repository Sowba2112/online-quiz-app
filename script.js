const quizData = [
{
    question: "What is the capital of India?",
    a: "Chennai",
    b: "Delhi",
    c: "Mumbai",
    d: "Kolkata",
    correct: "b"
},
{
    question: "Which language is used for web styling?",
    a: "HTML",
    b: "Python",
    c: "CSS",
    d: "Java",
    correct: "c"
},
{
    question: "Which company developed Java?",
    a: "Sun Microsystems",
    b: "Google",
    c: "Microsoft",
    d: "Apple",
    correct: "a"
},
{
    question: "What does CPU stand for?",
    a: "Central Processing Unit",
    b: "Computer Personal Unit",
    c: "Central Program Unit",
    d: "Control Processing Unit",
    correct: "a"
}
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {

    // Change theme each question
    document.body.className =
        "theme" + ((currentQuestion % 4) + 1);

    document.getElementById("question").innerText =
        quizData[currentQuestion].question;

    document.getElementById("a").innerText =
        quizData[currentQuestion].a;

    document.getElementById("b").innerText =
        quizData[currentQuestion].b;

    document.getElementById("c").innerText =
        quizData[currentQuestion].c;

    document.getElementById("d").innerText =
        quizData[currentQuestion].d;

    document.getElementById("result").innerText = "";
}

function checkAnswer(answer) {

    if (answer === quizData[currentQuestion].correct) {
        document.getElementById("result").innerText =
            "Correct Answer!";
        score++;
    } else {
        document.getElementById("result").innerText =
            "Wrong Answer!";
    }

    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML =
                "<h2>Your Score: " + score + "/" +
                quizData.length + "</h2>";
        }

    }, 1000);
}

// Start quiz
loadQuiz();
