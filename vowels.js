const numberOfVowels = function(data) {
  // Put your solution here
  arr = data.split('');
  vowels = ['a', 'e', 'i', 'o', 'u']
  //if any element of arr is in vowelbank
  let sum = 0
  for (let element of arr)  {
    if (vowels.includes(element))  {
      sum += 1;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));