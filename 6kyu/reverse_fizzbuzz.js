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
    let newStr = s.split(" ");
    let filterNewStr = newStr.flatMap((o) =>
      o === "Fizz" || o === "Buzz" || o === "FizzBuzz" ? o : Number(o)
    );

    let finalArr = [];

    for (let i = 0; i < filterNewStr.length; i++) {
      if (
        typeof filterNewStr[i] === "string" &&
        typeof filterNewStr[i + 1] === "number"
      ) {
        filterNewStr[i] = filterNewStr[i + 1] - 1;
        finalArr.push(filterNewStr[i]);
      } else if (
        typeof filterNewStr[i] === "string" &&
        typeof filterNewStr[i - 1] === "number"
      ) {
        filterNewStr[i] = filterNewStr[i - 1] + 1;
        finalArr.push(filterNewStr[i]);
      } else {
        finalArr.push(filterNewStr[i]);
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

console.log(reverseFizzBuzz("Fizz 76570 76571 76572 76573 76574")); // Output: [9, 10]

// function reverseFizzBuzz(s) {
//   const words = s.split(" ");
//   console.log(words);
//   const n = words.length;
//   console.log(n);

//   let count = 0;
//   let sequenceStart = true;
//   for (let i = 1; i <= 100; i++) {
//     if (count === n) break;

//     if (
//       (i % 3 === 0 && i % 5 === 0 && words[count] === "FizzBuzz") ||
//       (i % 3 === 0 && words[count] === "Fizz") ||
//       (i % 5 === 0 && words[count] === "Buzz") ||
//       (i % 3 !== 0 && i % 5 !== 0 && i.toString() === words[count])
//     ) {
//       if (sequenceStart === true) {
//         sequenceStart = i - n + 2;
//       }
//       count++;
//     } else {
//       count = 0;
//       sequenceStart = true;
//     }
//   }

//   const result = [];
//   for (let i = sequenceStart; i < sequenceStart + n; i++) {
//     result.push(i);
//   }

//   return result;
// }

// Test case
