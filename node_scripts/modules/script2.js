// here to have modules working we create a package.json file
//other option to run this is to rename files to end with .mjs and importing using that extension


import { reallyBigNumber } from './script1.js' 

const bigNumber = reallyBigNumber;

console.log(bigNumber);//now it works, with export defult doesn't work