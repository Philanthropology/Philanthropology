// Player 
    let player = {
        name: "player",
        hp: 600,
        fullHp: 600,
        lvl: 0,
        xp: 0,
        //currentLvlXp: 0, 
    }

// Enemies - regular
    let bandit = {
        name: "Bandit",
        hp: 100,
        lvl: 1,
        maxLvl: 0, 
        xpValue: 50,
    }

    let spider = {
        name: "Spider",
        hp: 120,
        lvl: 1,
        maxLvl: 0, 
        xpValue: 60,
    }

    let drowner = {
        name: "Drowner",
        hp: 150,
        lvl: 1,
        maxLvl: 0, 
        xpValue: 75,
    }

    let wyvern = {
        name: "Wyvern",
        hp: 180,
        lvl: 1,
        maxLvl: 0, 
        xpValue: 100,
    }

    let siren = {
        name: "Siren",
        hp: 200,
        lvl: 1,
        maxLvl: 0, 
        xpValue: 120,
    }


    let boss = {
        name: "Rock Giant",
        hp: 250,
        lvl: 15,
        maxLvl: 15,
        xpValue: 1000,
    }

// Enemy array
    //let enemy = [bandit, spider, drowner, wyvern, siren];

// Current enemy
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

    let maxRollPlayer = 80;
    let maxRollEnemy = 30;
    let scaledMaxRoll;

    let scaledHp;
    let scaledXp;

    let lvlReq = 200

    let enemySelector;

    let banditCounter = 0;
    let spiderCounter = 0;
    let drownerCounter = 0;
    let wyvernCounter = 0;
    let sirenCounter = 0;

    let enemyMinRoll = 1;

    let bossFight = false;
    let fightingBoss = false;


// Generate Enemy text options
    let newEnemytextSelector;
    let newEnemyTextOptions;
        let text1;
        let text2;
        let text3;
        let text4;
        let text5;

// player attack text options
    // Full attack
    let playerAttackTextSelector1;
    let playerAttackTextOptions1;
        let text6;
        let text7;
        let text8;
        let text9;
        let text10;
    // Blocked attack
    let playerAttackTextSelector2;
    let playerAttackTextOptions2;
        let text21;
        let text22;
        let text23;
        let text24;
        let text25;

// enemy attack text options
    // Full attack
    let enemyAttackTextSelector1;
    let enemyAttackTextOptions1;
        let text11;
        let text12;
        let text13;
        let text14;
        let text15;
    // Blocked attack
    let enemyAttackTextSelector2;
    let enemyAttackTextOptions2;
        let text26;
        let text27;
        let text28;
        let text29;
        let text30;

// Defeate enemy text options
    let enemyDefeatTextSelector;
    let enemyDefeatTextOptions;
        let text16;
        let text17;
        let text18;
        let text19;
        let text20;

function bossFightBtn() {
    bossFight = true;
    select();
}


let minRoller = () => {
    if (player.lvl >= 5) {
        enemyMinRoll = player.lvl - 4;
    }
    else {
        enemyMinRoll = 1;
    }
}

// --Block functions--
function playerBlockTrue()  { playerBlock = true; }
function playerBlockFalse() { playerBlock = false; }


// --Attack roll--
function playerAttackTurn() { playerAttackDamage = Math.floor(Math.random() * (maxRollPlayer - 5) + 5); }
function enemyAttackTurn()  { enemyAttackDamage = Math.floor(Math.random() * (scaledMaxRoll - 5) + 5); }


// --Create new enemy--
function generateEnemy() {

    document.getElementById("bossBtn").style.display = "none";


            minRoller();

        // Determine enemy type
                enemySelector = Math.floor(Math.random() * (100 - 1) + 1);

            if (enemySelector <= 35)                              {  selectedEnemy = bandit;  }
            else if (enemySelector >= 36 && enemySelector <= 60)  {  selectedEnemy = spider;  }
            else if (enemySelector >= 61 && enemySelector <= 85)  {  selectedEnemy = drowner; }
            else if (enemySelector >= 86 && enemySelector <= 91)  {  selectedEnemy = wyvern;  }
            else if (enemySelector >= 92 && enemySelector <= 100) {  selectedEnemy = siren;   }

            selectedEnemy.maxLvl = player.lvl + 5;

            if (bossFight == true) {
                selectedEnemy = boss;
            }    

        // Determine enemy level 
                selectedLvl = Math.floor(Math.random() * (selectedEnemy.maxLvl - enemyMinRoll) + enemyMinRoll);

            if (selectedEnemy.name == "Bandit")         { selectedEnemy.hp = 100; }
            else if (selectedEnemy.name == "Spider")    { selectedEnemy.hp = 120; }
            else if (selectedEnemy.name == "Drowner")   { selectedEnemy.hp = 150; }
            else if (selectedEnemy.name == "Wyvern")    { selectedEnemy.hp = 180; }
            else if (selectedEnemy.name == "Siren")     { selectedEnemy.hp = 200; }

            if (bossFight == true) {
                selectedLvl = 15;
            }           

        // Calculating XP value of enemy
            scaledXp = Math.round( selectedEnemy.xpValue + (selectedLvl / 4 * selectedEnemy.xpValue) );

        // Calculating max damage roll of enemey
            scaledMaxRoll = maxRollEnemy + ( selectedLvl / 3 * maxRollEnemy );

        // Calculating HP of enemy
            scaledHp = selectedEnemy.hp = Math.round( selectedEnemy.hp + (selectedLvl / 3 * selectedEnemy.hp) );

        

        // Select random text outcome for enemy spawn 
            // enemy spawn text outcomes
            text1 = `A wild ${selectedEnemy.name} has appeared!`;
            text2 = `Out of nowhere a ${selectedEnemy.name} appears!`;
            text3 = `A ${selectedEnemy.name} comes running at you!`;
            text4 = `You see a ${selectedEnemy.name} approaching...`;
            text5 = `You feel a ${selectedEnemy.name}'s breath on your neck...`;

            newEnemyTextOptions = [text1, text2, text3, text4, text5];

            // Determine the text outcome
                newEnemytextSelector = newEnemyTextOptions[ Math.ceil(Math.random() * (4 - 0) + 0) ]; 


            if (bossFight == true) {
                newEnemytextSelector = `The ground shakes as the ${boss.name} approaches...`;
            }

            
        // Output enemy info to enemy box
            document.getElementById("playerData").innerHTML = newEnemytextSelector;  

            document.getElementById("enemyName").innerHTML = selectedEnemy.name;
            document.getElementById("enemyHealth").innerHTML = selectedEnemy.hp;
            document.getElementById("enemyLvl").innerHTML = selectedLvl;   

    //     break;

    //     case true: 
            
    //         selectedEnemy = boss;
    //         selectedLvl = 1000;

            
    //         document.getElementById("playerData").innerHTML = `Oh shit its the fucking ${boss.name}!`;  

    //         document.getElementById("enemyName").innerHTML = selectedEnemy.name;
    //         document.getElementById("enemyHealth").innerHTML = selectedEnemy.hp;
    //         document.getElementById("enemyLvl").innerHTML = selectedLvl; 

        
    // }

}


// --Defeated enemy--
function defeatEnemy() {
        
            player.hp += Math.floor(scaledXp / 2);

        // Add enemy XP value to player xp pool
            player.xp += scaledXp;


            if (player.xp >= lvlReq) {
                player.lvl ++;
                lvlReq = Math.round(lvlReq * 1.3);
                maxRollPlayer = Math.round(maxRollPlayer * 1.1);
                player.fullHp = Math.round(player.fullHp * 1.08);
                player.hp = player.fullHp;
                
                player.xp = 0;
            }

            


        // Determine player level 
            // if (player.xp >= 200 && playerLvl2 === false) {
            //     player.lvl ++;
            //     player.hp = 550;
            //     playerLvl2 = true;
            //     maxRollPlayer = maxRollPlayer + 10; }
            // if (player.xp >= 400 && playerLvl3 === false) {
            //     player.lvl ++;
            //     player.hp = 600;
            //     playerLvl3 = true;
            //     maxRollPlayer = maxRollPlayer + 10; }
            // if (player.xp >=   600 && playerLvl4 === false) {
            //     player.lvl ++;
            //     player.hp = 650;
            //     playerLvl4 = true;
            //     maxRollPlayer = maxRollPlayer + 10; }
            // if (player.xp >= 800 && playerLvl5 === false) {
            //     player.lvl ++;
            //     player.hp = 700;
            //     playerLvl5 = true;
            //     maxRollPlayer = maxRollPlayer + 10; }

        // Enemy counter
            if (selectedEnemy == bandit)       { banditCounter ++;  }
            else if (selectedEnemy == spider)  { spiderCounter ++;  }
            else if (selectedEnemy == drowner) { drownerCounter ++; }
            else if (selectedEnemy == wyvern)  { wyvernCounter ++;  }
            else if (selectedEnemy == siren)   { sirenCounter ++;   }

           

        // Select random text outcome for defeating enemy
            // Defeat enemy text outcomes
            text16 = `You defeated the ${selectedEnemy.name}! You gained ${scaledXp} XP!`;
            text17 = `The ${selectedEnemy.name} was beheaded! You gained ${scaledXp} XP!`;
            text18 = `The poor ${selectedEnemy.name} bled to death... You gained ${scaledXp} XP!`;
            text19 = `The ${selectedEnemy.name} put up a fight, but did not prevail. You gained ${scaledXp} XP!`;
            text20 = `The ${selectedEnemy.name}'s family will miss them, but you gained ${scaledXp} XP!`;

            enemyDefeatTextOptions = [text16, text17, text18, text19, text20];

            // Determine the text outcome
                enemyDefeatTextSelector = enemyDefeatTextOptions[ Math.ceil(Math.random() * (4 - 0) + 0) ];


            if (selectedEnemy == boss && boss.hp <= 0) {
                boss.hp = 0;

                document.getElementById("win-text").style.display = "block"

                enemyDefeatTextSelector = `You killed ${banditCounter} bandits, ${spiderCounter} spiders, 
                ${drownerCounter} drowners, ${wyvernCounter} wyverns, and ${sirenCounter} sirens.`; 
            }
            


        // Output enemy info to enemy box
            document.getElementById("playerData").innerHTML = enemyDefeatTextSelector;

            document.getElementById("playerLvl").innerHTML = player.lvl;
            document.getElementById("playerXp").innerHTML = player.xp;
}


// --Player attacking enemy--
function attackEnemy() {


    // Player full attack text outcomes
        text6 = `You slashed the ${selectedEnemy.name} and did ${playerAttackDamage} damage!`;
        text7 = `You stabbed the ${selectedEnemy.name} from behind and did ${playerAttackDamage} damage!`;
        text8 = `Your blade slashed the ${selectedEnemy.name} and did ${playerAttackDamage} damage!`;
        text9 = `Your blow delt ${playerAttackDamage} damage to the ${selectedEnemy.name}!`;
        text10 = `You poked the ${selectedEnemy.name} in the eye for ${playerAttackDamage} damage!`;

        playerAttackTextOptions1 = [text6, text7, text8, text9, text10,];
        
        // Determine full attack text outcome
            playerAttackTextSelector1 = playerAttackTextOptions1[ Math.ceil(Math.random() * (4 - 0) + 0) ];

    // Player blocked attack text outcomes
        text21 = `You hit the ${selectedEnemy.name}'s armour for ${Math.floor(playerAttackDamage / 2)} damage!`;
        text22 = `The ${selectedEnemy.name} blocked your attack but still took ${Math.floor(playerAttackDamage / 2)} damage`;
        text23 = `The ${selectedEnemy.name} managed to block and take ${Math.floor(playerAttackDamage / 2)} damage`;
        text24 = `Your attack of ${Math.floor(playerAttackDamage / 2)} damage bounced off the ${selectedEnemy.name}'s armour!`;
        text25 = `You nicked the ${selectedEnemy.name} for ${Math.floor(playerAttackDamage / 2)} damage`;

        playerAttackTextOptions2 = [text21, text22, text23, text24, text25,];
        
        // Determine blocked attack text outcomes
            playerAttackTextSelector2 = playerAttackTextOptions2[ Math.ceil(Math.random() * (4 - 0) + 0) ]; 

    // Check for player block
        switch(playerBlock) {

        //  Player not blocking -- Attacking
            case false:

            // Check for enemy block - false -- full attack
                if (enemyBlock == false) {

                // Check for miss 
                    switch (playerAttackDamage >= 10) {
                    
                    // hit -- full attack
                        case true:
                            selectedEnemy.hp = selectedEnemy.hp - playerAttackDamage; 
                            break;

                    // miss -- no attack
                        case false:
                            selectedEnemy.hp;
                            break;  
                        }   
                    }

            // Check for enemy block - true -- half attack
                else if (enemyBlock == true) {

                // Check for miss 
                    switch (playerAttackDamage >= 10) {

                    // hit -- half attack
                        case true:                        
                            selectedEnemy.hp = (selectedEnemy.hp - (Math.floor(playerAttackDamage / 2) ) ); 
                            document.getElementById("playerData").innerHTML = `The enemy blocked!`;
                                break;

                    // miss -- no attack
                        case false:
                            selectedEnemy.hp;
                                break;  
                        }   
                    }
                
            break;

        // Player is blocking
            case true: 

            // player block -- logic handled in "attackPlayer()"
                document.getElementById("playerData").innerHTML = `You blocked.`;
                break;  
            } 

    // Display result

        // player attack hit
            if (playerAttackDamage >= 10 && playerBlock == false) {

            // Check for enemy block -- determines text outcome
                switch (enemyBlock) {

                // Enemy is blocking -- blocking text outcome
                    case true:
                            document.getElementById("playerData").innerHTML = playerAttackTextSelector2;
                        break;

                // Enemy is not blocking -- full attack text outcome
                    case false:
                            document.getElementById("playerData").innerHTML = playerAttackTextSelector1;
                        break;  
                    }   
                }

        // Player attack miss
            else if (playerAttackDamage <= 9 && playerBlock == false) {
                document.getElementById("playerData").innerHTML = `You missed!`;    
        }   
}


// enemy attacking player 
function attackPlayer() {

    // Enemy full attack text outcomes
        text11 = `The take a blow that does ${enemyAttackDamage} damage!`;
        text12 = `You taste blood and take ${enemyAttackDamage} damage`;
        text13 = `You grit your teeth and take ${enemyAttackDamage} damage`;
        text14 = `You get slashed and receive ${enemyAttackDamage} damage!`;
        text15 = `You hit your knees after taking ${enemyAttackDamage} damage`;

        enemyAttackTextOptions1 = [text11, text12, text13, text14, text15,];
        
        // Determine text outcome
            enemyAttackTextSelector1 = enemyAttackTextOptions1[ Math.ceil(Math.random() * (4 - 0) + 0) ];

    // Enemy blocked attack text outcomes
        text26 = `You block a jab but still take ${Math.floor(enemyAttackDamage / 2)} damage`;
        text27 = `Your armour protects you from taking any more than ${Math.floor(enemyAttackDamage / 2)} damage`;
        text28 = `Your helmet catches a blow of ${Math.floor(enemyAttackDamage / 2)} damage!`;
        text29 = `Your chestplate soaks up ${Math.floor(enemyAttackDamage / 2)} damage`;
        text30 = `Your left grieve clangs as you take ${Math.floor(enemyAttackDamage / 2)} damage`;
        
        enemyAttackTextOptions2 = [text26, text27, text28, text29, text30,];

        // Determine blocked attack text outcome
            enemyAttackTextSelector2 = enemyAttackTextOptions2[ Math.ceil(Math.random() * (4 - 0) + 0) ];
    
    // Determine enemy block state        
        enemyBlockChoice = Math.ceil(Math.random() * (100 - 1) + 1);

            if (enemyBlockChoice <= 20) { enemyBlock = true; }
            else if (enemyBlockChoice >= 21) { enemyBlock = false; }

    // Check for enemy block
        switch(enemyBlock) {

        // Enemy not blocking -- Attacking 
            case false:

            // Check for player block - false -- full attack
                if (playerBlock == false) {

                // Check for miss
                    switch(enemyAttackDamage >= 10) {

                    // hit -- full attack
                        case true:
                            player.hp = player.hp - enemyAttackDamage; 
                            break;

                    // miss -- no attack
                        case false:
                            player.hp;
                            break;  
                        }   
                    }

            // Check for player block - true -- half attack
                else if (playerBlock == true) {

                // Check for miss
                    switch(enemyAttackDamage >= 10) {

                    // hit -- half attack
                        case true:
                            player.hp = (player.hp - Math.floor(enemyAttackDamage / 2)); 
                            break;
                    
                    // miss -- no attack
                        case false:
                            player.hp;
                            break;  
                        }   
                    }
            break;

        // Enemy is blocking
            case true: 

            // Enemy block -- logic handled in "attackEnemy()"
                document.getElementById("playerData").innerHTML = `enemy blocked!`;
                break;  
            }

    // Display result

        // Enemy attack hit
            if (enemyAttackDamage >= 10 && enemyBlock == false) {

            // Check for player block -- determines text outcome
                switch (playerBlock) {

                // Player is blocking -- half attack text outcome
                    case true: 
                        document.getElementById("playerData").innerHTML = enemyAttackTextSelector2;
                        break;

                // Player is not blocking -- full attack text outcome
                    case false:
                        document.getElementById("playerData").innerHTML = enemyAttackTextSelector1;
                        break;  
                    }   
                }

            // Enemy Attack miss
                else if (enemyAttackDamage <= 9 && enemyBlock == false) {
                    document.getElementById("playerData").innerHTML = `The enemy missed!`;  
            }   
}


// --Start Game--
function startGame() {

    // Determine if the function has been executed 
        if (hasRunOnce == false) {

            generateEnemy();

        // Initialize player info
            document.getElementById("playerName").innerHTML = player.name;
            document.getElementById("playerHealth").innerHTML = player.hp;
            document.getElementById("playerLvl").innerHTML = player.lvl;
            document.getElementById("playerXp").innerHTML = player.xp;
            
        playerTurn = true;
        enemyTurn = false;
        
        hasRunOnce = true;  
    }    
}


// --End turn--
function select() {

    // Will run this function only once 
        startGame();

    // Check if players are still alive  /  if it is the enemy's turn
        if (player.hp > 0 && selectedEnemy.hp > 0 && enemyTurn == true && boss.hp >= 1) {

            //document.getElementById("dead-text").style.display = "none";

            // Enemy attack
                attackPlayer();         

            // End turn
                enemyTurn = false;
                playerTurn = true;

        // Make sure health does not go below 0
            if (selectedEnemy.hp < 1) { 
                selectedEnemy.hp = 0; 
            }

        // Determine if player is dead   (put counter here)
            else if (player.hp < 1) { 
                player.hp = 0;
                document.getElementById("playerData").innerHTML = `You killed ${banditCounter} bandits, ${spiderCounter} spiders, 
                ${drownerCounter} drowners, ${wyvernCounter} wyverns, and ${sirenCounter} sirens.`;  
                document.getElementById("dead-text").style.display = "block";    
                }      
            }

    // Determine if enemy is dead and generate new enemy
        if (enemyIsDead == true && selectedEnemy != boss) {
            enemyIsDead = false;
            generateEnemy();

            document.getElementById("enemyName").innerHTML = selectedEnemy.name;
            document.getElementById("enemyHealth").innerHTML = selectedEnemy.hp;
            document.getElementById("enemyLvl").innerHTML = selectedLvl;  
        }

    // Update player health 
        document.getElementById("playerHealth").innerHTML = player.hp;  
}


// --Player turn--
function fight() {

    // Won't run until select is pressed first
        if (hasRunOnce == true) {

        // Check if players are still alive  /  if it is player's turn
            if (player.hp > 0 && selectedEnemy.hp > 0 && playerTurn == true && boss.hp >= 1) {

                //document.getElementById("dead-text").style.display = "none";

                
                // Player attack
                    attackEnemy();
                
                // End turn
                    playerTurn = false;
                    enemyTurn = true;

            // Determine if enemy is dead  /  show fight result
                if (selectedEnemy.hp < 1) { 
                    selectedEnemy.hp = 0;  enemyIsDead = true;  defeatEnemy();  

                    if (banditCounter >= 1 && spiderCounter >= 1 && drownerCounter >= 1 && wyvernCounter >= 0 && sirenCounter >= 0 && boss.hp >= 1) {
                        document.getElementById("bossBtn").style.display = "block";

                        
                }
            }

            // Determine if player is dead  /  show end screen 
                else if (player.hp < 1) { player.hp = 0; 

                }   
            }
        
        // Update enemy health
            document.getElementById("enemyHealth").innerHTML = selectedEnemy.hp;    
        }   
}