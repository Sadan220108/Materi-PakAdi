// data koleksi produk
const inventory = [
    { id: 101, nama: "mouse", harga: 150000, stok: 10},
    { id: 102, nama: "keyboard", harga: 600000, stok: 10},
    { id: 103, nama: "monitor", harga: 15000, stok: 10},
    { id: 104, nama: "hdmi", harga: 15000, stok: 10},
];

// tugas 1 menampilkan semua nama produk
console.log("--daftar nama produk--");
inventory.forEach(item => {
    console.log(`produk: ${item.nama} | harga: Rp${item.harga}`);
});

// tugas 2 filter produk yang harganya diatas 200rb
const produkmahal = inventory.filter(item => item.harga > 200000);
console.log("produk premium:", produkmahal);

// tugas 3 mencari satu produk berdasarkan id
const cariproduk = inventory.find(item => item.id === 103);
console.log("hasil cari id 103:",cariproduk.nama);