//Tipe data primitive
/**Tipe Data PRimitive disimpan di stack memory */

//string
const nama = 'Otimtamo'
const negara = "Indonesia"
const domisili = `${nama} Banten`


//typedata number (bilang bulat)
const umur = 24

//boolean (true and false)
const isMirip = true

//typedata undifine
let x;
x = "rANGGO";

//typedata null
const person = null




//Tipe data Referensi
//Array
const hobby = [
    "Memancing",
    26,
    "Bangun Tidur"
]
//Object
const orang = {
    nama : 'Rangga',
    umur : 24,
    negara : 'Indonesia',
}   
//Function
function sayHello() {
    return "HEllow Koding JElek"
}



const output = sayHello()
console.log(output, typeof output); 

/**Perbedaan tipe data primitive dan refernces */

//tipe data primitive
let a = 10;
let b = a

a = 20

console.log(b);

//tipe data reference
let lesson = {
    nama : "Tama",
}
let lesson2 = lesson //akan menyimpan reference yang sama dengan lesson
lesson.nama = "Otimtamo"

console.log(lesson2);
