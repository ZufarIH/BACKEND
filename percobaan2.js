// 1st panggil dulu fileny
// 2nd pastikan file yg dipanggil sudah mengekspor variable nya
// 3rd panggil file.variable

// contoh pakek pakek variable
let DP=require('./DataPribadi')
console.log(DP.nama_Lengkap)
console.log(DP.nama_Depan)
console.log(DP.alamat) 
// contoh langsung pakek require dari file induknya
console.log(require('./DataPribadi').nama_Lengkap)
