function kicker(text, width, tick) {

  newText = " ".repeat(width) + text + " ".repeat(width)
  return newText.substr(tick % (text.length + width), width)
}
