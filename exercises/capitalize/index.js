// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Create 'result' string which is the first character of the input string capitalized
  let result = str[0].toUpperCase()
  // For each character in the string
  for (let i = 1; i < str.length; i++) {
    // IF the character to the left is a space
    if (str[i - 1] === ' ') {
      // Capitalize it and add it to 'result'
      result += str[i].toUpperCase()
    } else {
      // ELSE
      result += str[i]
      // Add it to 'result'
    }
  }
  return result
}

module.exports = capitalize

// SOLUTION 1
// function capitalize(str) {
//   // make an empty array 'words'
//   const words = []
//   // split the input string by spaces to get an array
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//     // for each word in the array
//     // uppercase the first letter of the word
//     // join the first letter with rest of the string
//     // push result into 'words' array
//   }
//   // join 'words' into a string and return it
//   return words.join(' ')
// }
