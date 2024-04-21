// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// SOLUTION 1
function cockroach(n) {
  return Math.floor(n * (100000 / 3600));
}
