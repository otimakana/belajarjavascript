/*Numbers
 * Mengintepretasikan angka di dalam javascript
 * int (integer) merupakan bilangan bulat
 * float merupakan desimal
 * NaN Not A Number tidak didefinisikan sebagai Numbers
 * Positive_Infinity
 * Negative_Infinity*/

let bilanganBulat = 2
let bilanganDesimal= 35.5
let bilanganNegatif = -90
let infinityValue = Infinity  

//metode bawaan number JS 

//toString() mengubah angka menjadi toString()
let number = 2.96
let toStringNumber = number.toString()

//to fixed floating ke koma terkecil toFixed();
let fixedNumber = number.toFixed(1);

//to precision digits, toPrecision()
let floating = 3.56565737
let toPrecisionNumber = floating.toPrecision(4)

//mengubah string menjadi integer dengan parseInt();
let textNumber = "3456123"
let textToInteger = parseInt(textNumber);




const update = textToInteger;

console.log(update, typeof update)
