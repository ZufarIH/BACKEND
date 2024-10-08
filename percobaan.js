// untuk memanggil modul bawaan dari node.js yaitu http
// untuk membuat server http
// https kalo udah secure
//const http=require(`http`)
// buat nyalain server di gitbash pakek node nama file
const http=require(`http`)
const fs=require("fs")

http.createServer(function(request, response){
    console.log(request.url)
    response.writeHead(200, {"Content-type": "text/html"})

    // halaman utama
    // ini kalo pakek fs
    if(request.url=="/"){
    // writehead buat ngasih status
    // 200 itu kode http
    // text/plain berati text mentah
    // kalo diubah jadi text/html maka berubah jadi text pengubah frontend (html)
    // pipe dibuat untuk pemanggilan
        fs.createReadStream("./View/HalamanUtama.html").pipe(response)
    }

    // halaman profil
    else if(request.url=="/profil"){
        let tahun_lahir = 1999
        let tahun_ini = 2024
        let umur = tahun_ini-tahun_lahir
        response.end(
    `<ul>
        <li>Nama lengkap   : Zufar Irving </li>
        <li>Nama panggilan : Zufar </li>
        <li>Alamat         : Depok </li>
        <li>Pekerjaan      : Pengusaha </li>
        <li>Tanggal Lahir  : 1 Januari ${tahun_lahir} </li>
        <li>umur           : ${umur}</li>
    </ul>
    <br>
    <a href="/">Balik ke Utama</a>
    `
    )}
    // halaman kontak
    else if(request.url=="/kontak"){
        let contact={
            wa:"081112001",
            email:"zufar@gmail.com",
            ig:"@ggaga",
        }
        response.end(
            `<ul>
            <li>WA   : ${contact.wa} </li>
            <li>Email: ${contact.email}  </li>
            <li>ig: ${contact.ig}  </li>
            </ul>
            <br>
            <a href="/">Balik ke Utama</a>
            `
    )} 

    // selalu liat besar kecil hurufnya
    // untuk menangani URL yang tidak ada
    else{
        response.end("<h1>404: Halaman Ini Tidak Ada</h1><hr>")
    }
    // dalam kurung kriting {} gak bisa pakek Bactick (``) harus pakek tanda petik
    // jgn lupa terminal di ganti ke gitbash (buat percobaan)
}).listen(3000, function(){
    console.log(`server sudah nyala, buka http://localhost:3000`);
})
// node percobaan.js (buat nyalain) (pakek per)
// ctrl+C buat matiin server
// jangan lupa daftarin dulu email dan username (git config --global user.email "zufar.zih@gmail.com")(git config --global user.name "ZufarIH")
// cara masukin ke repo git
// status ijo (U/Untrack) tanda bikin file baru di git = git init
// status (A/add) = git add .
// urutan awal, git init > git add . > git commit -m "komen" > git branch - M main > git remote add origin https://github.com/ZufarIH/BACKEND.git > git push
// kalo normalnya, git add . > git commit -m "komen" > git push

// kalo mau ngebalikin source code pakek (git reset --hard) terus copy paste full SHA kodenya dari git hub ke sebelahnya 
// git reset soft berubah cmn bisa kelihatan perubahaannya di visual code