const express = require('express')
const app = express()

// request singkat jadi req
// response singkat jadi res
app.get('/', function (request, response) {
    response.send('<h1>Hello World</h1>')
})
app.get('/pendidikan', function (request, response) {
    response.send('<h1>Riwayat Pendidikan</h1>')
})
app.get('/karyawan', function (request, response) {
    response.send('<h1>Data Karyawan</h1>')
})


app.listen(3000, ()=>{
    console.log(`server sudah nyala, buka http://localhost:3000`);
    
})
// kalo udah instal nodemon di terminalnya dari node jadi pakek nodemon
