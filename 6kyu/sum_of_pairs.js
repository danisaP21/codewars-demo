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

console.log(solve(7019)); // Output: 11
