//Express pra criar e configurar meu servidor
const express = require("express")
const server = express()

const ideas =[
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos De Programação",
        category:"Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit expedita cupiditate ratione exercitationem, ad sit voluptates id velit culpa quae accusantium iure sed neque eum, nemo numquam quas porro ? ",
        url: "https://www.linkedin.com/in/luis-fernando-f-pelozo-4a8759190/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saude",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit expedita cupiditate ratione exercitationem, ad sit voluptates id velit culpa quae accusantium iure sed neque eum, nemo numquam quas porro ? ",
        url: "https://www.linkedin.com/in/luis-fernando-f-pelozo-4a8759190/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit expedita cupiditate ratione exercitationem, ad sit voluptates id velit culpa quae accusantium iure sed neque eum, nemo numquam quas porro ? ",
        url: "https://www.linkedin.com/in/luis-fernando-f-pelozo-4a8759190/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit expedita cupiditate ratione exercitationem, ad sit voluptates id velit culpa quae accusantium iure sed neque eum, nemo numquam quas porro ? ",
        url: "https://www.linkedin.com/in/luis-fernando-f-pelozo-4a8759190/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit expedita cupiditate ratione exercitationem, ad sit voluptates id velit culpa quae accusantium iure sed neque eum, nemo numquam quas porro ? ",
        url: "https://www.linkedin.com/in/luis-fernando-f-pelozo-4a8759190/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729040.svg",
        title: "Reforma",
        category: "Construção",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit expedita cupiditate ratione exercitationem, ad sit voluptates id velit culpa quae accusantium iure sed neque eum, nemo numquam quas porro ? ",
        url: "https://www.linkedin.com/in/luis-fernando-f-pelozo-4a8759190/"
    },
]

//Configurar arquivo estáticos 
server.use(express.static("public"))


//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache:true,
})


//Criei uma rota/
//capturo o pedido do cliente 
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()
    
    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }
    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas})
})

//liguei o servidor na porta 3000
server.listen(300) 

//4 - 53:09