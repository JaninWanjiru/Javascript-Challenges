// Challenge 1: Return the sum of two numbers
// Create a function called addition that takes two numbers as arguments and returns their sum.
function addition(a, b) {
  return(a + b);
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

console.log(isNegative(-23));
console.log(isNegative(55));


// Challenge 5: Can I drive
// Write a function that takes in a person's name and age. If they're 18 or older, return a message like 'Alice is old enough to drive.' If they're younger, return 'Bob is not old enough to drive yet.'
function canDrive(name, age) {
   if (age >= 18) {
     return `${name} is old enough to drive`;
   } else {
     return `${name} is not old enough to drive yet`;
   }
 }

canDrive("Jane", 22);
canDrive("June", 12);


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

console.log(findLargest(5, 9, 3));


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
console.log(`Your BMI is - ${calculateBMI(68, 1.75)}`);
console.log(`Your BMI is - ${calculateBMI(85, 1.8)}`);


// Challenge 8: Greeting based on time
// Write a function called greetUser(name, hour) that returns a personalized greeting based on the hour of the day.

function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    return `Good morning, ${name}!`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good afternoon, ${name}!`;
  } else if (hour >= 18 && hour <= 21) {
    return `Good evening, ${name}!`;
  } else {
    return `Good night, ${name}!`;
  } 
}

console.log(greetUser("Alice", 9));
console.log(greetUser("Alice", 15));
console.log(greetUser("Alice", 20));
console.log(greetUser("Alice", 1));


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
console.log(fizzBuzzCheck(3));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(15));
console.log(fizzBuzzCheck(7));


// Challenge 10: Perimeter 2
// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle
function perimeter2(letter, num) {
  if (letter === "s") {
    return num * 4;
  } else if (letter === "c") {
    return num * 6.28;
  } else {
    return number;
  }
}
console.log(perimeter2("s", 7));
console.log(perimeter2("c", 4));


// Challenge 11: Sum of Even Numbers
// Write a function called sumEvenNumbers(n) that takes a number n and returns the sum of all even numbers from 1 up to and including n.
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumEvenNumbers(6));


// Challenge 12: Multiply by Itself
// Write a function called powerUp(num, times) that takes two numbers and returns the result of multiplying num by itself times times using only a loop and arithmetic operators (no Math.pow() allowed).
function powerUp(num, times) {
  let result = 1;
  for (let i=1; i<=times; i++){
    result = result*num;
  }
  return result;
}

console.log(powerUp(2, 3));
console.log(powerUp(5, 0));


// Challenge 13: Factorial Calculator
// Write a function called factorial(n) that takes a non-negative integer n and returns the factorial of n — that’s the product of all positive integers from 1 up to n. By definition, factorial of 0 is 1.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));



// Challenge 14: Multiple Sum
// Write a function called sumMultiples(n, divisor) that returns the sum of all numbers from 1 up to n that are divisible by divisor.
function sumMutiples(n, divisor) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(sumMutiples(10, 2));



// Challenge 15: Sum of Digits
// Write a function called sumDigits(num) that takes a positive integer and returns the sum of its digits.
function sumDigits(num) {
    let sum = 0;
    while(num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumDigits(123));
