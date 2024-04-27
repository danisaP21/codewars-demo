function reverseFizzBuzz(s) {
  const words = s.split(" ");
  console.log(words);
  const n = words.length;
  console.log(n);

  let count = 0;
  let sequenceStart = true;
  for (let i = 1; i <= 100; i++) {
    // Assuming FizzBuzz sequence till 100
    if (count === n) break;

    if (
      (i % 3 === 0 && i % 5 === 0 && words[count] === "FizzBuzz") ||
      (i % 3 === 0 && words[count] === "Fizz") ||
      (i % 5 === 0 && words[count] === "Buzz") ||
      (i % 3 !== 0 && i % 5 !== 0 && i.toString() === words[count])
    ) {
      if (sequenceStart === true) {
        sequenceStart = i - n + 2;
      }
      count++;
    } else {
      count = 0;
      sequenceStart = true;
    }
  }

  const result = [];
  for (let i = sequenceStart; i < sequenceStart + n; i++) {
    result.push(i);
  }

  return result;
}