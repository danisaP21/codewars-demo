// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// SOLUTION 1
function sumArray(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let maxFound = false;
  let minFound = false;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === max && !maxFound) {
      maxFound = true;
      continue;
    }

    if (array[i] === min && !minFound) {
      minFound = true;
      continue;
    }

    sum += array[i];
  }
  return sum;
}
