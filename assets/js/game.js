// Games States
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    // Repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // Ask player if they want to skip or fight a battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confrim player wants to skip
            var confrimSkip = window.confirm("Are you sure you'd like to quit?");
            // If yes (true), leave fight
            if (confrimSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from player Money for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            console.log("playerMoney", playerMoney);
            // Leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // Leave while() if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } // End of while loop
}; // End of fight function

var startGame = function() {
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // Fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
        // Check enemy's health
        if (playerHealth > 0) {
            // Let player know what round they are in. remember that arrarys start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // Pick a new enemy to fight based on the index of the enemyNames arry
            var pickedEnemyName = enemyNames[i];
            // Reset enemyHealth before starting new fight
            enemyHealth = 50;
            // Use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;
            // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            if(playerHealth > 0 && i < enemyNames.length - 1) {
                // Ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                // If yes, take them to the store() function
                if(storeConfirm) {
                shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};
// Start the game when the page loads

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // If player is still alive, player wins!
    if(playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
        // Restart the game
        startGame();
    } else {
        window.alert("Thank your for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // Ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice"
    );
    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if(playerMoney >=7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                break;
            }
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // Increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                break;
            }
            else {
                window.alert("You don't have enough money!");
                shop();
                break;
            }
        case "LEAVE":
        case "leave":
            // Do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try Again.");
            // Call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

startGame(); //start game function