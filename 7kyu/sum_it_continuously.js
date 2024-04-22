// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]

// SOLUTION 1
function prefix(arr) {
  if (arr.length === 0) return [];

  let prefixSum = [];
  prefixSum[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  return prefixSum;
}

console.log(prefix([1, 2, 3, 4, 5]));
