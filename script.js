const quizData = [
{
    question:"Capital of India?",
    a:"Chennai", b:"Delhi", c:"Mumbai", d:"Kolkata",
    correct:"b"
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
{
    question:"Styling language?",
    a:"HTML", b:"Java", c:"CSS", d:"Python",
    correct:"c"
}
];

let currentQuestion=0;
let score=0;
let selected=null;

function loadQuiz(){

document.getElementById("question").innerText=
quizData[currentQuestion].question;

document.getElementById("a").innerText=quizData[currentQuestion].a;
document.getElementById("b").innerText=quizData[currentQuestion].b;
document.getElementById("c").innerText=quizData[currentQuestion].c;
document.getElementById("d").innerText=quizData[currentQuestion].d;

document.getElementById("result").innerText="";
document.getElementById("nextBtn").style.display="none";

document.querySelectorAll(".option").forEach(btn=>{
btn.classList.remove("correct","wrong");
});
}

function selectAnswer(ans,btn){

selected=ans;
let correct=quizData[currentQuestion].correct;

if(ans===correct){
btn.classList.add("correct");
score++;
document.getElementById("result").innerText="Correct!";
}else{
btn.classList.add("wrong");
document.getElementById("result").innerText="Wrong!";
}

document.getElementById("nextBtn").style.display="block";
}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<quizData.length){
loadQuiz();
}else{
document.getElementById("quiz").innerHTML=
"<h2>Your Score "+score+"/"+quizData.length+"</h2>";
}
}

loadQuiz();
