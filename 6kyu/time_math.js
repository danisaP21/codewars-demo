// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

// timeMath('01:24:31', '+', '02:16:05') === '03:40:36'
// timeMath('01:24:31', '-', '02:31:41') === '22:52:50'

// SOLUTION 1
function timeMath(time1, op, time2) {
  function toSeconds(time) {
    let timeArr = time.split(":").map(Number);
    let res = timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2];
    return res;
  }

  function toHour(seconds) {
    let hour = seconds / 3600;
    let fullHour = Math.floor(hour);
    let minutes = (hour - fullHour) * 60;
    let fullMinutes = Math.floor(minutes);
    let fullSeconds = Math.round((minutes - fullMinutes) * 60);
    let res = `${fullHour}:${fullMinutes}:${fullSeconds}`;
    return res.toString();
  }

  if (op === "+") {
    return toHour(toSeconds(time1) + toSeconds(time2));
  } else if (op === "-") {
    let time1Res = toSeconds(time1);
    let time2Res = toSeconds(time2);
    let timeSub = time1Res - time2Res;
    let res = timeSub < 0 ? timeSub + 86400 : timeSub;
    res = toHour(res);
    return res.toString();
  }
}

console.log(timeMath("13:48:52", "-", "13:47:53"));
