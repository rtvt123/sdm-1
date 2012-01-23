function alea (seed) {
  var t = seed[2] * 2091639 + seed[3] * 2.3283064365386963e-10

  seed[2] = seed[1]
  seed[1] = seed[0]
  return (seed[0] = t - (seed[3] = t | 0)) * 4294967296
}

function random (seed, bits) {
  return bits > 32 ? (alea (seed) >>> (64 - bits)) * 4294967296 + alea (seed) : alea (seed) >>> (32 - bits)
}
