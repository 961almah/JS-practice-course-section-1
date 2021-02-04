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

// let markHeight = 1.69;
// let markWeight = 78;

// let johnHeight = 1.95;
// let johnWeight = 92;

// let markBMI = markWeight / markHeight ** 2

// let johnBMI = johnWeight / (johnHeight * johnHeight)

// console.log(markBMI);
// console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);


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

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//     console.log(`Mark's BMI (${markBMI}) is smaller than John's BMI (${johnBMI})`)
// }

// =============================================== //

// const inputYear = '1991';

// console.log(Number(inputYear), inputYear);

// console.log(Number(inputYear) + 18);

// =============================================== //

// Type conversion and coercion assignment

// console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2);

// predictions: 4 617 23 false 1143

// =============================================== //

// Truthy falsy 

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Ali'));
// console.log(Boolean({}));

// let height;

// if (height) {
//     console.log(`yay`);
// } else {
//     console.log(`nay`);
// }

// =============================================== //

// equality operators

// const age = 18;

// if (age === 18) console.log('You just became an adult');

// const favorite = Number(prompt("what's your favorite number?"));

// // without the Number you get a string and it doesn't work

// if (favorite === 23) {
//     console.log(`cool`);
// } else if (favorite === 7) {
//     console.log(`also cool`);
// } else if (favorite === 9) {
//     console.log(`cool as well`);
// } else {
//     console.log(`not cool`);
// }

// console.log(favorite);

// =============================================== //

// const hasDriversLicense = true;  //a
// const hasGoodVision = true;  //b

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log(`sarah can drive`);
// } else {
//     console.log(`someone else should drive`);
// }

// logical operators 

//  ============================================= //

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dolphinsScoreAverage = (96 + 108 + 89) / 3;

// const KoalasScoreAverage = (88 + 91 + 110) / 3;

// if (dolphinsScoreAverage > KoalasScoreAverage && dolphinsScoreAverage > 100) {
//     console.log(`dolphins win`);
// } else if (KoalasScoreAverage > dolphinsScoreAverage && KoalasScoreAverage > 100) {
//     console.log(`koalas win`);
// } else {
//     console.log(`draw`);
// }

