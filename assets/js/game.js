

var fight = function (enemy) {

    while (enemy.health > 0 && playerInfo.health > 0) {
        //prompt fight or no-fight option
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

        //if SKIP--
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you want to quit??");
            //if yes, leave fight--NESTED conditionals again--
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight, Goodbye!");
                //subract from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("Player money", playerInfo.money);
                break;
            }
            else {
                fight();
            }
        }

        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            //   remove enemy's health by subtracting randomly generated damage
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            // check enemy's health--NESTED conditionals under the above true 'if' statement.
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                //reward player for winning
                playerInfo.money = + 20;
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

            // player is then ATTACKED by enemy, so decrease player's health by subtracting the amount set in the enemy.attack variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            // remove player's health by enemy attack points
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log("enemy attacks with " + damage + " attack points")
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }//end of while loop
};//end of fight function

var startGame = function () {
    // reset player stats
    playerInfo.reset();

    //fight each robot by looping over them and fighting one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            debugger;
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            console.log("Enemy has " + enemyInfo[i].health + " health.")
            fight(pickedEnemyObj);
            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
                shop();
            }
        }

        else {
            window.alert("You have lost your robot in battle, GAME OVER!");
            break;
        }
    } //end of for loop
    endGame();
}; //end of startGame function

var endGame = function () {
    if (playerInfo.health > 0) {
        window.alert("Great job, you survived the game!  You now have a score of " + playerInfo.money + ".");
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
}; //end of endGame function

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
                playerInfo.refillHealth();
                break;

            case "upgrade":
            case "UPGRADE":
                playerInfo.upgradeAttack();
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
};//end shop function

//random function
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}
//OBJECTS--
var playerInfo = {
    name: window.prompt("What is your robot's name?"),

    health: 100,

    attack: 10,

    money: 10,

    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14),
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14),
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

//starts first game when page loads..
startGame();
