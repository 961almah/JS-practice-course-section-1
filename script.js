// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Ali');
// console.log(23);

// let firstName = 'Ali'
// console.log(firstName);

// let ali_jiana = 'AM';
// let $function = 27;

// let person = 'ali'
// let PI = 3.1415; 

// let myFirstJob = 'waiter';
// let myCurrentJob = 'programmer';

// =============================================== //

// // Values and Variables Assignment:

// const country = "USA"
// const continent = 'North America'
// let population = 300;

// console.log(country);
// console.log(continent);
// console.log(population);

// =============================================== //

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Ali');

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// =============================================== //

// Data Types Assignment

// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// =============================================== //

// let age = 22;
// age = 23;

// const birthYear = 1998;

// Let, Const, and Var Assignment

// language = 'English';

// =============================================== //

// const now = 2021
// const ageAli = now - 1998;
// const ageJiana = now - 1996;

// console.log(ageAli, ageJiana);

// console.log(ageAli * 2, ageAli / 10, 2 ** 3, ageAli + ageJiana);

// const firstName = 'Ali';
// const lastName = 'Mahmoud';

// console.log(firstName + ' ' + lastName);

// =============================================== //

// let x = 10 + 5

// x += 10 // x = x + 10
// x *= 4 // x = x * 4 = 100
// x++; // x = xx + 1
// x--;
// x--;
// console.log(x);

// console.log(ageAli > ageJiana);
// console.log(ageJiana >= 20);

// ================================================//

// const isFullAge = ageJiana >= 20 // Boolean
// console.log(isFullAge);

// console.log(now - 1998 > now - 1996);

// const averageAge = (ageAli + ageJiana) / 2
// console.log(ageAli, ageJiana, averageAge);

// =============================================== //

// Basic operators Assignment

// let halfPopulation = population / 2;

// population++;

// finnishPopulation = 6;

// console.log(population > finnishPopulation);;

// let portugalDescription = 'Portugal is in Europe, and its 11M people speak Portuguese';

// console.log(halfPopulation, population, portugalDescription);
// 

// =============================================== //

// Coding Challenge #1 

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2

let johnBMI = johnWeight / (johnHeight * johnHeight)

console.log(markBMI);
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);


// ==============================================//



// const firstName = 'Ali'
// const job = 'programmer'
// const birthYear = 1998;
// const year = 2021

// const ali = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(ali);

// const aliNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

// console.log(aliNew);

// =============================================== //

// String and Template literals: Not doing the assignment

// const age = 15;

// if (age >= 18) {
//     console.log(`Sarah can get her driver's license 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah needs to wait ${yearsLeft} more years before getting it.`);
// }

// console.log(age);

// birthYear = 1998;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// =============================================== //

// Taking Decisions Assignment: : Not doing the assignment

// Coding Challenge #2

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`Mark's BMI (${markBMI}) is smaller than John's BMI (${johnBMI})`)
}