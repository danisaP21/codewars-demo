// FizzBuzz is often one of the first programming puzzles people learn. Now undo it with reverse FizzBuzz!

// Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

// Notes:

//     If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
//     All numbers in the sequence will be greater than zero.
//     You will never receive an empty sequence.

// Examples

// reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

// SOLUTION 1
function reverseFizzBuzz(s) {
  function checkForNumber(s) {
    let newStr = s
      .split(" ")
      .flatMap((o) =>
        o === "Fizz" || o === "Buzz" || o === "FizzBuzz" ? o : Number(o)
      );
    let finalArr = [];

    for (let i = 0; i < newStr.length; i++) {
      if (typeof newStr[i] === "string") {
        if (typeof newStr[i + 1] === "number") {
          newStr[i] = newStr[i + 1] - 1;
          finalArr.push(newStr[i]);
        } else {
          finalArr.push(Number(newStr[i]));
        }
      } else if (typeof newStr[i + 1] === "string") {
        if (typeof newStr[i] === "number") {
          newStr[i + 1] = newStr[i] + 1;
          finalArr.push(newStr[i]);
        } else {
          finalArr.push(Number(newStr[i]));
        }
      } else {
        finalArr.push(newStr[i]);
      }
    }
    return finalArr;
  }

  function checkForString(s) {
    const words = s.split(" ");
    const n = words.length;

    let count = 0;
    let sequenceStart = true;
    for (let i = 1; i <= 100; i++) {
      if (count === n) break;

      if (
        (i % 3 === 0 && i % 5 === 0 && words[count] === "FizzBuzz") ||
        (i % 3 === 0 && words[count] === "Fizz") ||
        (i % 5 === 0 && words[count] === "Buzz")
      ) {
        if (sequenceStart === true) {
          sequenceStart = i;
          console.log(count);
        }
        count++;
        console.log(count);
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

  let newString = s.split(" ");
  let filterNewString = newString.flatMap((o) =>
    o === "Fizz" || o === "Buzz" || o === "FizzBuzz" ? o : Number(o)
  );
  let ifNumber = filterNewString.some((h) => typeof h === "number");

  if (ifNumber) {
    return checkForNumber(s);
  } else {
    return checkForString(s);
  }
}
