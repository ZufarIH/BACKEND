// untuk memanggil modul bawaan dari node.js yaitu http
// untuk membuat server http
// https kalo udah secure
//const http=require(`http`)
const http=require(`http`)
http.createServer(function(request, response){
    // writehead buat ngasih status
    // 200 itu kode http
    // text/plain berati text mentah
    // kalo diubah jadi text/html maka berubah jadi text pengubah frontend (html)
    response.writeHead(200, {"Content-type": "text/html"})
    response.end(`<h1>ello, this script is generated from backend node.js-Ip</h1><hr>`)
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
