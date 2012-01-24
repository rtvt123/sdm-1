1.  JavaScript Numbers are defined as 64-bit IEEE floating-point numbers.
2.  64-bit IEEE floating-point numbers have 53 bits of significand precision.
3.  53 bits can encode up to 33 ternary digits.
4.  Therefore, we can store a ternary-digit vector of 33 cells in a single
    JavaScript Number. Furthermore, we can utilize JavaScript's `parseInt` and
    `toString` methods to convert between representations.

Many two-player abstract strategy games can be ternary-encoded, with the
following encoding:

*   0 represents an empty location on the board.
*   1 represents a location containing a black pawn.
*   2 represents a location containing a white pawn.

Therefore, it is trivial to encode games of these kinds that have fewer than
33 board locations into a single JavaScript Number. Examples of such games:

*   [Bear games](http://en.wikipedia.org/wiki/Bear_games)
*   [Checkers](http://en.wikipedia.org/wiki/English_draughts)
*   [Nine Men's Morris](http://en.wikipedia.org/wiki/Nine_Men%27s_Morris)
*   [Small-Board Go](http://senseis.xmp.net/?SmallBoardGo) (and Capture Go)
*   [Tic-Tac-Toe](http://en.wikipedia.org/wiki/Tic-tac-toe)
