//Express pra criar e configurar meu servidor
const express = require("express")
const server = express()

//Configurar arquivo estáticos 
server.use(express.static("public"))


//Criei uma rota/
//capturo o pedido do cliente 
server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function (req, res) {
    return res.sendFile(__dirname + "/ideias.html")
})

//liguei o servidor na porta 3000
server.listen(300) 

//4 - 53:09