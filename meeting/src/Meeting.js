function meeting(s) {
  let newArray = s.split(';').map(element => {
    newString = ''
    arrayByName = element.toUpperCase().split(':')
    newString += `(${arrayByName[1]}, `
    newString += `${arrayByName[0]})`

    return newString
  })
  return newArray.sort().join('')
}


