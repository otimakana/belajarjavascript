/* ⁡⁣⁢⁢⁡⁢⁣⁢𝗗𝗮𝘁𝗲 𝗢𝗯𝗷𝗲𝗰𝘁 𝗱𝗶 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁⁡⁡ */


// ⁡⁣⁣⁢Apa itu Date Object,⁡ ⁡⁣⁢⁢Date Object di JavaScript digunakan untuk bekerja dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal dan waktu.⁡

// ⁡⁣⁣⁢Membuat Date Object⁡

// Tanggal dan waktu saat ini
let now = new Date()

console.log(now)

// Menggunakan string 
let specificDate = new Date("August 20, 2024 10:30:00")
let rangeDate = now - specificDate 
console.log(rangeDate)

let howMuchDate = rangeDate / (1000*3600*24)
console.log(Math.round(howMuchDate))
//console.log(specificDate)
//console.log(rangeDate)


// Menggunakan parameter (tahun, bulan(dimulai dari 0 = Januari), hari, jam, menit, detik, milidetik)
let customDate = new Date(2024, 6, 20, 10,30)
console.log(customDate)

 // Bulan ke-8 (Agustus, karena bulan dimulai dari 0)

//Mengambil Informasi Tanggal dan Waktu 
let today = new Date()
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())
console.log(today.getTime())






//Mengatur Tanggal dan Waktu
let date = new Date()

// Mengatur tahun menjadi 2025
date.setFullYear(2025)


// Mengatur bulan menjadi Desember (11, karena bulan dimulai dari 0)
date.setMonth(11)


// Mengatur hari menjadi 25
date.setDate(29)
console.log(date)




//Perhitungan Waktu dengan Date Object
let startDate = new Date(2024, 7, 20, 10,30)
let endDate = new Date(2024, 8, 3, 10,30)

let diff = endDate - startDate
console.log(diff) //miliseconds

let diffIndays = diff / (1000 * 3600 * 24)
console.log(diffIndays)





