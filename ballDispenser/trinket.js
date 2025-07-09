let bouncyBallGrey = 1;
// document.getElementById("grey-counter").innerHTML = bouncyBallGrey;
let bouncyBallBlue = 1;
// document.getElementById("blue-counter").innerHTML = bouncyBallBlue;
let bouncyBallGreen = 1;
// document.getElementById("green-counter").innerHTML = bouncyBallGreen;
let bouncyBallPurple = 1;
// document.getElementById("purple-counter").innerHTML = bouncyBallPurple;
let bouncyBallGold = 1;
// document.getElementById("gold-counter").innerHTML = bouncyBallGold;

 function findBall() {
    let selectedBall = Math.round(Math.random() * (100 - 1) + 1);
        console.log(selectedBall);

     if (selectedBall >= 1 && selectedBall <= 50) {
        document.getElementById("ball-grey").style.display = "block";
            document.getElementById("ball-blue").style.display = "none"; 
            document.getElementById("ball-green").style.display = "none";
            document.getElementById("ball-purple").style.display = "none";
            document.getElementById("ball-gold").style.display = "none";

        document.getElementById("ball-shadow1").style.display = "block";
            document.getElementById("ball-shadow2").style.display = "none";
            document.getElementById("ball-shadow3").style.display = "none";
            document.getElementById("ball-shadow4").style.display = "none";
            document.getElementById("ball-shadow5").style.display = "none";

            document.getElementById("grey-counter").innerHTML = bouncyBallGrey++;

            console.log("grey");
     }
     else if (selectedBall >= 51 && selectedBall<= 75) {
        document.getElementById("ball-blue").style.display = "block"; 
            document.getElementById("ball-grey").style.display = "none";
            document.getElementById("ball-green").style.display = "none";
            document.getElementById("ball-purple").style.display = "none";
            document.getElementById("ball-gold").style.display = "none";

        document.getElementById("ball-shadow2").style.display = "block";
            document.getElementById("ball-shadow1").style.display = "none";
            document.getElementById("ball-shadow3").style.display = "none";
            document.getElementById("ball-shadow4").style.display = "none";
            document.getElementById("ball-shadow5").style.display = "none";

            document.getElementById("blue-counter").innerHTML = bouncyBallBlue++;

            console.log("blue");
     }
    else if (selectedBall >= 81 && selectedBall <= 98) {
        document.getElementById("ball-green").style.display = "block";
            document.getElementById("ball-grey").style.display = "none";
            document.getElementById("ball-blue").style.display = "none";
            document.getElementById("ball-purple").style.display = "none";
            document.getElementById("ball-gold").style.display = "none";

        document.getElementById("ball-shadow3").style.display = "block";
            document.getElementById("ball-shadow1").style.display = "none";
            document.getElementById("ball-shadow2").style.display = "none";
            document.getElementById("ball-shadow4").style.display = "none";
            document.getElementById("ball-shadow5").style.display = "none";
        
            document.getElementById("green-counter").innerHTML = bouncyBallGreen++;

            console.log("green");
    }
    else if (selectedBall >= 76 && selectedBall <= 80) {
        document.getElementById("ball-purple").style.display = "block";
            document.getElementById("ball-grey").style.display = "none";
            document.getElementById("ball-blue").style.display = "none"; 
            document.getElementById("ball-green").style.display = "none";
            document.getElementById("ball-gold").style.display = "none";

        document.getElementById("ball-shadow4").style.display = "block";
            document.getElementById("ball-shadow1").style.display = "none";
            document.getElementById("ball-shadow2").style.display = "none";
            document.getElementById("ball-shadow3").style.display = "none";
            document.getElementById("ball-shadow5").style.display = "none";
        
            document.getElementById("purple-counter").innerHTML = bouncyBallPurple++;

            console.log("purple");
    }
    else {
        document.getElementById("ball-gold").style.display = "block";
            document.getElementById("ball-grey").style.display = "none";
            document.getElementById("ball-blue").style.display = "none"; 
            document.getElementById("ball-green").style.display = "none";
            document.getElementById("ball-purple").style.display = "none";

        document.getElementById("ball-shadow5").style.display = "block";
            document.getElementById("ball-shadow1").style.display = "none";
            document.getElementById("ball-shadow2").style.display = "none";
            document.getElementById("ball-shadow3").style.display = "none";
            document.getElementById("ball-shadow4").style.display = "none";

            document.getElementById("gold-counter").innerHTML = bouncyBallGold++;

            console.log("gold");
    }
}