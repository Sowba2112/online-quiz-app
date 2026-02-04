function checkAnswer(answer) {
    if (answer === "Delhi") {
        document.getElementById("result").innerText = "Correct Answer!";
    } else {
        document.getElementById("result").innerText = "Wrong Answer!";
    }
}
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
    },
    {
        question: "Which tag is used for JavaScript?",
        a: "<js>",
        b: "<javascript>",
        c: "<script>",
        d: "<code>",
        correct: "c"
    },
    {
        question: "Which symbol is used for comments in CSS?",
        a: "//",
        b: "#",
        c: "/* */",
        d: "<!-- -->",
        correct: "c"
    }
    ];
    