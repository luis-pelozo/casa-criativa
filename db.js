const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./estudoWorkshop.db')

db.serialize(function(){

    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    
   /*const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
    `

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos De Programação",
        "Estudo",
        "Neste tempo em casa, nada melhor do que aproveitar o tempo livre para aprender novas tecnologias ou até mesmo melhorar aquelas skills que estão um pouco enferrujadas não é mesmo",
        "https://skylab.rocketseat.com.br/"
    ]
    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    })*/


    //Função para deletar
     /*db.run(`DELETE FROM ideas WHERE id =?`, [1], function(err){
         if (err) return console.log(err)
          console.log("DELETEI", this)
     })

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err) 

        console.log(rows)
    })*/



})
module.exports = db