/*If Else Statement
 *if (kondisi){
 //kode yang akan dijalankan
 } else {
 //kode yang akan dijalankan
 }*/

let age = 18;
let sex = "Perempuan";

if ((age>=18) && (sex == "Perempuan")) {
  console.log("Bisa membuat ktp")
} else {
  console.log("Belum bisa membuat ktp")
}

//if else dengan beberapa grade 
let score = 83;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80){
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade E");
}

//ada if else di dalam if (nested if else)
let num = 11

if (num>0){
  if ( num % 2 ===0){
    console.log("Bilangan positif dan genap");
  } else {
    console.log("bilangan positif dan ganjil");
  }
} else {
  console.log("Bukan bilangan positif");
}
