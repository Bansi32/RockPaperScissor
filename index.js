let userS = 0;
let compS = 0;
const userS_span = document.getElementById("user-score");
const compS_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function getCompChoice() {
    const choices = ["r", "p", "s"];
    const randomnum = Math.floor(Math.random() * 3);
    return choices[randomnum];
}

function convertword(l) {
    if (l === "r") {
        return "Rock";
    }
    else if (l === "p") {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function win(userC, compC) {
    userS++;
    userS_span.innerHTML = userS;
    compS_span.innerHTML = compS;


}
function lose(userC, compC) {
    compS++;
    userS_span.innerHTML = userS;
    compS_span.innerHTML = compS;


}
function draw(userC, compC) {
    userS_span.innerHTML = userS;
    compS_span.innerHTML = compS;
}

function game(userChoice) {
    let computerChoice = getCompChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            if (userS === 20) {
                result.innerHTML = `You Win by ${userS - compS}`;
                userS = 0;
                compS = 0;
            }
            else {
                result.innerHTML = `${convertword(userChoice)} beats ${convertword(computerChoice)}. You win!`;

            }
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            if (compS === 20) {
                result.innerHTML = `Computer Win by ${compS - userS}`;
                userS = 0;
                compS = 0;
            }
            else {
                result.innerHTML = `${convertword(computerChoice)} beats ${convertword(userChoice)}. Comp win!`;

            }
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            if (userS === 20 && compS == 20) {
                result.innerHTML = "It's a draw.";
                userS = 0;
                compS = 0;
            }
            else {
                result.innerHTML = `Both choose ${convertword(userChoice)}. It's a draw.`;
            }
            break;
    }
}

function main() {
    rock.addEventListener('click', function () {
        document.getElementById("h1").style.background = "#19ABA0";
        game("r");
    })
    paper.addEventListener('click', function () {
        document.getElementById("h1").style.background = "#E2122C";
        game("p");
    })
    scissor.addEventListener('click', function () {
        document.getElementById("h1").style.background = "#B3CC33";
        game("s");
    })
}
main();