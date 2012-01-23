var table = new Array (256),
    i = 0

table[i] = 0
while (++i !== 256)
  table[i] = (i & 1) + table[i >>> 1]

function bit (n, i) {
  return (i < 32 ? n >>> i : Math.floor (n / 4294967296) >>> (i - 32)) & 1
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

function distance (a, b) {
  var high = Math.floor (a / 4294967296) ^ Math.floor (b / 4294967296),
      low = a ^ b

  return table[low & 255] + table[(low >>> 8) & 255] +
         table[(low >>> 16) & 255] + table[low >>> 24] + table[high & 255] +
         table[(high >>> 8) & 255] + table[high >>> 16]
}
