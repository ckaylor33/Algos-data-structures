// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// SOLUTION 2 - forEach
function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  let charArr = str.split('')

  charArr.forEach((char) => {
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      charMap[char]++
    }
  })
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = maxChar

// for of loop? forEach?
// if char isn't there assign value
// if char is there then add 1 to it

// SOLUTION 1 - forOf loop
// function maxChar(str) {
//     const charMap = {} // iterate through this
//     let max = 0 //if we find a char that has more uses than max; set max = to new value
//     let maxChar = '' //set this to the char responsible for the max number of uses

//     for (let char of str) {
//       if (charMap[char]) {
//         charMap[char]++
//       } else {
//         charMap[char] = 1
//       }
//     }
//     // char assigned the key inside the charMap object, not value (char becomes the different letters added to the object)
//     for (let char in charMap) {
//       if (charMap[char] > max) {
//         max = charMap[char]
//         maxChar = char
//       }
//     }
//     return maxChar
//   }
