// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



let magician : string[] = [`Harry potter` , `Hermicon Granger` , `Ron weasley` , `Albus Dumbledore`];



function make_great(magician_Arry:string[]){

    for(let i=0; i<magician_Arry.length; i++){

            magician [i] =`the Great ` + magician_Arry[i]
    }
    
}

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
    
}
make_great(magician);
show_magicians(magician);