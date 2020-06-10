//Express pra criar e configurar meu servidor
const express = require("express")
const server = express()

//Criei uma rota/
//capturo o pedido do cliente 
server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html")
    //console.log("aqui")
})

//liguei o servidor na porta 3000
server.listen(300)