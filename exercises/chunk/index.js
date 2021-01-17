// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 2
function chunk(array, size) {
  // create empty 'chunked' array
  const chunked = []
  // create 'index' start at 0
  let index = 0
  // While index is less than array.length
  while (index < array.length) {
    // Push a slice of length 'size' from 'array' into 'chunked'
    chunked.push(array.slice(index, index + size))
    // Add 'size' to 'index'
    index += size
  }
  return chunked
}

module.exports = chunk

//SOLUTION 1
// function chunk(array, size) {
//     // create empty array to hold chunks called 'chunked'
//     const chunked = []
//     // for each element in the unchunked array
//     // retrieve last element in chunked
//     for (let element of array) {
//       const last = chunked[chunked.length - 1]
//       // If last element does not exist, or if it's length is equal to chunk size
//       // Push a new chunk into 'chunked' with the current element
//       if (!last || last.length === size) {
//         chunked.push([element])
//       } else {
//         // Else add the current element into the chunk
//         last.push(element)
//       }
//     }
//     return chunked
//   }
