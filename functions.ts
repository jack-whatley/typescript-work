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

export function getRoll(a: Player): number {

    const playerRoll: number = Math.floor(Math.random() * 7);
    
    console.log(`\nIt is time to roll a dice ${a.name}.`);
    console.log('The computer will also roll the same dice, you have a 1/6 chance of winning, what is there to loose.');

    let rollDice: string = prompt('Do you want to roll the dice? ');
    
    if (rollDice.toLowerCase() === 'yes') {

        console.log(`Good choice ${a.name}.`);
        console.log(`You have rolled a ${playerRoll}`);

    } else {

        console.log(`Unfortunately, ${a.name}, it's not that simple - you see - I have a gun.`);
        console.log(`\nWell done, ${a.name}, you have rolled a ${playerRoll}.`);

    }

    return playerRoll;

} 
