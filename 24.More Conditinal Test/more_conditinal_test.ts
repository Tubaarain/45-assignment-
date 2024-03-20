

// equality and inequality Test 1
console.log("Equality test with string: ", "Apple" === "Apple");

// equality and inequality Test
console.log("Inequality test with string: ", ("Apple"as string) != "orange");

// test using the lower case function 2
console.log("Lower case function test: ", "HELLO".toLowerCase() == "hello");

// Numerical tests involving equality and inequality
console.log("Equality test with number: ", 26 === 26);
// Numarical tests involving inequality
console.log("Inquality test with number: ",(26 as number) != 35);

// greather than test
console.log("Greather than test:",10 > 5);
// less than test
console.log("Greather than and equal to test: ", 5 < 10);

// greather than or equal to
console.log("Grather than and equal to test:" , 10 >= 10 )
// less than or equal to
console.log("less than equal to test: ", 5<= 10 )

// Test using "and" and "or" oprator
console.log("and oprator test: ", 5===5 && 10 > 5 );

// Test using "or" oprator
console.log("or oprator test: ", 5===5 || false);

// Test wheather an item is in a array
const fruits :string[]=[`Nashpati`, `Banana`,`Amrood`];
console.log(`Test "Nashpati" in the array: `,fruits.includes("Nashpati"));

// Test wheather an item is not a array
console.log(`Testing "Apple" is not in array:` , !fruits.includes(`Apple`));