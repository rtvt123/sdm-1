"use strict"

function draw (id, bits) {
  var data = id.data,
      i = data.length,
      j = i * 0.25

  while (j--) {
    data[--i] = bit (bits, j) * 255
    i -= 3
  }
}
