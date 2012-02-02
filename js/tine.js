function Tine (rate, decay, freq) {
  var dt = freq * 2 * Math.PI / rate

  this.a = Math.cos (dt)
  this.b = Math.sin (dt)
  this.decay = Math.exp (-1 / (decay * rate))
  this.cos = 1
  this.sin = 0
  this.amplitude = 0
}

Tine.prototype.strike = function () {
  this.cos = 1
  this.sin = 0
  this.amplitude = 1
}

Tine.prototype.next = function () {
  var s = this.sin

  this.sin = this.b * this.cos + this.a * s
  this.cos = this.a * this.cos - this.b * s

  s *= this.amplitude
  this.amplitude *= this.decay

  return s
}
