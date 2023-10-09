const express  = require('express')
const exphbs    = require('express-handlebars')

const app      = express()
const port     = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: "1",
        title: "Livro",
        price: 12.99
    },
    {
        id: "2",
        title: "Cadeira",
        price: 190.99
    },
    {
        id: "3",
        title: "Porta-retrato",
        price: 18.99
    },
    {
        id: "4",
        title: "Mochila",
        price: 52.00
    },
]

app.get('/', (req, res) => {
    res.render('home', { products })
})
app.get('/product/:id', (req, res) => {
    const product = products[parseInt(req.params.id) - 1]
    res.render('product', { product })
})

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})
