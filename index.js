"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var f = require("./functions");
var prompt = promptSync();
console.log('<--- Betting Game --->');
console.log('You need to enter your name player!');
var mainUser = f.getPlayer();
var playerRoll = f.getRoll(mainUser);
var userBet = f.getBet(mainUser);
// console.log(mainUser.toString());
