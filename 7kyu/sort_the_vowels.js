// Write a function which takes a input string s and return a string in the following way:

//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

//     List all the Vowels on the right side of |
//     List every character except Vowels on the left side of |
//     for the purpose of this kata, the vowels are : a e i o u
//     Return every character in its original case
//     Each line is seperated with \n
//     Invalid input ( undefined / null / integer ) should return an empty string

// SOLUTION 1
function sortVowels(s) {
  //code
  if (typeof s === "undefined" || typeof s === "number") return "";
  if (s === " ") return ` |`;

  let newStr = s.split("");
  let vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  let part = "";

  for (let i = 0; i < newStr.length; i++) {
    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (newStr[i] === vowels[j]) {
        part += `|${newStr[i]}\n`;
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      part += `${newStr[i]}|\n`;
    }
  }
  return part.trim();
}
