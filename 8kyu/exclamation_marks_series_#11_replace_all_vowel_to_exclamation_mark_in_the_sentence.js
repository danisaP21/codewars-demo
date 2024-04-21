// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// SOLUTION 1
function replace(s) {
  let vowel = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  let wordArr = s.split("");
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (wordArr[i] === vowel[j]) {
        wordArr[i] = "!";
      }
    }
  }
  return wordArr.join("");
}
