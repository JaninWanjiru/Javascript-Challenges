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
  let properties = Object.values(object);
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
function average(array) {
  let sum = 0, items = array.length;
    if(items === 0) {
        return 0;
    } else {
        for(let i = 0; i < items; i++) {
            sum += array[i];
        }
    }
    
    return sum / items;
}
console.log(average([2, 4, 6, 8]));
console.log(average([]));


// Challenge 11: Linear Search
function linearSearch(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5, 3, 7, 1, 4], 7));
console.log(linearSearch([5, 3, 7, 1, 4], 10));


// Challenge 12: Reverse Linear Search
function reverseLinearSearch(array, value){
  let lastOccurrence = -1;
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      lastOccurrence = i; // this will keep updating the value until we come across the last value
    }
  }
  return lastOccurrence;
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10))


// Challenge 13: Linear Search All Indices
function linearSearchAll(array, value) {
  let valueAppearance = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] == value){
      valueAppearance.push(i);
    }
  }
  return valueAppearance;
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7))
console.log(linearSearchAll([5, 3, 7, 1, 4], 10))


// Challenge 14: Count Occurrences
function countOccurences(strings) {
  let object = {};
    for(let i = 0; i < strings.length; i++) {
        let item  = strings[i];

        if(object[item] === undefined) {
            object[item] = 1;
        } else {
            object[item] += 1;
        }
    }
    return object;
}
console.log(countOccurences(["apple", "banana", "apple", "orange", "banana", "apple"]))


// Challenge 15: Remove Duplicates
function removeDuplicates(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray[array[i]]) newArray[array[i]] = array[i];
  }
  return Object.values(newArray);
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))


// Challenge 16: Most Frequent
function mostFrequent(array) {
  let occurrences = {};
    let count = 0;
    let mostAppearance;

    for (let i = 0; i < array.length; i++) {
        if (occurrences[array[i]]) {
            occurrences[array[i]]++;
        } else {
            occurrences[array[i]] = 1;
        }

        if (occurrences[array[i]] > count) {
            count = occurrences[array[i]];
            mostAppearance = array[i];
        }
    }
    return mostAppearance;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]))
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]))