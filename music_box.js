function MusicBox (rate, decay, freqs) {
  var i = freqs.length

  this.tines = new Array (i)

  while (i--)
    this.tines[i] = new Tine (rate, decay, freqs[i])
}

MusicBox.prototype.strike = function (i) {
  this.tines[i].strike ()
}

MusicBox.prototype.next = function () {
  var i = this.tines.length,
      sum = 0

  while (i--)
    sum += this.tines[i].next ()

  return sum
}
