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
// console.log(`Mr. ${absent_Guest} is not comingto the party.`);
// console.log(`Good News! we find Table so we are inviting 3 more goests. `)
// arry mn 3 guest add kiye hain.
Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2, 0, `Maryam Nawaz`);
Guest_List.push(`Bilawal Bhutto Zardari`);
for (let i = 0; i < Guest_List.length; i++) {
    //Yahan per ma ny 6 guest k array ko print karaya ha.
    // console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasuer to invite you in our party.\n\nThank You!\n\n`)
}
// Yahan per ma ny Guest remove kiye hain.
// console.log(`\nSorry we can not arrange big table only Two people will be invited. `);
// Sorry message guest for not invite.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    //    console.log(`Sorry Mr. ${remove_Guest}, Your are not invited for Dinner.`);
}
// Hamare bachy huy 2 Invited Guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nYou are still invited.\n\nThank You!\n\n`)
// }
// Mene sary guest array se remove ker diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exersice 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guest Are: ${Guest_List.length}`);
