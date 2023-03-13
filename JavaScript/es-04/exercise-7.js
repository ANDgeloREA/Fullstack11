function sumUntil(maxValue) {
  let output = 0;
  for (i = 0; i <= maxValue; i++) {
    output += i;
  }
  return output;
}

console.log(sumUntil(5));