// Games States
// "LOSE" - Player robot's health is zero or less

var playerName= window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 100;

var fight = function(enemyName) {
    // Repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // Ask player if they want to skip or fight a battle
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confrim player wants to skip
            var confrimSkip = window.confirm ("Are you sure you'd like to quit?");
            // If yes (true), leave fight
            if (confrimSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from player Money for skipping
            playerMoney = playerMoney - 10;
            console.log ("playerMoney", playerMoney);
            break;
        }
    }
            // Remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log (
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            if (enemyHealth <= 0) {
                window.alert (enemyName + " has died!");
                playerMoney = playerMoney + 20;
                console.log ("playerMoney", playerMoney);
                // Leave while() loop since enemy is dead
                break;
            } else {
                window.alert (enemyName + " still has " + enemyHealth + " health left.");
            }
        // Remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."  
        );
        // Check player's health
        if (playerHealth <= 0) {
            window.alert (playerName + " has died!");
            // Leave while() if player is dead
            break;
        } else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
    } // End of while loop
}; // End of fight function

// Fight each enemy-robot by looping over them and fighting them one at a time
        for (var i = 0; i < enemyNames.length; i++) {
        // Check enemy's health
        if (playerHealth > 0) {
            // Let player know what round they are in. remember that arrarys start at 0 so it needs to have 1 added to it
            window.alert ("Welcome to Robot Gladiators! Round " + ( i + 1));
            // Pick a new enemy to fight based on the index of the enemyNames arry
            var pickedEnemyName = enemyNames[i];
            // Reset enemyHealth before starting new fight
            enemyHealth = 50;
            // Use debugger to pause script from running and check what's going on at that moment in the code
            debugger;
            // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight (pickedEnemyName);
            } 
            else {
                window.alert ("You have lost your robot in battle! Game Over!");
                break;
            }
        }