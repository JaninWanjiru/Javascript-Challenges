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
