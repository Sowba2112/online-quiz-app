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
    
    let currentQuestion = 0;
    let score = 0;
    
    function loadQuiz() {
    
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
    }
    
    function nextQuestion(answer) {
    
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
    
        currentQuestion++;
    
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML =
                "<h2>Your Score: " + score + "/" + quizData.length + "</h2>";
        }
    }
    
    loadQuiz();
    