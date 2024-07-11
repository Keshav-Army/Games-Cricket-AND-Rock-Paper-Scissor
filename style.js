// Game Rock Paper Scissor Start============================================================================
// =================ROCK Choice=================
let rock = () => {
    document.querySelector("#userChoice1").innerText = "You have Chosen Rock ✊";

    let computerChoice1;
    randomNumver = Math.random() * 3;
    if (randomNumver > 0 && randomNumver <= 1) {
        computerChoice1 = "Rock";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Rock ✊';
    }
    else if (randomNumver > 1 && randomNumver <= 2) {
        computerChoice1 = "Paper";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Paper ✋';
    }
    else if (randomNumver > 2 && randomNumver <= 3) {
        computerChoice1 = "Scissor";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Scissor ✌️';
    }
    // ==============================
    if (computerChoice1 === 'Rock') {
        document.querySelector("#finelResult1").innerText = "Match Drow";
    }

    else if (computerChoice1 === 'Paper') {
        document.querySelector("#finelResult1").innerText = "Coumputer Has Won";
    }
    else if (computerChoice1 === 'Scissor') {
        document.querySelector("#finelResult1").innerText = "User Won";
    }
}
// =================PAPER Choice=================
let paper = () => {
    document.querySelector("#userChoice1").innerText = "You have Chosen Paper ✋";

    let computerChoice1;
    randomNumver = Math.random() * 3;
    if (randomNumver > 0 && randomNumver <= 1) {
        computerChoice1 = "Rock";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Rock ✊';
    }
    else if (randomNumver > 1 && randomNumver <= 2) {
        computerChoice1 = "Paper";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Paper ✋';
    }
    else if (randomNumver > 2 && randomNumver <= 3) {
        computerChoice1 = "Scissor";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Scissor ✌️';
    }
    // ==============================
    if (computerChoice1 === 'Rock') {
        document.querySelector("#finelResult1").innerText = "User Won";
    }

    else if (computerChoice1 === 'Paper') {
        document.querySelector("#finelResult1").innerText = "Match Drow";
    }
    else if (computerChoice1 === 'Scissor') {
        document.querySelector("#finelResult1").innerText = "Coumputer Has Won";
    }
}

// =================SCISSOR Choice=================

let scissor = () => {
    document.querySelector("#userChoice1").innerText = "You have Chosen Scissor ✌️";

    let computerChoice1;
    randomNumver = Math.random() * 3;
    if (randomNumver > 0 && randomNumver <= 1) {
        computerChoice1 = "Rock";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Rock ✊';
    }
    else if (randomNumver > 1 && randomNumver <= 2) {
        computerChoice1 = "Paper";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Paper ✋';
    }
    else if (randomNumver > 2 && randomNumver <= 3) {
        computerChoice1 = "Scissor";
        document.querySelector("#computerChoice1").innerText = 'Computer choice is Scissor ✌️';
    }
    // ==============================
    if (computerChoice1 === 'Rock') {
        document.querySelector("#finelResult1").innerText = "Coumputer Has Won";
    }

    else if (computerChoice1 === 'Paper') {
        document.querySelector("#finelResult1").innerText = "User Won";
    }
    else if (computerChoice1 === 'Scissor') {
        document.querySelector("#finelResult1").innerText = "Match Drow";
    }
}
// Game Rock Paper Scissor End=========================================================================================


// Game Cricket Start=========================================================================================
// =================BAT Choice=================
let bat = () => {
    document.querySelector("#userChoice2").innerText = "You have Chosen Bat 🏏";

    let computerChoice2;
    randomNumver = Math.random() * 3;
    if (randomNumver > 0 && randomNumver <= 1) {
        computerChoice2 = "Bat";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Bat 🏏';
    }
    else if (randomNumver > 1 && randomNumver <= 2) {
        computerChoice2 = "Ball";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Ball ⚾';
    }
    else if (randomNumver > 2 && randomNumver <= 3) {
        computerChoice2 = "Stump";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Stump |||';
    }
    // ==============================
    if (computerChoice2 === 'Bat') {
        document.querySelector("#finelResult2").innerText = "Match Tie";
    }

    else if (computerChoice2 === 'Ball') {
        document.querySelector("#finelResult2").innerText = "User Won";
    }
    else if (computerChoice2 === 'Stump') {
        document.querySelector("#finelResult2").innerText = "Coumputer Has Won";
    }
}
// =================BALL Choice=================
let ball = () => {
    document.querySelector("#userChoice2").innerText = "You have Chosen Ball ⚾";

    let computerChoice2;
    randomNumver = Math.random() * 3;
    if (randomNumver > 0 && randomNumver <= 1) {
        computerChoice2 = "Bat";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Bat 🏏';
    }
    else if (randomNumver > 1 && randomNumver <= 2) {
        computerChoice2 = "Ball";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Ball ⚾';
    }
    else if (randomNumver > 2 && randomNumver <= 3) {
        computerChoice2 = "Stump";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Stump |||';
    }
    // ==============================
    if (computerChoice2 === 'Bat') {
        document.querySelector("#finelResult2").innerText = "Coumputer Has Won";
    }

    else if (computerChoice2 === 'Ball') {
        document.querySelector("#finelResult2").innerText = "Match Tie";
    }
    else if (computerChoice2 === 'Stump') {
        document.querySelector("#finelResult2").innerText = "User Won";
    }
}
// =================BAT Choice=================
let stump = () => {
    document.querySelector("#userChoice2").innerText = "You have Chosen Bat |||";

    let computerChoice2;
    randomNumver = Math.random() * 3;
    if (randomNumver > 0 && randomNumver <= 1) {
        computerChoice2 = "Bat";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Bat 🏏';
    }
    else if (randomNumver > 1 && randomNumver <= 2) {
        computerChoice2 = "Ball";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Ball ⚾';
    }
    else if (randomNumver > 2 && randomNumver <= 3) {
        computerChoice2 = "Stump";
        document.querySelector("#computerChoice2").innerText = 'Computer choice is Stump |||';
    }
    // ==============================
    if (computerChoice2 === 'Bat') {
        document.querySelector("#finelResult2").innerText = "User Won";
    }

    else if (computerChoice2 === 'Ball') {
        document.querySelector("#finelResult2").innerText = "Coumputer Has Won";
    }
    else if (computerChoice2 === 'Stump') {
        document.querySelector("#finelResult2").innerText = "Match Tie";
    }
}
// Game Cricket End=========================================================================================


