const express = require('express')
const app = express()

app.set('view engine','ejs') //setting penggunaan template engine untuk express
app.set('views', './view-ejs') //setting penggunaan folder untuk penyimpanan file ejs

// request singkat jadi req
// response singkat jadi res

// fungsi render ('nama file')
// nama filenya wajib bereksistensi .ejs
// otomatis mengambil file .ejs yang ada di folder view-ejs
app.get('/', function (request, response) {
    response.render('beranda')
})
app.get('/pendidikan', function (request, response) {
    let profil={
        nama: 'Gepard Beckham',
        S1:'ITS',
        SMA: 'Sejahtera',
    }
    response.render('page-pendidikan', profil)
})
app.get('/karyawan', function (request, response) {
    response.render('page-karyawan')
})


app.listen(3000, ()=>{
    console.log(`server sudah nyala, buka http://localhost:3000`);
    
})
// kalo udah instal nodemon di terminalnya dari node jadi pakek nodemon
