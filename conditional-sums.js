const conditionalSum = function(values, condition) {
  let evenArr = []
  let oddArr = []
  for (let element of values) {
    if (element % 2 == 0) {
      evenArr.push(element)
    } else {
      oddArr.push(element)
    }
  }
  if (condition === 'even')  {
    sumArr = evenArr
  } else  {
    sumArr = oddArr
  }
  let prev = 0
  let sum = 0
  for (let element of sumArr) {
    curr = element;
    sum = prev + curr;
    prev = sum;
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));