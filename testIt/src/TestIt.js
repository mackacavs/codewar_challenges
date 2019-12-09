function testIt(a, b) {
  const uniqSetA = new Set(a)
  const backToArrayA = [...uniqSetA]
  const uniqSetB = new Set(b)
  const backToArrayB = [...uniqSetB]
  return backToArrayA.concat(backToArrayB).sort((a, b) => a - b)

}