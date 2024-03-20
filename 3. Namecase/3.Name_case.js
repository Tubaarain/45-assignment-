"use strict";
let PersonName = ` `;
PersonName = prompt(`What is your name?`) || ``;
let LoweCase = PersonName.toLowerCase();
let UpperCase = PersonName.toUpperCase();
let titleCase = PersonName.split(``).map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join(` `);
if (PersonName !== null && PersonName !== ``) {
    alert(`Hello ${PersonName},Here are you name in:
    LowerCase: ${LoweCase}
    UpperCase: ${UpperCase}
    TitleCase: ${titleCase}`);
}
else {
    alert(`plese fill yiur name !`);
}
