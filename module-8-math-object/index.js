

// * Math.PI: Mengembalikan nilai π (3.14159...).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).
//

//Metode Math
//abs = absolute
//pow = power
//sqrt = akar 2 
//cbrt = akar 3 
//
console.log(Math.PI)
console.log(Math.E)

let number = -7
let absolute = Math.abs(number)

const update = absolute

let number2 = 8
let power = Math.cbrt(number2)
const update2 = power

//let number 3 = [1, 5, 8, 12];
let maxNumber = Math.max(1, 4, 8, 123);
const update3 = maxNumber

//let min number
let minNumber = Math.min(5, 1, 90, 0);


console.log(update)
console.log(update2)
console.log(update3)
console.log(minNumber)

//pembulatan angka 
//round pembulatan normal 
//ceil pembulatan 
//floor pembulatan 
//trunc pembulatan 

let float1 = Math.round(3.6)
let float2 = Math.ceil(4.000001)
let float3 = Math.floor(3.9)
let float4 = Math.trunc(4.9999)

console.log(float1)
console.log(float2)
console.log(float3)
console.log(float4)

//Pembuatan Random number
let randomNumber = Math.round(Math.random()*100)

console.log(randomNumber)
