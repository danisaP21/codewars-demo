// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

// Task

// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.
// Example

// For formula = [1,3,7], The output should be true.
// For formula = [7,1,2,3], The output should be false.
// For formula = [1,3,5,7], The output should be false.
// For formula = [1,5,6,7,3], The output should be true.
// For formula = [5,6,7], The output should be true.
// For formula = [5,6,7,8], The output should be true.
// For formula = [6,7,8], The output should be false.
// For formula = [7,8], The output should be true.

// SOLUTION 1
function isValid(formula) {
  if (formula.length <= 1) return false;

  if (formula.includes(7) || formula.includes(8)) {
    for (let i = 0; i < formula.length; i++) {
      if (
        (formula[i] === 1 && formula[i + 1] === 2) ||
        (formula[i] === 2 && formula[i + 1] === 1)
      )
        return false;
      if (
        (formula[i] === 3 && formula[i + 1] === 4) ||
        (formula[i] === 4 && formula[i + 1] === 3)
      )
        return false;
      if (formula[i] === 5) {
        if (formula.includes(6)) {
          return true;
        } else {
          return false;
        }
      }
      if (formula[i] === 6) {
        if (formula.includes(5)) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}
