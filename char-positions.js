var charPositions = (str) => {
  var positions = {}
  // Loop through the letters
  for (var i in str) {
    var char = str[i]
    if (char === ' ') continue
    // Check if char is counted already
    if (positions[char] && positions[char].length > 0) {
      positions[char].push(i)
    } else {
      positions[char] = [i]
    }
  }

  // return object with letter:[indices] pairs
  return positions
}

console.log(charPositions(process.argv[2]))

/*
charPositions('abca') = {
  a: [0,3],
  b: [1],
  c: [2]
}
*/