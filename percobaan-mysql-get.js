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
        response.end(
            `<h1>Data penghuni gunung</h1>
            <hr>
            Nama Lengkap: ${data[0].nama} <br>
            Nomor Induk Karyawan: ${data[0].NIK} <br>
            <pre>
            ${JSON.stringify(data,null,4)}
            </pre>`
            // JSON buat ngedebug aja
        )

    }

}).listen(3000, function(){
    console.log(`server sudah nyala, buka http://localhost:3000`);
})