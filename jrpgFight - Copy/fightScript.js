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



    let newEnemytextSelector;
    let newEnemyTextOptions;
        let text1;
        let text2;
        let text3;
        let text4;
        let text5;

    let playerAttackTextSelector1;
    let playerAttackTextOptions1;
        let text6;
        let text7;
        let text8;
        let text9;
        let text10;
    let playerAttackTextSelector2;
    let playerAttackTextOptions2;
        let text21;
        let text22;
        let text23;
        let text24;
        let text25;

    let enemyAttackTextSelector1;
    let enemyAttackTextOptions1;
        let text11;
        let text12;
        let text13;
        let text14;
        let text15;
    let enemyAttackTextSelector2;
    let enemyAttackTextOptions2;
        let text26;
        let text27;
        let text28;
        let text29;
        let text30;

    let enemyDefeatTextSelector;
    let enemyDefeatTextOptions;
        let text16;
        let text17;
        let text18;
        let text19;
        let text20;

    

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

    text1 = `A wild ${selectedEnemy.name} has appeared!`;
    text2 = `Out of nowhere a ${selectedEnemy.name} appears!`;
    text3 = `A ${selectedEnemy.name} comes running at you!`;
    text4 = `You see a ${selectedEnemy.name} approaching...`;
    text5 = `You feel a ${selectedEnemy.name}'s breath on your neck...`;

    
    newEnemyTextOptions = [text1, text2, text3, text4, text5];

    newEnemytextSelector = newEnemyTextOptions[ Math.ceil(Math.random() * (4 - 0) + 0) ];

    document.getElementById("playerData").innerHTML = newEnemytextSelector;   }

    

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

        text16 = `You defeated the ${selectedEnemy.name}! You gained ${selectedEnemy.xpValue} XP!`;
        text17 = `The ${selectedEnemy.name} was beheaded! You gained ${selectedEnemy.xpValue} XP!`;
        text18 = `The poor ${selectedEnemy.name} bled to death... You gained ${selectedEnemy.xpValue} XP!`;
        text19 = `The ${selectedEnemy.name} put up a fight, but did not prevail. You gained ${selectedEnemy.xpValue} XP!`;
        text20 = `The ${selectedEnemy.name}'s family will miss them, but you gained ${selectedEnemy.xpValue} XP!`;

        enemyDefeatTextOptions = [text16, text17, text18, text19, text20];

        enemyDefeatTextSelector = enemyDefeatTextOptions[ Math.ceil(Math.random() * (4 - 0) + 0) ];

    document.getElementById("playerData").innerHTML = enemyDefeatTextSelector;

    document.getElementById("playerLvl").innerHTML = player.lvl;
    document.getElementById("playerXp").innerHTML = player.xp;
}



// Player attacking enemy 
function attackenemy() {

    text6 = `You slashed the ${selectedEnemy.name} and did ${playerAttackDamage} damage!`;
    text7 = `You stabbed the ${selectedEnemy.name} from behind and did ${playerAttackDamage} damage!`;
    text8 = `Your blade slashed the ${selectedEnemy.name} and did ${playerAttackDamage} damage!`;
    text9 = `Your blow delt ${playerAttackDamage} damage to the ${selectedEnemy.name}!`;
    text10 = `You poked the ${selectedEnemy.name} in the eye for ${playerAttackDamage} damage!`;

    playerAttackTextOptions1 = [text6, text7, text8, text9, text10,];
    
    playerAttackTextSelector1 = playerAttackTextOptions1[ Math.ceil(Math.random() * (4 - 0) + 0) ];


    text21 = `You hit the ${selectedEnemy.name}'s armour for ${Math.floor(playerAttackDamage / 2)} damage!`;
    text22 = `The ${selectedEnemy.name} blocked your attack but still took ${Math.floor(playerAttackDamage / 2)} damage`;
    text23 = `The ${selectedEnemy.name} managed to block and take ${Math.floor(playerAttackDamage / 2)} damage`;
    text24 = `Your attack of ${Math.floor(playerAttackDamage / 2)} damage bounced off the ${selectedEnemy.name}'s armour!`;
    text25 = `You nicked the ${selectedEnemy.name} for ${Math.floor(playerAttackDamage / 2)} damage`;

    playerAttackTextOptions2 = [text21, text22, text23, text24, text25,];
    
    playerAttackTextSelector2 = playerAttackTextOptions2[ Math.ceil(Math.random() * (4 - 0) + 0) ]; 

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
                    document.getElementById("playerData").innerHTML = playerAttackTextSelector2;
                break;

            case false:
                    document.getElementById("playerData").innerHTML = playerAttackTextSelector1;
                break;  }   }

    else if (playerAttackDamage <= 9 && playerBlock == false) {
        document.getElementById("playerData").innerHTML = `You missed!`;    }   }



// enemy attacking player 
function attackPlayer() {


        text11 = `The take a blow that does ${enemyAttackDamage} damage!`;
        text12 = `You taste blood and take ${enemyAttackDamage} damage`;
        text13 = `You grit your teeth and take ${enemyAttackDamage} damage`;
        text14 = `You get slashed and receive ${enemyAttackDamage} damage!`;
        text15 = `You hit your knees after taking ${enemyAttackDamage} damage`;

        enemyAttackTextOptions1 = [text11, text12, text13, text14, text15,];
        
        enemyAttackTextSelector1 = enemyAttackTextOptions1[ Math.ceil(Math.random() * (4 - 0) + 0) ];

        text26 = `You block a jab but still take ${Math.floor(enemyAttackDamage / 2)} damage`;
        text27 = `Your armour protects you from taking any more than ${Math.floor(enemyAttackDamage / 2)} damage`;
        text28 = `Your helmet catches a blow of ${Math.floor(enemyAttackDamage / 2)} damage!`;
        text29 = `Your chestplate soaks up ${Math.floor(enemyAttackDamage / 2)} damage`;
        text30 = `Your left grieve clangs as you take ${Math.floor(enemyAttackDamage / 2)} damage`;
        
        enemyAttackTextOptions2 = [text26, text27, text28, text29, text30,];

        enemyAttackTextSelector2 = enemyAttackTextOptions2[ Math.ceil(Math.random() * (4 - 0) + 0) ];
    
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
                document.getElementById("playerData").innerHTML = enemyAttackTextSelector2;
                break;

            case false:
                document.getElementById("playerData").innerHTML = enemyAttackTextSelector1;
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