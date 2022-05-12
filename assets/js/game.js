var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Ask player if they want to skip or fight a battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing."
        );

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log (
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."  
    );

    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }


    // If player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // Confrim player wants to skip
        var confrimSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes (true), leave fight
        if (confrimSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from player Money for skipping
        playerMoney = playerMoney - 2;
    }
     // If no (false), ask question again by running fight() again
     else {
         fight();
     }
    } else {
        window.alert("Your need to choose a valid option. Try again!")
    }
    
};

fight();