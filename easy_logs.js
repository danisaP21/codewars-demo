// Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: log⁡XA+log⁡XB \log_XA + \log_XB logX​A+logX​B.

function logs(x, a, b) {
  //your code here
  return Math.log(a * b) / Math.log(x);
}
