"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician = [`Harry potter`, `Hermicon Granger`, `Ron weasley`, `Albus Dumbledore`];
function copyArray(arr) {
    return [...arr];
}
function make_great(magician_Arry) {
    for (let i = 0; i < magician_Arry.length; i++) {
        magician_Arry[i] = `the Great ` + magician_Arry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicionArray = copyArray(magician);
make_great(copymagicionArray);
console.log(`\n\nThis is my original array:`);
show_magicians(magician);
console.log(`\n\nThis is my modifed copy the array:`);
show_magicians(copymagicionArray);
