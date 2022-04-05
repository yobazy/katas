const checkAir = function (samples, threshold) {
  let total = 0
  let dirty = 0
  for (let element of samples)  {
    total += 1;
    if (element === 'dirty')  {
      dirty += 1;
    }
  }
  pollut = dirty / total;
  if (pollut > threshold)  {
    return 'Polluted'
  } else {
    return 'Clean'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))