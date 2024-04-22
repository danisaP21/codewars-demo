// We've got a very long string, containing a bunch of User IDs. This string is a listing, which seperates each user ID with a comma and a whitespace ("' "). Sometimes there are more than only one whitespace. Keep this in mind! Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! Some stupid student edited the string and added some hashtags (#). User IDs containing hashtags are invalid, so these hashtags should be removed!
// Task

//     Remove all hashtags
//     Remove the leading "uid" from each user ID
//     Return an array of strings --> split the string
//     Each user ID should be written in only lowercase characters
//     Remove leading and trailing whitespaces

// SOLUTION 1
function getsUserId(arr) {
  let newStr = arr.split(",");
  let completeArr = [];

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].includes("uid") && newStr[i].includes("#")) {
      let part = newStr[i].replace("uid", "");
      part = part.split("#").join("").toLowerCase().trim();

      completeArr.push(part);
    } else if (newStr[i].includes("uid")) {
      let part = newStr[i].replace("uid", "").toLowerCase().trim();

      completeArr.push(part);
    } else if (newStr[i].includes("#")) {
      let part = newStr[i].split("#").join("").toLowerCase().trim();

      completeArr.push(part);
    } else {
      let part = newStr[i].toLowerCase().trim();

      completeArr.push(part);
    }
  }
  return completeArr;
}
