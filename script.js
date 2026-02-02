function checkAnswer(answer) {
    if (answer === "Delhi") {
        document.getElementById("result").innerText = "Correct Answer!";
    } else {
        document.getElementById("result").innerText = "Wrong Answer!";
    }
}
