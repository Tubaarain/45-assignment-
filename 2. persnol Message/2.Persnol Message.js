"use strict";
let PersonName = ``;
PersonName = prompt(`what is your name`) || ``;
if (PersonName !== null && PersonName !== ``) {
    alert(`hello ${PersonName},would you like to lrean some python to day ?`);
}
else {
    alert(`you have to fill your name !`);
}
