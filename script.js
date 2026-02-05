const quizData=[
{question:"What does ECE stand for?",options:["Electrical Engineering","Electronics and Communication Engineering","Electronic Control","Embedded Circuit Eng"],correct:1},
{question:"Which device converts analog to digital?",options:["DAC","ADC","Resistor","Filter"],correct:1},
{question:"Which component stores charge?",options:["Resistor","Capacitor","Inductor","Fuse"],correct:1},
{question:"Which modulation used in FM?",options:["AM","FM","PWM","PCM"],correct:1},
{question:"Which IC is timer?",options:["741","555","8085","8051"],correct:1},
{question:"Which gate needs both inputs 1?",options:["OR","AND","NOT","XOR"],correct:1},
{question:"Which generates waveform?",options:["Oscillator","Switch","Relay","Fuse"],correct:0},
{question:"Wireless communication example?",options:["USB","Ethernet","Bluetooth","HDMI"],correct:2},
{question:"Frequency unit?",options:["Volt","Hertz","Ampere","Ohm"],correct:1},
{question:"Microwave frequency range?",options:["300MHz–300GHz","1Hz–10Hz","20Hz–20kHz","10kHz–20kHz"],correct:0},
{question:"Signal amplifier device?",options:["Transistor","Capacitor","Resistor","Fuse"],correct:0},
{question:"TV broadcasting antenna?",options:["Dipole","Loop","Horn","Patch"],correct:0},
{question:"Low frequency filter?",options:["Low Pass","High Pass","Band Stop","Band Pass"],correct:0},
{question:"Satellite communication uses?",options:["Space waves","Sound waves","Water waves","Magnetic waves"],correct:0},
{question:"CPU full form?",options:["Central Processing Unit","Control Processing Unit","Central Program Unit","Core Power Unit"],correct:0}
];

let current=0;
let score=0;
let timer=10;
let interval;

const question=document.getElementById("question");
const answers=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("nextBtn");
const progress=document.getElementById("progress");
const timerText=document.getElementById("timer");

function startQuiz(){
current=0;
score=0;
loadQuestion();
}

function loadQuestion(){

clearInterval(interval);
timer=10;

progress.innerText=`Question ${current+1}/${quizData.length}`;
timerText.innerText="Time:"+timer;

interval=setInterval(()=>{
timer--;
timerText.innerText="Time:"+timer;
if(timer===0){
clearInterval(interval);
nextBtn.style.display="block";
}
},1000);

let q=quizData[current];
question.innerText=q.question;
answers.innerHTML="";
nextBtn.style.display="none";

q.options.forEach((opt,index)=>{
let btn=document.createElement("button");
btn.innerText=opt;
btn.onclick=()=>selectAnswer(btn,index);
answers.appendChild(btn);
});
}

function selectAnswer(button,index){

clearInterval(interval);

let correct=quizData[current].correct;
if(index===correct){
button.classList.add("correct");
score++;
}else{
button.classList.add("wrong");
}

Array.from(answers.children).forEach(btn=>btn.disabled=true);

nextBtn.style.display="block";
}

nextBtn.onclick=()=>{
current++;
if(current<quizData.length){
loadQuestion();
}else{
showScore();
}
};

function showScore(){
question.innerText=`You scored ${score}/${quizData.length}`;
answers.innerHTML="";
nextBtn.style.display="none";
progress.innerText="Quiz Finished";
timerText.innerText="";
}

startQuiz();
