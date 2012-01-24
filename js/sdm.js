function sdmReset (arr) {
  var i = arr.length

  while (i--)
    arr[i] = 0
}

function registerPut (arr, offset, value, bits) {
  while (bits)
    arr[--offset] += bit (value, --bits) ? 1 : -1
}

function registerGet (arr, offset, accumulator) {
  var i = accumulator.length

  while (i)
    accumulator[--i] += arr[--offset]
}

function sdmPut (arr, key, value, bits, range) {
  var seed = [
        0.76758391689509150,
        0.54703062842600050,
        0.08701058942824602,
        1
      ],
      i

  for (i = Math.floor (arr.length / bits) * bits; i; i -= bits)
    if (distance (key, random (seed, bits)) <= range)
      registerPut (arr, i, value, bits)
}

function sdmGet (arr, key, bits, range) {
  var accumulator = new Array (bits),
      seed = [
        0.76758391689509150,
        0.54703062842600050,
        0.08701058942824602,
        1
      ],
      i

  sdmReset (accumulator)

  for (i = Math.floor (arr.length / bits) * bits; i; i -= bits)
    if (distance (key, random (seed, bits)) <= range)
      registerGet (arr, i, accumulator)

  return pack (accumulator)
}
