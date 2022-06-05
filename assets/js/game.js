var playerName = window.prompt("What is your robot's name?");
var playerHealth = 80;
var playerAttack = 10;
var playerMoney = 30;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 30;
var enemyAttack = 12;

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {

        //prompt fight or no-fight option
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
        //if SKIP--
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you want to quit??");
            //if yes, leave fight--NESTED conditionals again--
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight, Goodbye!");
                //subract from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("Player money", playerMoney);
                break;
            }
            else {
                fight();
            }
        }

        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            // check enemy's health--NESTED conditionals under the above true 'if' statement.
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // player is then ATTACKED by enemy, so decrease player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }

    }
};
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}