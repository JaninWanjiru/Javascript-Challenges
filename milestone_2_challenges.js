// Challenge 1: Sum of Positives
function sumOfPositives(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumOfPositives([1, -4, 7, 12])); 
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));   


// Challenge 2: Find Maximum Value
function findMax(array) {
    let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(findMax([2, 10, 15, 9, 3]));


// Challenge 3: Election Winner
function findWinner(candidates) {
    let winner = candidates[0];
    for(let i=0; i < candidates.length; i++) {
        if(candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    return winner;
}

const candidates = [
  { name: "Christy", votes: 50 },
  { name: "Benard", votes: 66 },
  { name: "Calvin", votes: 85 }
];

console.log(findWinner(candidates)); 


// Challenge 4: Longest Word
function findLongestWord(strings) {
  let longest = strings[0];
  for(let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i]; 
    }
  }
  return longest;
}
const strings = ["apple", "banana", "grapefruit", "pear", "plum"];

console.log(findLongestWord(strings));


// Challenge 5: Count Properties
function countProperties(object) {
  const keys = Object.keys(object);
  let count = keys.length;
  return count
}
const objectExample = { name: "Alice", age: 25, city: "Paris" };

console.log(countProperties(objectExample));


// Challenge 6:Filter by Length
function filterByLength(strings, minLength) {
  const newArray = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minLength) {
      newArray.push(strings[i]);
    }
  }
  return newArray;
}
const string = ["tree", "house", "cat", "mountain", "sun"];

console.log(filterByLength(string, 4));


// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(myArray) {
  let sumOfValues = 0;
  for(let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
      sumOfValues = sumOfValues + myArray[i];
    }
  }
  return sumOfValues;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));


// Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenSum += numbers[i];
    } else {
      oddSum += numbers[i];
    }
  }

  return evenSum - oddSum;
}

console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));


// Challenge 9: Count Truthy
function countTruthy(object) {
  let count = 0;
  let properties = Object.properties(object);
  for (let i = 0; i < properties.length; i++){
    if(properties[i] == "null" || properties[i] == "0" || properties[i] == "false" || properties[i] == ""){
      continue
    } else {
      count++;
    }
  }
  return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }))


// Challenge 10: Average of Numbers

