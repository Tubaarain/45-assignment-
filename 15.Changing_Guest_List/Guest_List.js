"use strict";
let Guest_List = [`Imaran Khan`, `Nawaz Sharif`, `Asif Ali Zerdari`];
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasuer to invite you in our party.\n\nThank You!\n\n`);
}
let absent_Guest = `Imran Khan`;
let new_Guest = `Kamran Tessori`;
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasuer to invite you in our party.\n\nThank You!\n\n`);
}
console.log(`Mr. ${absent_Guest} is not comingto the party.`);
