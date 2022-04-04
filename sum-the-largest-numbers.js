const sumLargestNumbers = function(data) {
  let largeOne = 0
  let largeTwo = 0
  for (let element of data) {
    if (element > largeOne) {
      largeTwo = largeOne
      largeOne = element
    } else if (element > largeTwo && element < largeOne)  {
      largeTwo = element
    }
  }
  return largeOne + largeTwo
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));