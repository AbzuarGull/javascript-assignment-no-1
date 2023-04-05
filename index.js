// Programm no 1:Write a js program to find maximum between two numbers.

// let num1 =+ prompt("Enter your number!!");
// let num2 =+ 0;
// if(num1 > num2){
//     document.write("Your entered number is maximum");
// }
// else{
//     document.write("Your entered number is minimum")}


// Programm no 2:Write a js program to find maximum between three numbers.

// let num1 =+ prompt("Enter the first number:");
// let num2 =+ prompt("Enter the second number:");
// let num3 =+ prompt("Enter the third number:");

// let max = num1;
// if (num2 > max) {
//   max = num2;
// }
// if (num3 > max) {
//   max = num3;
// }
// document.write("The maximum between ", num1, ", ", num2, ", and ", num3, " is ", max, ".");


// Programm no 3: Write a js program to check whether a number is negative, positive or zero.

// let number = + prompt("Enter number!");
// if (number > 0) {
//     document.write("Your enter number is positive");
// }
// else if (number < 0) {
//     document.write("Your enter number is negative");
// }
// else {
//   document.write("Your enter number is zero!");
// }


//Programm no 4:Write a js program to check whether a number is divisible by 5 and 11 or not.

// let number =+ prompt("Enter your number!");

// if (number % 5 === 0 ) {
//     document.write(number ,"Your number is divisible of 5 ");
// }
// else if (number % 11 === 0) {
//     document.write(number ,"Your number is divisible of 11");
// }
// else{
//    document.write(number ,"Your number is not divisible of 5 or 11!!");
// }


// Programm no 5: Write a js program to check whether a number is even or odd.

// let evenOdd = prompt("Enter your number!!");
// if (evenOdd % 2 == 0){
//     document.write("Your number is even");
// }
// else{
//     document.write("Your number is odd");
// }
    
    
// Programm no 6: Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// let physics = + prompt("Enter your physics numbers.");
// document.write("Your physics numbers are =>", physics , "<br>");
// let chemistry = + prompt("Enter your Chemistry numbers");
// document.write("Your chemistry numbers are =>", chemistry , "<br>");
// let biology = + prompt("Enter your Biology numbers.");
// document.write("Your biology numbers are =>", biology , "<br>");
// let mathematics = + prompt("Enter your Mathematics numbers.");
// document.write("Your mathematics numbers are =>", mathematics , "<br>");
// let computer = + prompt("Enter your computer numbers.");
// document.write("Your computer numbers are =>", computer , "<br>");
// let addition = + physics + chemistry + biology + mathematics + computer;
// document.write("Your total gained marks are=>" , addition , "<br>");
// let percentage = addition / 500 * 100;
// document.write("Your percentage is => " ,percentage , "%" , "<br>");
// if (percentage >= 90) {
//     document.write("You gained => A+");
// }
// else if (percentage >= 80) {
//     document.write("You gained => B+");
// }
// else if (percentage >= 70) {
//     document.write("You gained => C+");
// }
// else if (percentage >= 60) {
//     document.write("You gained => D+");
// }
// else if (percentage >= 40) {
//     document.write("You gained => E+");
// }
// else {
//     document.write("You gained => F");
//}
    
    
// programm no 7: Write a js program to check whether a year is leap year or not.
   
//   let year =+ prompt("Enter a year:");
//  if (year % 4 == 0) {
// if (year % 100 == 0) {
//   if (year % 400 == 0) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }
// } else {
//   console.log(year + " is a leap year.");
// }
// else {
// console.log(year + " is not a leap year.");
//


// rogramm no 8:Write a js program to input any alphabet and check whether it is vowel or consonant.

// let alphabet = prompt("Enter your albhabet");
// if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u") {
// document.write(alphabet ," => Your enter alphabet is a vowel");
// }
// else{
//     document.write(alphabet ,"=> Your enter alphabet is not a vowel");

// }


// // // Programm no 9: Write a js program to check whether a character is alphabet or not.


// var character = prompt("Enter your data"); 

// if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
//   console.log(character , ' is an alphabet.');
// } else {
//   console.log(character , ' is not an alphabet.');
// }


// Programm no 10:Write a js program to check whether a character is uppercase or lowercase alphabet.

// var character = prompt("Enter your data"); 

// if (character >= 'a' && character <= 'z') {
//   console.log(character , ' is lowercase alphabet.');
// }if (character >= 'A' && character <= 'Z') {
//     console.log(character , ' is uppercase alphabet.');
// }


// programm no 11:Write a js program to calculate profit or loss.
// let buyedItem =+ prompt("Enter your buyed item prize");
// let selledItem =+ prompt("Enter your selled item prize");
// let result = buyedItem - selledItem;
// if (buyedItem > selledItem) {
//     document.write("You are in loss and your loss is => " , result);
// }
// if (selledItem > buyedItem) {
//     document.write("You are in profit and your profit is =>" , result);
    
// }


//  Programm no 12:Write a js program to input angles of a triangle and check whether triangle is valid or not.
// let angle1 =+ prompt("Enter the angle 1");
// let angle2 =+ prompt("Enter the angle 2");
// let angle3 =+ prompt("Enter the angle 3");

// let sum = angle1 + angle2 + angle3;
// if (sum <= 180) {
//     document.write("Your anles of a triangle are valid");
// }
// else{
//     document.write("Your anles of a triangle are not  valid");

// }


//  Programm no 13:Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// let side1 = parseFloat(prompt("Enter side 1 of triangle: "));
// let side2 = parseFloat(prompt("Enter side 2 of triangle: "));
// let side3 = parseFloat(prompt("Enter side 3 of triangle: "));

// if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//   document.write("Triangle is valid.");
// } else {
//   document.write("Triangle is not valid.");
// }


// Programm no 14:Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// let side1 = parseFloat(prompt("Enter side 1 of triangle: "));
// let side2 = parseFloat(prompt("Enter side 2 of triangle: "));
// let side3 = parseFloat(prompt("Enter side 3 of triangle: "));
// if (side1 === side2 && side2 === side3 && side3 === side1) {
//     document.write("Triangle is equilitral");
// }
// else if (side1 === side2 && side2 != side3) {
//     document.write("Triangle is isosceles");
// }
// else{
//     document.write("Triangle is scalene");
// }