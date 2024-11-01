//implicit conversion (secara otomatis js akan menyesuaikan type data)

 let result = "5" - 10

//falsy values 0, null, undefine 
let bool = !0

//explicite conversion
let num = 100

let string = num.toString();

let num2 = "100"

let string2 = parseInt(num2);
 
let bool2 = Boolean("")
const update = bool2
console.log(update, typeof update);
