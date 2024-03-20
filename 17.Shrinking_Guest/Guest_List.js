"use strict";
let Guest_List = [`Imaran Khan`, `Nawaz Sharif`, `Asif Ali Zerdari`];
// for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasuer to invite you in our party.\n\nThank You!\n\n`)
// }
let absent_Guest = `Imran Khan`;
let new_Guest = `Kamran Tessori`;
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasuer to invite you in our party.\n\nThank You!\n\n`)
// }
console.log(`Mr. ${absent_Guest} is not comingto the party.`);
console.log(`Good News! we find Table so we are inviting 3 more goests. `);
Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2, 0, `Maryam Nawaz`);
Guest_List.push(`Bilawal Bhutto Zardari`);
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasuer to invite you in our party.\n\nThank You!\n\n`);
}
console.log(`\nSorry we can not arrange big table only Two people will be invited. `);
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, Your are not invited for Dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nYou are still invited.\n\nThank You!\n\n`);
}
Guest_List.splice(0, 2);
console.log(Guest_List);
