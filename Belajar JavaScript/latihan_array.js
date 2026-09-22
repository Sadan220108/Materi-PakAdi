// latihan array
let daftarsiswa = ["radit","catur","diki"];

console.log("siswa pertama:",daftarsiswa[0,1]);  //radit
daftarsiswa.push("pandu"); //menambah pandu diurutan terakhir
console.log("jumlah siswa:",daftarsiswa.length); //4

//latihan object
let sepatu = {
    merk: "adidas",
    ukuran: 42,
    warna: "hitam",
    isReady: true
};

console.log("merk sepatu:",sepatu.merk);
sepatu.harga = 1500000;
console.log(sepatu);
