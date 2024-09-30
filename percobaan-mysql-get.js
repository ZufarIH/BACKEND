const mysql= require('mysql2')

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

db.query('SELECT * FROM karyawan2', function(errorSql, hasil){
    if(errorSql){
        console.log(errorSql);
        
    }else{
        console.log(hasil)
        
    }
})