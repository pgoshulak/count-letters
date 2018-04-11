var countLetters = (str) => {
  var letters = {}
  // Count the letters
  for (var char of str) {
    // Check if char is counted already
    if (letters[char] > 0) {
      letters[char]++
    } else {
      letters[char] = 1
    }
  }

  // return object with letter:count pairs
  return letters
}

console.log(countLetters(process.argv[2]))