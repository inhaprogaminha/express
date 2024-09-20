const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
    partialsDir:['views/partials']
})
const app = express()


const authUser= (req, res, next)=>{
    const auth = true
    if(auth){
        next()
    }else{
        res.render('acesso')
    }

}

app.use(authUser)
app.use(express.static('public'))


app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

app.get('/', (req, res)=>{
    const nome = 'joao'
    const alunos = [
        {nome: 'Andrei', beleza: 'alta'},
        {nome: 'Inha', beleza: 'altissima'},
        {nome: 'Feiosa', beleza: 'horribilante'},
        {nome: 'Miguel', beleza: 'altissima'},
        {nome: 'Geo', beleza: 'altissima'},
    ]
    const arrayAluno = alunos.map((aluno)=>{
        return aluno.nome
    })
    res.render('home', {arrayAluno, alunos, nome})
})
  
app.get('/Sobre', (req,res)=>{
    const Alunos = [
        {nome: 'Rebeca H.', idade: '17 anos', Genero: 'Mulher-viado' },
        {nome:'Luís Miguel', idade: '17 anos', Genero: 'masculino'}

    ]

     
    res.render('Sobre', {Alunos})
})

app.get('/contatos', (req,res)=>{

    const nome = 'Yasmin Vitória'
    const instagram = 'https://instagram.com/yasmin_vitoria0103'
    const whatsapp = 'https://wa.me/+5583999429358'
    const numero = '(83)99942-9358'
    const local = 'https://maps.app.goo.gl/HNWNN6rajBXpQcbU8'

    res.render('contatos', {nome, instagram, whatsapp ,numero, local})
    })
    
app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/blog',(req,res)=>{
    produtos= [
        {nome: 'Calca Djeans', preco: 700.00, desc: 'Calca djeans azul'},
        {nome: 'Camisa Polo', preco: 800.00, desc: 'Camisa Polo'},
        {nome: 'Tenis', preco: 4.000, desc: 'Tenis'},


    ]
    res.render('blog', {produtos})
})


app.listen(3000,()=>console.log(`servidor funcionando em http://localhost:3000`))

  