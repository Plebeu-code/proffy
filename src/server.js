const proffys = [
    {
        name: "Sandro asdsadasd",
        avatar: "https://avatars3.githubusercontent.com/u/68212682?s=460&u=bbe609e5e201a36f1e72bb5e1958fc73bbd8291c&v=4",
        whatsapp: "75983328630",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Geografia",
        cost: "30",
        weekday: [0],
        time_from: [723],
        time_to: [7248]
    },

    {
        name: "Lucas sadasfsad",
        avatar: "https://avatars3.githubusercontent.com/u/68212682?s=460&u=bbe609e5e201a36f1e72bb5e1958fc73bbd8291c&v=4",
        whatsapp: "75983328630",
        bio: "Entusiasta das melhoress tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Geografia",
        cost: "20",
        weekday: [4],
        time_from: [723],
        time_to: [7248]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portuguis",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// Funcionalidades

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


nunjucks.configure('src/views', {
    express: server,
    noCache: false,
})

server

function getSubject(SubjectNumber) {
    const arrayPosition = +SubjectNumber -1
    return subjects[arrayPosition]
}


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGive(req, res) {
    const data = req.query

    const isEmpty = Object.keys(data).length > 0
    //se tiver dados 
    if (isEmpty) {

        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }
    //adicionar dados a lista de proffys
    

    //se não, adicionar

    return res.render("give-classes.html", {subjects, weekdays})
}

// Conf arquivos estáticos (css, scripts, img)
//Rotas
server.use(express.static("public"))
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGive)


.listen(80)
