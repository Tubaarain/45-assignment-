"use strict";
// stor the locations In a array.Make sure the array is not in alphabatical order.
let places = [`Italy`, `Germony`, `Agra`, `Eifel Tower`, `Times square`];
// print your array in its original order.
console.log(`original ` + places);
// print your array in alphabatical modifying the actual list. 
console.log(`copy ` + [...places].sort());
// show that your array is still in its order by printing it.
console.log(`original ` + places);
// print yor array in nevers alphabatical order without chaging the order of the original list.
console.log(`copy ` + [...places].sort().reverse());
// show that your array is still in its original order by printing it again.
console.log(`original ` + places);
// Revers the order of your list.print the array to show that its order has changest.
console.log(`original ` + places.reverse());
// Revers the order of your list again.print the list to show it's back to its original order.
console.log(`original ` + places.reverse());
// Sort your array so it's stored in alphabatical order.print the array to show that its order has been changed.
console.log(`original ` + places.sort());
// Sort to change your array so it's stored in revers allphabatical order.print the list to show that it's order has change.
console.log(`original ` + places.sort().reverse());
