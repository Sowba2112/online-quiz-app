const quizData = [
{
    question:"Capital of India?",
    a:"Chennai", b:"Delhi", c:"Mumbai", d:"Kolkata",
    correct:"b"
},
{
    question: "Which language is used for web styling?",
    a: "HTML", b: "Python", c: "CSS", d: "Java",
    correct: "c"
},
{
    question: "Which company developed Java?",
    a: "Sun Microsystems", b: "Google", c: "Microsoft", d: "Apple",
    correct: "a"
},
{
    question:"Styling language?",
    a:"HTML", b:"Java", c:"CSS", d:"Python",
    correct:"c"
},

{
    question:"Who is known as Father of Nation (India)?",
    a:"Nehru",
    b:"Gandhi",
    c:"Subhash Chandra Bose",
    d:"Tagore",
    correct:"b"
},

{
    question:"Which planet is known as Red Planet?",
    a:"Earth",
    b:"Mars",
    c:"Jupiter",
    d:"Venus",
    correct:"b"
},

{
    question:"Largest ocean in world?",
    a:"Indian Ocean",
    b:"Atlantic Ocean",
    c:"Pacific Ocean",
    d:"Arctic Ocean",
    correct:"c"
},

{
    question:"Which is national animal of India?",
    a:"Lion",
    b:"Elephant",
    c:"Tiger",
    d:"Leopard",
    correct:"c"
},

{
    question:"Which gas do humans breathe in?",
    a:"Oxygen",
    b:"Hydrogen",
    c:"Carbon",
    d:"Nitrogen",
    correct:"a"
},

{
    question:"Which is fastest land animal?",
    a:"Tiger",
    b:"Horse",
    c:"Cheetah",
    d:"Dog",
    correct:"c"
},

{
    question:"How many continents are there?",
    a:"5",
    b:"6",
    c:"7",
    d:"8",
    correct:"c"
},

{
    question:"Which is smallest prime number?",
    a:"0",
    b:"1",
    c:"2",
    d:"3",
    correct:"c"
},

{
    question:"Which festival is called Festival of Lights?",
    a:"Holi",
    b:"Diwali",
    c:"Eid",
    d:"Pongal",
    correct:"b"
}
];

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){

    document.getElementById("nextBtn").style.display="none";

    const data=quizData[currentQuiz];

    document.getElementById("question").innerText=data.question;
    document.getElementById("a").innerText=data.a;
    document.getElementById("b").innerText=data.b;
    document.getElementById("c").innerText=data.c;
    document.getElementById("d").innerText=data.d;

    const buttons=document.querySelectorAll(".option");
    buttons.forEach(btn=>{
        btn.disabled=false;
        btn.classList.remove("correct","wrong");
    });
}

function selectAnswer(button,answer){

    const buttons=document.querySelectorAll(".option");
    buttons.forEach(btn=>btn.disabled=true);

    if(answer===quizData[currentQuiz].correct){
        button.classList.add("correct");
        score++;
    }else{
        button.classList.add("wrong");
    }

    document.getElementById("nextBtn").style.display="block";
}

function nextQuestion(){
    currentQuiz++;

    if(currentQuiz<quizData.length){
        loadQuiz();
    }else{
        document.querySelector(".quiz-container").innerHTML=
        "<h2>Your Score: "+score+"/"+quizData.length+"</h2>";
    }
}
