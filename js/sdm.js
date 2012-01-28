"use strict"

function sdmReset (arr, bits, range) {
  var i = arr.length

  arr[--i] = range
  arr[--i] = bits

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

function sdmPut (arr, key, value) {
  var i = arr.length,
      range = arr[--i],
      bits = arr[--i],
      seed = [
        0.76758391689509150,
        0.54703062842600050,
        0.08701058942824602,
        1
      ]

  for (i = Math.floor (i / bits) * bits; i; i -= bits)
    if (distance (key, random (seed, bits)) <= range)
      registerPut (arr, i, value, bits)
}

function sdmGet (arr, key) {
  var i = arr.length,
      range = arr[--i],
      bits = arr[--i],
      accumulator = new Array (bits),
      seed = [
        0.76758391689509150,
        0.54703062842600050,
        0.08701058942824602,
        1
      ]

  sdmReset (accumulator, 0, 0) // HACK

  for (i = Math.floor (i / bits) * bits; i; i -= bits)
    if (distance (key, random (seed, bits)) <= range)
      registerGet (arr, i, accumulator)

  return pack (accumulator)
}
