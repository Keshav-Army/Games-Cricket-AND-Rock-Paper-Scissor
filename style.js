// THIS IS SCORE OBJECT FOR MEJORMENT THE SCORE //Game First
let score = {
    win1: 0,
    lost1: 0,
    tie1: 0,
}

document.querySelector("#win1").innerText = score.win1;
document.querySelector("#lost1").innerText = score.lost1;
document.querySelector("#tie1").innerText = score.tie1;

// THIS IS SCORE2 OBJECT FOR MEJORMENT THE SCORE //Game Second
let score2 = {
    win2: 0,
    lost2: 0,
    tie2: 0,
}

document.querySelector("#win2").innerText = score2.win2;
document.querySelector("#lost2").innerText = score2.lost2;
document.querySelector("#tie2").innerText = score2.tie2;




// THIS IS GLOBAL FUNCTION OF COUMPUTERCHOICE======
let computerChoice1;

let finerlComputerChoice1 = () => {
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
}




// Game Rock Paper Scissor Start============================================================================
// =================ROCK Choice=================
let rock = () => {
    document.querySelector("#userChoice1").innerText = "You have Chosen Rock ✊";

    // Function is Invoke here
    finerlComputerChoice1();


    // ==============================
    if (computerChoice1 === 'Rock') {
        score.tie1++;
        document.querySelector("#finelResult1").innerText = "Match Drow";
        document.querySelector("#tie1").innerText = score.tie1;
    }

    else if (computerChoice1 === 'Paper') {
        score.lost1++;
        document.querySelector("#finelResult1").innerText = "Coumputer Has Won";
        document.querySelector("#lost1").innerText = score.lost1;
    }
    else if (computerChoice1 === 'Scissor') {
        score.win1++;
        document.querySelector("#finelResult1").innerText = "User Won";
        document.querySelector("#win1").innerText = score.win1;
    }
}
// =================PAPER Choice=================
let paper = () => {
    document.querySelector("#userChoice1").innerText = "You have Chosen Paper ✋";

    // Function is Invoke here
    finerlComputerChoice1();

    // ==============================
    if (computerChoice1 === 'Rock') {
        score.win1++;
        document.querySelector("#finelResult1").innerText = "User Won";
        document.querySelector("#win1").innerText = score.win1;
    }

    else if (computerChoice1 === 'Paper') {
        score.tie1++;
        document.querySelector("#finelResult1").innerText = "Match Drow";
        document.querySelector("#tie1").innerText = score.tie1;
    }
    else if (computerChoice1 === 'Scissor') {
        score.lost1++;
        document.querySelector("#finelResult1").innerText = "Coumputer Has Won";
        document.querySelector("#lost1").innerText = score.lost1;
    }
}

// =================SCISSOR Choice=================

let scissor = () => {
    document.querySelector("#userChoice1").innerText = "You have Chosen Scissor ✌️";

    // Function is Invoke here
    finerlComputerChoice1();

    // ==============================
    if (computerChoice1 === 'Rock') {
        score.lost1++;
        document.querySelector("#finelResult1").innerText = "Coumputer Has Won";
        document.querySelector("#lost1").innerText = score.lost1;
    }

    else if (computerChoice1 === 'Paper') {
        score.win1++;
        document.querySelector("#finelResult1").innerText = "User Won";
        document.querySelector("#win1").innerText = score.win1;
    }
    else if (computerChoice1 === 'Scissor') {
        score.tie1++;
        document.querySelector("#finelResult1").innerText = "Match Drow";
        document.querySelector("#tie1").innerText = score.tie1;
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
        score2.tie2++;
        document.querySelector("#finelResult2").innerText = "Match Tie";
        document.querySelector("#tie2").innerText = score2.tie2;
    }

    else if (computerChoice2 === 'Ball') {
        score2.win2++;
        document.querySelector("#finelResult2").innerText = "User Won";
        document.querySelector("#win2").innerText = score2.win2;

    }
    else if (computerChoice2 === 'Stump') {
        score2.lost2++;
        document.querySelector("#finelResult2").innerText = "Coumputer Has Won";
        document.querySelector("#lost2").innerText = score2.lost2;
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
        score2.lost2++;
        document.querySelector("#finelResult2").innerText = "Coumputer Has Won";
        document.querySelector("#lost2").innerText = score2.lost2;
    }

    else if (computerChoice2 === 'Ball') {
        score2.tie2++;
        document.querySelector("#finelResult2").innerText = "Match Tie";
        document.querySelector("#tie2").innerText = score2.tie2;
    }
    else if (computerChoice2 === 'Stump') {
        score2.win2++;
        document.querySelector("#finelResult2").innerText = "User Won";
        document.querySelector("#win2").innerText = score2.win2;
    }
}
// =================BAT Choice=================
let stump = () => {
    document.querySelector("#userChoice2").innerText = "You have Chosen Stump |||";

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
        score2.win2++;
        document.querySelector("#finelResult2").innerText = "User Won";
        document.querySelector("#win2").innerText = score2.win2;
    }

    else if (computerChoice2 === 'Ball') {
        score2.lost2++;
        document.querySelector("#finelResult2").innerText = "Coumputer Has Won";
        document.querySelector("#lost2").innerText = score2.lost2;
    }
    else if (computerChoice2 === 'Stump') {
        score2.tie2++;
        document.querySelector("#finelResult2").innerText = "Match Tie";
        document.querySelector("#tie2").innerText = score2.tie2;
    }
}
// Game Cricket End=========================================================================================


