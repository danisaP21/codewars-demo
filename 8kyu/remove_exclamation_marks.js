// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// SOLUTION 1
function remove(w) {
  let wordArr = w.split("");

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === "!") {
      wordArr[i] = "";
    }
  }
  return wordArr.join("");
}
