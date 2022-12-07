/**
 * Once user clicks submits, check each answer to see if its correct
 * if so add 1 to a score variable
 */
 "use strict";
 const $ = selector => document.querySelector(selector);

 let score = 0;
 let isValid = 0
 let backgroundSound = new Audio('gameSong.wav');

 const getScore = () => {
    if(document.getElementById('1b').checked) {
        score++;
    }
    if (document.getElementById('2c').checked){
        score++
    }
    if (document.getElementById('3c').checked){
        score++
    }
    if (document.getElementById('4d').checked){
        score++
    }
    if (document.getElementById('5a').checked){
        score++
    }
    if (document.getElementById('6b').checked){
        score++
    }
    if (document.getElementById('7c').checked){
        score++
    }
    if (document.getElementById('8a').checked){
        score++
    }
    if (document.getElementById('9b').checked){
        score++
    }
    if (document.getElementById('10a').checked){
        score++
    }

 }

 const resultImage = () => {
    if (score >= 7 && isValid == 10) {
        document.getElementById("result").src="awesome.png";
        //$("#result").src = "awesome";
    } else if (score < 7 && isValid == 10) {
        document.getElementById("result").src="nicetry.png";
        //$("#result").src = "nicetry";
    }
 }

const validateInput = () => {
    
    const q1 = document.getElementsByName("q1");
    for (let i = 0; i < q1.length; i++) {
        if (q1[i].checked == true) {
            isValid++
        }
    }
    const q2 = document.getElementsByName("q2");
    for (let i = 0; i < q2.length; i++) {
        if (q2[i].checked == true) {
            isValid++
        }
    }
    const q3 = document.getElementsByName("q3");
    for (let i = 0; i < q3.length; i++) {
        if (q3[i].checked == true) {
            isValid++
        }
    }
    const q4 = document.getElementsByName("q4");
    for (let i = 0; i < q4.length; i++) {
        if (q4[i].checked == true) {
            isValid++

        }
    }
    const q5 = document.getElementsByName("q5");
    for (let i = 0; i < q5.length; i++) {
        if (q5[i].checked == true) {
            isValid++
        }
    }
    const q6 = document.getElementsByName("q6");
    for (let i = 0; i < q6.length; i++) {
        if (q6[i].checked == true) {
            isValid++
        }
    }
    const q7 = document.getElementsByName("q7");
    for (let i = 0; i < q7.length; i++) {
        if (q7[i].checked == true) {
            isValid++
        }
    }
    const q8 = document.getElementsByName("q8");
    for (let i = 0; i < q8.length; i++) {
        if (q8[i].checked == true) {
            isValid++
        }
    }
    const q9 = document.getElementsByName("q9");
    for (let i = 0; i < q9.length; i++) {
        if (q9[i].checked == true) {
            isValid++
        }
    }
    const q10 = document.getElementsByName("q10");
    for (let i = 0; i < q10.length; i++) {
        if (q10[i].checked == true) {
            isValid++
        }
    }
    if(isValid == 10) {
            $("#score").textContent = score + "/10";
            document.getElementById("again").onclick = function () {
                location.href = "home.html";
            };
    }
    else if (isValid != 10) {
        alert("You must answer all questions");
        document.getElementById("again").onclick = function () {
            alert("Finish the quiz before restarting");
        };
        isValid = 0;
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", getScore);
    $("#submit").addEventListener("click", validateInput);
    $("#submit").addEventListener("click", resultImage);
    document.body.addEventListener("mouseover", function () {
        backgroundSound.play();
    })
});
