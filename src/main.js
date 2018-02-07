// Phaser Framework requirements
const PIXI = require('phaser-ce/build/custom/pixi');
const p2 = require('phaser-ce/build/custom/p2');
const Phaser = require('phaser-ce');

// Holds all the gameplay states inside an object
const states = require('./states');


// Some constants for the game
const INITIAL_STATE = 'gameplay';


// Create the Phaser.Game object
const game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-div');


// Adds each states to the phaser game
Object.keys(states).forEach(k => game.state.add(k, states[k]));


// Initiate the predefined initial state
game.state.start(INITIAL_STATE);
