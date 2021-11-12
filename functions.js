"use strict";
exports.__esModule = true;
exports.getPlayer = void 0;
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
