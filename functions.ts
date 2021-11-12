import Player from './player';
import * as promptSync from 'prompt-sync';

const prompt = promptSync();

export function getPlayer(): Player {

    let playerName: string = prompt('What is your name player? ');
    let playerMoney: number = parseInt(prompt('How much money do you want to bet? '));

    while (isNaN(playerMoney)) {

        playerMoney = parseInt(prompt('How much money do you want to bet? '));

    }

    let user: Player = new Player(playerName, playerMoney);
    return user;

}