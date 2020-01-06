function nthSmallest(...arrays) {
  newArray = arrays.slice(0, -1)
  return newArray.flat().sort((a, b) => a - b)[(arrays.slice(-1)[0]) - 1]
}


