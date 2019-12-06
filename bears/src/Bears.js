function bears(x, s) {
  var pairs = s.match(/(8B)|(B8)/g) || [];
  return [pairs.join(""), pairs.length >= x];

}