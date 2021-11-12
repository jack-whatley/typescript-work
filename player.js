"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(name, money) {
        this.name = name;
        this.money = money;
    }
    Player.prototype.toString = function () {
        return "User: " + this.name + ".\nMoney \u00A3" + this.money + ".";
    };
    return Player;
}());
exports["default"] = Player;
