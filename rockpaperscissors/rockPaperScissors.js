playerOptions = ["rock", "paper", "scissors"];

cpuOptions = ["rock", "paper", "scissors"];

let playerChoice;

function rockChoice() { 
        playerChoice = playerOptions[0];
    }
    function paperChoice() {
        playerChoice = playerOptions[1];
    }
    function scissorsChoice() {
        playerChoice = playerOptions[2];
    }



function defaultAnimation() {
    document.getElementById("rps").style.display = "inline-block";
        document.getElementById("cpuPaper").style.display = "none";
        document.getElementById("cpuScissors").style.display = "none";
        document.getElementById("cpuRock").style.display = "none";
}



function gameStart() {

    //let playerChoice = playerOptions[Math.floor(Math.random() * playerOptions.length)];

    let cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];

    if (playerChoice == cpuChoice) {
        document.getElementById("result").innerHTML = `${playerChoice} matches ${cpuChoice}...draw`;
        console.log(`${playerChoice} matches ${cpuChoice}...draw`);

        if(cpuChoice == "rock") {
            document.getElementById("cpuRock").style.display = "inline-block";
                document.getElementById("cpuPaper").style.display = "none";
                document.getElementById("cpuScissors").style.display = "none";

                document.getElementById("rps").style.display = "none";
                //setInterval(defaultAnimation, 3000);
                
        }
        else if (cpuChoice == "paper") {
            document.getElementById("cpuPaper").style.display = "inline-block";
                document.getElementById("cpuRock").style.display = "none";
                document.getElementById("cpuScissors").style.display = "none";

                document.getElementById("rps").style.display = "none";
                //setInterval(defaultAnimation, 3000);
        }
        else if (cpuChoice == "scissors") {
            document.getElementById("cpuScissors").style.display = "inline-block";
                document.getElementById("cpuPaper").style.display = "none";
                document.getElementById("cpuRock").style.display = "none";
                
                document.getElementById("rps").style.display = "none";
                //setInterval(defaultAnimation, 3000);

        }
    }
    
    else if (playerChoice == "rock" && cpuChoice == "scissors") {
        document.getElementById("result").innerHTML = `${playerChoice} beats ${cpuChoice}...you Win!`;

            document.getElementById("cpuScissors").style.display = "inline-block";
                document.getElementById("cpuPaper").style.display = "none";
                document.getElementById("cpuRock").style.display = "none";
                
                document.getElementById("rps").style.display = "none";
                //setTimeout(defaultAnimation, 3000);

        console.log(`${playerChoice} beats ${cpuChoice}...you Win!`);
    }
    else if (playerChoice == "paper" && cpuChoice == "rock") {
        document.getElementById("result").innerHTML = `${playerChoice} beats ${cpuChoice}...you Win!`;

            document.getElementById("cpuRock").style.display = "inline-block";
                document.getElementById("cpuPaper").style.display = "none";
                document.getElementById("cpuScissors").style.display = "none";

                document.getElementById("rps").style.display = "none";
                //setTimeout(defaultAnimation, 3000);

        console.log(`${playerChoice} beats ${cpuChoice}...you Win!`);
    }
    else if (playerChoice == "scissors" && cpuChoice == "paper") {
        document.getElementById("result").innerHTML = `${playerChoice} beats ${cpuChoice}...you Win!`;

            document.getElementById("cpuPaper").style.display = "inline-block";
                document.getElementById("cpuRock").style.display = "none";
                document.getElementById("cpuScissors").style.display = "none";

                document.getElementById("rps").style.display = "none";
                //setTimeout(defaultAnimation, 3000);

        console.log(`${playerChoice} beats ${cpuChoice}...you Win!`);
    }


    else if (cpuChoice == "rock" && playerChoice == "scissors"){
        document.getElementById("result").innerHTML = `${cpuChoice} beats ${playerChoice}...you lose`;

        document.getElementById("cpuRock").style.display = "inline-block";
            document.getElementById("cpuPaper").style.display = "none";
            document.getElementById("cpuScissors").style.display = "none";

        document.getElementById("rps").style.display = "none";
        //setTimeout(defaultAnimation, 3000);

        console.log(`${cpuChoice} beats ${playerChoice}...you lose`);
    }
    else if (cpuChoice == "paper" && playerChoice == "rock") {
        document.getElementById("result").innerHTML = `${cpuChoice} beats ${playerChoice}...you lose`;

        document.getElementById("cpuPaper").style.display = "inline-block";
            document.getElementById("cpuRock").style.display = "none";
            document.getElementById("cpuScissors").style.display = "none";

        document.getElementById("rps").style.display = "none";
        //setTimeout(defaultAnimation, 3000);

        console.log(`${cpuChoice} beats ${playerChoice}...you lose`);
    }
     else if (cpuChoice == "scissors" && playerChoice == "paper") {
        document.getElementById("result").innerHTML = `${cpuChoice} beats ${playerChoice}...you lose`;

        document.getElementById("cpuScissors").style.display = "inline-block";
            document.getElementById("cpuPaper").style.display = "none";
            document.getElementById("cpuRock").style.display = "none";

        document.getElementById("rps").style.display = "none";
        //setTimeout(defaultAnimation, 3000);

        console.log(`${cpuChoice} beats ${playerChoice}...you lose`);
    }
}

console.log(gameStart());