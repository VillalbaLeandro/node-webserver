const express = require('express')
const hbs = require('hbs');
require('dotenv').config()// <<<------------------- 

const app = express()
const port = process.env.PORT;

//handlebars
hbs.registerPartials(__dirname + '/views/partials');

// (TODO: require: hbs)
app.set('view engine', 'hbs');

//servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Leandro Villalba',
        titulo: 'Fullstack developer'
    })
})
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Leandro Villalba',
        titulo: 'Fullstack developer'
    })
})
app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Leandro Villalba',
        titulo: 'Fullstack developer'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=> {
    console.log(`Corriendo en http://localhost:${port}`)
})