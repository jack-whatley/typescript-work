import * as promptSync from 'prompt-sync';
import * as f from './functions';
import Player from "./player";

const prompt = promptSync();

console.log('<--- Betting Game --->');
console.log('You need to enter your name player!');

let mainUser: Player = f.getPlayer();

console.log(mainUser.toString());
