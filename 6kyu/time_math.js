// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

// timeMath('01:24:31', '+', '02:16:05') === '03:40:36'
// timeMath('01:24:31', '-', '02:31:41') === '22:52:50'

// SOLUTION 1
function timeMath(time1, op, time2) {
  let timeOne = time1.split(":").map(Number);
  let timeTwo = time2.split(":").map(Number);

  let hour, minute, seconds;
  if (op === "+") {
    hour = (timeOne[0] + timeTwo[0]).toString().padStart(2, "0");
    minute = (timeOne[1] + timeTwo[1]).toString().padStart(2, "0");
    seconds = (timeOne[2] + timeTwo[2]).toString().padStart(2, "0");
    return `${hour}:${minute}:${seconds}`;
  } else if (op === "-") {
  }
}

console.log(timeMath("01:24:31", "+", "02:16:05"));
