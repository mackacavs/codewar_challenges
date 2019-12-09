function testIt(a, b) {
  const uniqSetA = new Set(a)
  const backToArrayA = [...uniqSetA]
  const uniqSetB = new Set(b)
  const backToArrayB = [...uniqSetB]
  
  return backToArrayA.concat(backToArrayB).sort(sortNumber)

}

function sortNumber(a, b) {
  return a - b;
}

