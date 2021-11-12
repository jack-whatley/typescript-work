"use strict";
exports.__esModule = true;
exports.getBet = exports.getRoll = exports.getPlayer = void 0;
var player_1 = require("./player");
var promptSync = require("prompt-sync");
var prompt = promptSync();
function getPlayer() {
    var playerName = prompt('What is your name player? ');
    var playerMoney = parseInt(prompt('How much money do you want to bet? '));
    while (isNaN(playerMoney)) {
        playerMoney = parseInt(prompt('How much money do you want to bet? '));
    }
    var user = new player_1["default"](playerName, playerMoney);
    return user;
}
exports.getPlayer = getPlayer;
function getRoll(a) {
    var playerRoll = Math.floor(Math.random() * 7);
    console.log("\nIt is time to roll a dice " + a.name + ".");
    console.log('The computer will also roll the same dice, you have a 1/6 chance of winning, what is there to loose.');
    var rollDice = prompt('Do you want to roll the dice? ');
    if (rollDice.toLowerCase() === 'yes') {
        console.log("\nGood choice " + a.name + ".");
        console.log("You have rolled a " + playerRoll);
    }
    else {
        console.log("Unfortunately, " + a.name + ", it's not that simple - you see - I have a gun.");
        console.log("\nWell done, " + a.name + ", you have rolled a " + playerRoll + ".");
    }
    return playerRoll;
}
exports.getRoll = getRoll;
function getBet(a) {
    var userBet = parseInt(prompt("How much do you want to bet " + a.name + "? "));
    while (isNaN(userBet) || userBet > a.money) {
        userBet = parseInt(prompt("How much do you want to bet " + a.name + ", (you likely didn't enter a number or entered too much)? "));
    }
    return userBet;
}
exports.getBet = getBet;
