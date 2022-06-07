var playerName = window.prompt("What is your robot's name?");
var playerHealth = 30;
var playerAttack = 18;
var playerMoney = 30;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 20;
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

var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 20;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyNames.length - 1 && playerHealth > 0) {
                shop();
            }
        }

        else {
            window.alert("You have lost your robot in battle, GAME OVER!");
            break;
        }
    }
    endGame();
};

var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great job, you survived the game!  You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //start game again
        startGame();
    }
    else {
        window.alert("Thanks for playing Robot-Gladiators, come back soon!");
    }
};

var shop = function () {
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    if (storeConfirm) {
        var shopOptionPrompt = window.prompt
            ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
            );
        //use switch to carry out 3 different actions based on value of shopOptionPrompt
        switch (shopOptionPrompt) {
            case "refill":
            case "REFILL":
                if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                    //increase health/ decrease money
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
                break;

            case "upgrade":
            case "UPGRADE":
                if (playerMoney >= 7) {
                    window.alert("upgrading player's attack by 6 for 7 dollars.");
                    //increase attack/ decrease money
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                    console.log("Player money " + playerMoney);
                }
                else {
                    window.alert("You don't have enough money!");
                }
                break;

            case "leave":
            case "LEAVE":
                window.alert("Leaving the store");
                //do nothing, function will end
                break;

            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
        }
    }
};

startGame();
