/*Operator Logika And && dan OR || */

/* && And menghasilkan true jika kedua yang dibandingan true
 * || OR menghasilkan true jika SALAH SATU true
 * ! NOT mengembalikan nilai boolean operator*/

//And && operator
//let a = true
//let b = false

//jika variable a lebih besar dari 3 maka tuliskan variable a lebih besar dari 3
let a = 5
const result = (a>3) && a + ' lebih besar dari 3'


// OR || operator
let c = true 
let d = false
let result2 = c || d

let num = 5
const result3 = (num > 5) || num + ' bukan merupakan angka 5'



// NOT ! operator
let x = true
let notResult = !x 

const update = notResult

console.log(update); 
