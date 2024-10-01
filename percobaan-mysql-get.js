const mysql= require('mysql2')
const http=require(`http`)
const fs=require("fs")

// koneksi ke myqgl
const db = mysql.createConnection({
    host:'localhost',
    user:'root', 
    password:'',
    database:'db_jfd_sep',
})

// buka koneksi
db.connect((error)=>{
    if(error){
        throw error
    }else{
        console.log('berhasil tersambung ke host')
        
    }
})

// new promise memaksa data di jalankan dahulu
// async + await di paksa ke selanjutnya
function getAll_karyawan(){
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM karyawan2', function(errorSql, hasil){
        if(errorSql){
             reject(errorSql) 
        }else{
            resolve(hasil)   
        }
        })
    })
}
// async disini
http.createServer(async function(request, response){
    response.writeHead(200, {"Content-type": "text/html"})

    if(request.url=="/"){
    fs.createReadStream("./View/HalamanUtama.html").pipe(response)
    }
    else if(request.url=="/karyawan"){

        // tarik data dari db (database)
        // await disini
        let data=await getAll_karyawan()
        let html_ListKaryawan=""
        for (const i in data) {
            // jgn lupa kalo += berati looping ke diri sendiri
            html_ListKaryawan+=
            `<b>Nama Lengkap</b>    : ${data[i].nama} <br>
            <b>NIK</b>              : ${data[i].NIK} <br>
            <b>Tanggal Lahir</b>    : ${new Date (data[i].Tanggal_Lahir).toLocaleDateString('id-ID')} <br>
            <b>Alamat</b>           : ${data[i].Alamat} <br>
            <b>Jabatan </b>         : ${data[i].Jabatan} <br>
            <b>Agama</b>            : ${data[i].Agama} <br>
            <br>`
        }
        response.end(
            `<h1>Data penghuni gunung</h1>
            <hr>
            ${html_ListKaryawan}
            `
            // <pre></pre> buat biar data mentah ditampilin rapih
            // JSON buat ngedebug aja
        )

    }

}).listen(3000, function(){
    console.log(`server sudah nyala, buka http://localhost:3000`);
})