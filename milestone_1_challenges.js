// Challenge 1: Return the sum of two numbers
// Create a function called addition that takes two numbers as arguments and returns their sum.
function addition(a, b) {
  console.log(a + b);
}

addition(-10, 25);


// Challenge 2: Convert Minutes into Seconds
// Write a function called convert that takes an integer minutes and converts it to seconds.
function convert(minutes) {
    const seconds = minutes * 60;
    return seconds;
}

console.log(convert(25));


// Challenge 3: Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

console.log(findPerimeter(15, 30));


// Challenge 4: Check Negative
// Write a function called isNegative that takes a number as it's only argument, the function should return true if the passed number is a negative number and false if the passed number is not a negative number.
function isNegative(number) {
    if (number < 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isNegative(25));
console.log(isNegative(-5));


// Challenge 5: Can I drive
// Write a function that takes in a person's name and age. If they're 18 or older, return a message like 'Alice is old enough to drive.' If they're younger, return 'Bob is not old enough to drive yet.'
function canDrive(name, age) {
   if (age >= 18) {
     console.log(`${name} is old enough to drive`);
   } else {
     console.log(`${name} is not old enough to drive yet`);
   }
 }

canDrive("Becky", 22);
canDrive("Jack", 15);


// Challenge 6: Largest Number
// Write a function called findLargest(a, b, c) that takes three numbers and returns the largest of the three
function findLargest(a, b, c) {
  if (a > b && a > c ) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(10, 20, 30));
console.log(findLargest(70, 90, 50));


// Challenge 7: BMI Calculator
// Write a function called calculateBMI(weight, height) that calculates the Body Mass Index (BMI)
function calculateBMI(weight, height) {
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    return "Normal weight";
  } else if (BMI >= 25 && BMI < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
console.log(`Your BMI is - ${calculateBMI(48.50, 1.5)}`);
console.log(`Your BMI is -  ${calculateBMI(58, 1.5)}`);


// Challenge 8: Greeting based on time
// Write a function called greetUser(name, hour) that returns a personalized greeting based on the hour of the day.

function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    return `Good morning, ${name}!`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good afternoon, ${name}!`;
  } else if (hour >= 18 && hour <= 21) {
    return `Good evening, ${name}!`;
  } else if (hour >= 22 && hour <= 24) {
    return `Good night, ${name}!`;
  } else {
    return `hour not valid!`;
  }
}

console.log(greetUser("Kelly", 7));
console.log(greetUser("Benson", 15));
console.log(greetUser("Hope", 20));
console.log(greetUser("Kabi", 23));


// Challenge 9: FizzBuzz
// Write a function called fizzBuzzCheck(number) that takes a number and returns:
// "Fizz" if the number is divisible by 3
// "Buzz" if the number is divisible by 5
// "FizzBuzz" if it’s divisible by both 3 and 5
// If it’s divisible by neither, return the number itself as a string
function fizzBuzzCheck(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5== 0) {
    return "Buzz";
  } else {
    return number;
  }
}
console.log(fizzBuzzCheck(9));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(30));
console.log(fizzBuzzCheck(7));


// Challenge 10: Perimeter 2
// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle
function perimeter2(letter, num) {
  if (letter === "s") {
    return num * 4;
  } else if (letter === "c") {
    return num * 6.28;
  } else {
    return "Wrong input!";
  }
}
console.log(perimeter2("s", 10));
console.log(perimeter2("c", 2));



