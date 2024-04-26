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
function reverse(str) {
  let newStr = str.split(" ");
  let filterNewStr = newStr.flatMap((x) =>
    x === "Fizz" || x === "Buzz" || x === "FizzBuzz" ? x : Number(x)
  );
  console.log(filterNewStr);
  let finalArr = [];

  if (filterNewStr.filter((o) => typeof o === "number")) {
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
  } else {
  }
  return finalArr;
}

// function reverse(str) {
//   let newStr = str.split(" ");
//   let filterNewStr = newStr.flatMap((x) =>
//     x === "Fizz" || x === "Buzz" || x === "FizzBuzz" ? x : Number(x)
//   );

//   let finalArr = [];
//   let curEl = 1;
// }

console.log(reverse("Fizz Buzz")); // Output: [9, 10]
