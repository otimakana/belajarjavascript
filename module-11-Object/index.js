/**
 * Object di JavaScript
 *
 * @format
 */

// Pengertian Object, Object di JavaScript adalah tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah object adalah pasangan antara key dan value (disebut juga properti).⁡

// ada key dan ada value

// object literal
let mahasiswa = {  //mahasiswa sebagai object 
  nama : "Kiano", //nama sebagai value atau properti 
  umur : 25, //umur adalah key dan 25 sebagai value atau properti 
  alamat : "Jl. Pandan Raya 9" //alamat key dan jl sebagai value atau properti 
};

//constructor new Object()
let buku = new Object();
buku.judul = "Belajar JS";
buku.penulis = "KIano ALkana";
buku.tahun = 2024;

// menambahkan dan mengubah properti 
mahasiswa.alamat = "Jalan Beringin Raya";
mahasiswa.kelas = "Kimia 12";

//menghapus properti dengan operator delete
delete mahasiswa.kelas;

//detructurin object diubah menjadi variabel
let {nama, umur} = mahasiswa;

console.log(nama);
console.log(umur);

//object nested 
let universitas = {
  nama : "Universitas Gratis Modal Dari Mana",
  fakultas : {
    nama : "Ekonomi Melambung",
    jurusan : "Arwah Gentayangan"
  }
};

const update3 = universitas.fakultas.jurusan;

//mengakses object menggunakan notasi titik;
const update = mahasiswa;

//mengakses object menggunakan bracket kotak dengan ""
const update2 = buku["tahun"];


//console.log(update, typeof update)
//console.log(update2)
console.log(update3);
