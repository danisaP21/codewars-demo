// Given an integer n, find two integers a and b such that:

// A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.

// You will return the digitSum(a) + digitsum(b).

// For example:
// solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.

// n will not exceed 10e10.

// SOLUTION 1
function solve(n) {
  function digitSum(value) {
    return value
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  }

  const a = Number(new Array(n.toString().length - 1).fill(9).join(""));
  const b = n - a;

  if (isNaN(digitSum(a) + digitSum(b))) return 0;
  return digitSum(a) + digitSum(b);
}
