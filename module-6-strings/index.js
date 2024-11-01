/*String dalam js*/

//bisa backtic ``
//bisa quote ""
//bisa singlequote ''

//length (panjang karakter)
let txt = "Hello"
let panjangKarakter = txt.length

//toUpperCase(menjadikan huruf besar semua)
let hurufBesar = txt.toUpperCase()

//toLowerCase(Menjadikan huruf kecil semua)
let hurufKecil = txt.toLowerCase();

//trim (menghapus spasi di dalam karakter)
let txt2 = "   KIANO ALKANA PRATAMA   ";
let spasiKarakter = txt2.trim();

//menggabungkan string concat();
let firstName = "Kiano";
let sureName = "Alkana";
let lastName = "Pratama";

let fullName = firstName + " " + sureName + " " + lastName;

//menggabungkan dengan backtic dan ${variable}
let namaLengkap = `${firstName} ${sureName} ${lastName}`

//mengambil bagian dari string berdasarkan index antara no berapa ke berapa 
//slice(mulai, akhir)

let txt3 = "Mencintaimu Disana";
let partText = txt3.slice(0,8);

//mengganti bagian dengan string lainnya replace(, );

let txt4 = "Hello World";
let changeText = txt4.replace("World", "Kiano");

//melakukan pencarian sebuah kata di dalam string berdasarkan index
let kalimat = "Tidak ada gading yang tidak retak";
let kalimatHurufBesar = kalimat.toUpperCase();

let index = kalimatHurufBesar.indexOf("ADA");

//melakukan pencarian sebuah kata di akhir kemunculan string tesebut lastIndexOf();
let lastIndex = kalimatHurufBesar.lastIndexOf("RETAK");

//memeriksa apakah sebuah string mengandung sesuatu yang dicari,
//dikembalikan true bila ada, false bila salah
//
let mengandungKalimat = kalimatHurufBesar.includes("GADING");



const hasil = mengandungKalimat;

console.log(hasil);
