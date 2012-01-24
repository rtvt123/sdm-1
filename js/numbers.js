"use strict"

function bit (n, i) {
  return (i < 32 ? n >>> i : (n / 4294967296) >>> (i - 32)) & 1
}

function pack (bits) {
  var i = bits.length,
      x = 0

  while (i--) {
    x *= 2

    if (bits[i] > 0)
      x++
  }

  return x
}

function count (i) {
  i -= ((i >>> 1) & 0x55555555)
  i = (i & 0x33333333) + ((i >>> 2) & 0x33333333)
  return (((i + (i >> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24
}

function distance (a, b) {
  var low = a ^ b,
      high = (a / 4294967296) ^ (b / 4294967296)

  return count (low) + (high && count (high))
}
