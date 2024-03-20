// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician : string[] = [`Harry potter` , `Hermicon Granger` , `Ron weasley` , `Albus Dumbledore`];

function copyArray(arr:string[]){
    return [...arr]

}





function make_great(magician_Arry:string[]){

    for(let i=0; i<magician_Arry.length; i++){

            magician_Arry [i] =`the Great ` + magician_Arry[i]
    }
    
}

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
    
}
 const copymagicionArray = copyArray(magician)

make_great(copymagicionArray);
console.log(`\n\nThis is my original array:`)
show_magicians(magician);

console.log(`\n\nThis is my modifed copy the array:`)
show_magicians(copymagicionArray);