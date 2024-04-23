// For a variable, x, that may have different values, the geometric mean is defined as:
// G=x1⋅x2⋅…⋅xnnG = \sqrt[\large{n}]{x_1 \cdot x_2 \cdot \ldots \cdot x_n} G=nx1​⋅x2​⋅…⋅xn​
// ​

// Suposse that you have to calculate the geometric mean for a research where the amount of values of x is rather small.

// Implement the function geometric_meanI(), (geometricMeanI javascript)that receives an array with the different values of the variable and outputs the geometric mean value.

// The negative values and strings will be discarded for the calculations.

// Nevertheless if the amount of total invalid values is too high, the function will return 0 (Nothing in Haskell). The tolerance for invalid values of the variable will be as follows:

// amount of entries      maximum invalid entries
//   2 - 10                       1
//   From 11 and above       10 % of total of entries

// SOLUTION 1
function geometric(arr) {
  if (arr.some((x) => x < 0) && arr.some((x) => typeof x === "string"))
    return 0;

  let sumNegative = 0;
  let sumString = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < 0) sumNegative += 1;
    if (typeof arr[j] === "string") sumString += 1;
  }

  let total = sumNegative + sumString;
  let maxInvalid = Math.floor((total / arr.length) * 100);

  function geometricMean(arr) {
    let newArr = arr.filter((x) => x >= 0);
    newArr = newArr.filter((e) => typeof e === "number");
    let sum = 1;

    for (let i = 0; i < newArr.length; i++) {
      sum *= newArr[i];
    }

    return Math.pow(sum, 1 / newArr.length);
  }

  if (arr.length > 10 && maxInvalid >= 10) {
    return 0;
  } else {
    return geometricMean(arr);
  }
}
