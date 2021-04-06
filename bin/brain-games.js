#!/usr/bin/env node
import getName from '../cli.js';

console.log('Welcome to the Brain Games!');

// console.log(getName());

const playerName = getName;

console.log(`Hello, ${playerName}!`);
