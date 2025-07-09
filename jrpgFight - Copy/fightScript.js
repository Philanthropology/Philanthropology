// Player + Enemy objects
let player = {
    name: "player",
    hp: 500,
    lvl: 1,
    xp: 0,
}

// Enemies - regular
let bandit = {
    name: "Bandit",
    hp: 100,
    lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xpValue: 50,
}

let spider = {
    name: "Spider",
    hp: 120,
    lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xpValue: 60,
}

let drowner = {
    name: "Drowner",
    hp: 150,
    lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xpValue: 75,
}

let wyvern = {
    name: "Wyvern",
    hp: 180,
    lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xpValue: 100,
}

let siren = {
    name: "Siren",
    hp: 200,
    lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xpValue: 120,
}

let enemy = [bandit, spider, drowner, wyvern, siren];
let selectedEnemy;

// Variables
    let playerAttackDamage;
    let enemyAttackDamage;
    let enemyBlockChoice;

    let playerBlock = false;
    let enemyBlock = false;

    let hasRunOnce = false;
    let hasPlayerAttacked = false;

    let playerTurn;
    let enemyTurn;

    let enemyIsDead;

    let playerLvl2 = false;
    let playerLvl3 = false;
    let playerLvl4 = false;
    let playerLvl5 = false;

    let maxRollPlayer = 100;
    let maxRollEnemy = 30;
    let scaledMaxRoll;

    let scaledHp;
    let scaledXp;

    let enemySelector;

    // Select random text outcome for enemy spawn

    // let textSelector;

    // let text1;
    // let text2;
    // let text3;

    

// Block functions
    function playerBlockTrue()  { playerBlock = true; }
    function playerBlockFalse() { playerBlock = false; }
    function playerAttackTurn() { playerAttackDamage = Math.floor(Math.random() * (maxRollPlayer - 5) + 5); }
    function enemyAttackTurn()  { enemyAttackDamage = Math.floor(Math.random() * (scaledMaxRoll - 5) + 5); }


// Create new enemy
function generateEnemy() {
    //selectedEnemy = enemy[ Math.floor(Math.random() * (5 - 0) + 0) ];

    enemySelector = Math.floor(Math.random() * (100 - 1) + 1)

    if (enemySelector <= 35) {
        selectedEnemy = bandit;
        
    }
    else if (enemySelector > 36 && enemySelector < 60) {
        selectedEnemy = spider;
    }
    else if (enemySelector > 61 && enemySelector < 85) {
        selectedEnemy = drowner;
    }
    else if (enemySelector > 86 && enemySelector < 91) {
        selectedEnemy = wyvern;
    }
    else if (enemySelector > 91 && enemySelector < 100) {
        selectedEnemy = siren;
    }

    selectedLvl = selectedEnemy.lvl[ Math.floor(Math.random() * (9 - 0) + 0) ];

    if (selectedEnemy.name == "Bandit") {
        selectedEnemy.hp = 100;
    }
    else if (selectedEnemy.name == "Spider") {
        selectedEnemy.hp = 120;
    }
    else if (selectedEnemy.name == "Drowner") {
        selectedEnemy.hp = 150;
    }
    else if (selectedEnemy.name == "Wyvern") {
        selectedEnemy.hp = 180;
    }
    else if (selectedEnemy.name == "Siren") {
        selectedEnemy.hp = 200;
    }

    scaledXp = Math.round( selectedEnemy.xpValue + (selectedLvl / 4 * selectedEnemy.xpValue) );

    scaledMaxRoll = maxRollEnemy + ( selectedLvl / 5 * maxRollEnemy );

    scaledHp = selectedEnemy.hp = Math.round( selectedEnemy.hp + (selectedLvl / 4 * selectedEnemy.hp) );


    document.getElementById("enemyName").innerHTML = selectedEnemy.name;
    document.getElementById("enemyHealth").innerHTML = selectedEnemy.hp;
    document.getElementById("enemyLvl").innerHTML = selectedLvl;

    // Select random text outcome for enemy spawn 

    // let textOptions = [text1, text2, text3];

    // text1 = `A wild ${selectedEnemy.name} has appeared!`;
    // text2 = `Out of nowhere a ${selectedEnemy.name} appears`;
    // text3 = `A ${selectedEnemy.name} comes running at you!`;


    // textSelector = textOptions[ Math.ceil(Math.random() * (2 - 0) + 0) ];
    // console.log(textOptions[0]);

    document.getElementById("playerData").innerHTML = `A wild ${selectedEnemy.name} has appeared!`;   }

    

// Defeated enemy / gain xp
function defeatEnemy() {
        
        player.xp = player.xp + scaledXp;

        if (player.xp >= 200 && playerLvl2 === false) {
            player.lvl ++;
            player.hp = 550;
            playerLvl2 = true;
            maxRollPlayer = maxRollPlayer + 10;
        }
        if (player.xp >= 400 && playerLvl3 === false) {
            player.lvl ++;
            player.hp = 600;
            playerLvl3 = true;
            maxRollPlayer = maxRollPlayer + 10;
        }
        if (player.xp >=   600 && playerLvl4 === false) {
            player.lvl ++;
            player.hp = 650;
            playerLvl4 = true;
            maxRollPlayer = maxRollPlayer + 10;
        }
        if (player.xp >= 800 && playerLvl5 === false) {
            player.lvl ++;
            player.hp = 700;
            playerLvl5 = true;
            maxRollPlayer = maxRollPlayer + 10;
        }

    document.getElementById("playerData").innerHTML = `You defeated the ${selectedEnemy.name}! You gained ${selectedEnemy.xpValue} XP!`;
    document.getElementById("playerLvl").innerHTML = player.lvl;
    document.getElementById("playerXp").innerHTML = player.xp;
}



// Player attacking enemy 
function attackenemy() {
        
    switch(playerBlock) {
        case false:
            // Attacking
            if (enemyBlock == false) {

                switch (playerAttackDamage >= 10) {
                    case true:
                        selectedEnemy.hp = selectedEnemy.hp - playerAttackDamage; 
                        break;

                    case false:
                        selectedEnemy.hp;
                        break;  }   }

            else if (enemyBlock == true) {

                switch (playerAttackDamage >= 10) {
                    case true:                        
                        selectedEnemy.hp = (selectedEnemy.hp - (Math.floor(playerAttackDamage / 2) ) ); 
                        document.getElementById("playerData").innerHTML = `The enemy blocked!`;
                            break;

                    case false:
                        selectedEnemy.hp;
                            break;  }   }
            
            break;
        case true: 

            // Blocking
            document.getElementById("playerData").innerHTML = `You blocked.`;
            break;  } 

    //Display result
    if (playerAttackDamage >= 10 && playerBlock == false) {
        switch (enemyBlock) {

            case true:
                    document.getElementById("playerData").innerHTML = `You attacked the enemy and did ${Math.floor(playerAttackDamage / 2)} damage.`;
                break;

            case false:
                    document.getElementById("playerData").innerHTML = `You attacked the enemy and did ${playerAttackDamage} damage.`;
                break;  }   }

    else if (playerAttackDamage <= 9 && playerBlock == false) {
        document.getElementById("playerData").innerHTML = `You missed!`;    }   }



// enemy attacking player 
function attackPlayer() {
    
        enemyBlockChoice = Math.ceil(Math.random() * (100 - 1) + 1);

            if (enemyBlockChoice <= 20) { enemyBlock = true; }
            else if (enemyBlockChoice >= 21) { enemyBlock = false; }

    switch(enemyBlock) {
        case false:

            if (playerBlock == false) {
                switch(enemyAttackDamage >= 10) {

                    case true:
                        player.hp = player.hp - enemyAttackDamage; 
                        break;

                    case false:
                        player.hp;
                        break;  }   }

            else if (playerBlock == true) {
                switch(enemyAttackDamage >= 10) {

                    case true:
                        player.hp = (player.hp - Math.floor(enemyAttackDamage / 2)); 
                        break;

                    case false:
                        player.hp;
                        break;  }   }
            break;

        case true: 
            document.getElementById("playerData").innerHTML = `enemy blocked!`;
            break;  }

    if (enemyAttackDamage >= 10 && enemyBlock == false) {
        switch (playerBlock) {

            case true: 
                document.getElementById("playerData").innerHTML = `The enemy attacked you and did ${Math.floor(enemyAttackDamage / 2)} damage.`;
                break;

            case false:
                document.getElementById("playerData").innerHTML = `The enemy attacked you and did ${enemyAttackDamage} damage.`;
                break;  }   }

    else if (enemyAttackDamage <= 9 && enemyBlock == false) {
        document.getElementById("playerData").innerHTML = `The enemy missed!`;  }   }


// Start Game 
function startGame() {
    if (hasRunOnce == false) {

        generateEnemy();

    // Initialize player info
    document.getElementById("playerName").innerHTML = player.name;
    document.getElementById("playerHealth").innerHTML = player.hp;
    document.getElementById("playerLvl").innerHTML = player.lvl;
    document.getElementById("playerXp").innerHTML = player.xp;
    
    playerTurn = true;
    enemyTurn = false;
    
    hasRunOnce = true;  }    }




// Start game / end turn
function select() {
    startGame();

    // Check if players are still alive
    if (player.hp > 0 && selectedEnemy.hp > 0 && enemyTurn == true) {

        attackPlayer();         

        enemyTurn = false;
        playerTurn = true;

        if (selectedEnemy.hp < 1) {
                selectedEnemy.hp = 0;
                //document.getElementById("playerData").innerHTML = `enemy is dead. You Win!`;    
                }
            else if (player.hp < 1) {
                player.hp = 0;
                document.getElementById("playerData").innerHTML = `You are dead.`;  }   }

    if (enemyIsDead == true) {
        enemyIsDead = false;
        generateEnemy();

        document.getElementById("enemyName").innerHTML = selectedEnemy.name;
        document.getElementById("enemyHealth").innerHTML = selectedEnemy.hp;
        document.getElementById("enemyLvl").innerHTML = selectedLvl;  }
    // Update player health 
    document.getElementById("playerHealth").innerHTML = player.hp;  }




// Player turn
function fight() {

    // Won't run until select is pressed first
    if (hasRunOnce == true) {

        if (player.hp > 0 && selectedEnemy.hp > 0 && playerTurn == true) {

                attackenemy();
            
                playerTurn = false;
                enemyTurn = true;

            if (selectedEnemy.hp < 1) {
                selectedEnemy.hp = 0;
                document.getElementById("playerData").innerHTML = `enemy is dead. You Win!`;

                enemyIsDead = true;
                defeatEnemy();  }

            else if (player.hp < 1) {
                player.hp = 0;
                document.getElementById("playerData").innerHTML = `You are dead.`;  }   }
        
        // Update enemy health
        document.getElementById("enemyHealth").innerHTML = selectedEnemy.hp;    }   }