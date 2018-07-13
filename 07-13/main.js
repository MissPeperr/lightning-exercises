//////////////////////// EXERCISE ONE //////////////////////////
/*Create a function called `go` that takes 2 arguments: 
1. direction (forwards, backwards, etc.)
1. speed (mph).

The function, when invoked, will print out the following in your console (for example: `The car is moving forward, at 25 mph.`
*/

/*
Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

Example:

The car is moving forward at 82 mph
SLOW DOWN!
*/
function go(direction, speed){
    console.log(`The car is moving ${direction} at ${speed} mph`);
    if (speed > 75) {
        console.log("SLOW DOWN!!");
    }
}

go("forwards", "57");
go("backwards", "90");
go("forwards", "76");
go("backwards", "20");

//////////////////////// EXERCISE TWO //////////////////////////
/*
Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.
*/

const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]

const bestYears = [];

for (let i = 0; i < birthRates.length; i++) {
    const currentYear = birthRates[i];

    if(currentYear.birthRate > 15) {
        bestYears.push(currentYear.year);
    }
}
console.log(bestYears);

////////// Another way to do this loop for the array: .forEach LOOP ////////////
birthRates.forEach(function (currentYear2) {
    if(currentYear2.birthRate > 15) {
        bestYears.push(currentYear2.year);
    }
})

////////// Another way to do this loop for the array:  FOR-OF LOOP////////////
for (let currentYear3 of birthRates) {
    if(currentYear3.birthRate > 15) {
        bestYears.push(currentYear3.year);
    }
}

////////// EXERCISE TWO: PART TWO \\\\\\\\\\\\\

const politician = {
    //values of politician
    platform: {
        //values of platform
        money: ["i like it", "I love it", "i want some more of it", "no sharing"],
        health: "I'm against it"
    },
    district: "Michigan 13"
}

console.log(politician.platform.money[2])

for (const policy of politician.platform.money) {
    console.log(policy);
}