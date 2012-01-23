As it turns out, you can store 33 ternary digits quite comfortably into a
single JavaScript Number, using `parseInt` and `toString` for conversion. (This
is because 53 bits of precision can store 33 ternary digits.) What can we do
with 33 digits? It's enough to fit 6x5 Go at the largest... so perhaps training
an SDM to play 5x5 Go is an adequate starting point for a tech demo?

Even simpler, we might try to teach it Tic-Tac-Toe and see how well that goes.
If it's successful, then we might have a shot. Tic-Tac-Toe fits in a short (16
bits), thus making life pretty simple.
