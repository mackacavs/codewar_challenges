function vowelsBack(string) {
  mainConsonents = ['b', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q']
  consonentsPassZ = ['r', 's', 'w', 'x', 'y', 'z']
  vowels = ['u']
  cOrO = ['c', 'o']
  returnedString = ''
  for (i = 0; i < string.length; i++) {
    if (mainConsonents.includes(string[i])) {
      ascii = string[i].charCodeAt(0) + 9
    } else if (consonentsPassZ.includes(string[i])) {
      ascii = string[i].charCodeAt(0) + 9 - 26
    } else if (vowels.includes(string[i])) {
      ascii = string[i].charCodeAt(0) - 5
    } else if (cOrO.includes(string[i])) {
      ascii = string[i].charCodeAt(0) - 1
    } else if (string[i] === 'd' || string[i] === 'e') {
      ascii = 97
    } else if (string[i] === 'a') {
      ascii = string[i].charCodeAt(0) - 5 + 26
    } else {
      ascii = string[i].charCodeAt(0)
    }
    returnedString += String.fromCharCode(ascii)

  }

  return returnedString
}
