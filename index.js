const express = require('express')
const PORT = process.env.PORT || 5000
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const notebooksRoutes = require('./routes/notebooks')
const addRoutes = require('./routes/add')
const cardRouts = require('./routes/card')
const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes)
app.use('/notebooks', notebooksRoutes)
app.use('/add', addRoutes)
app.use('/card', cardRouts)

app.listen(PORT, () => {
  console.log(`Server create has been locallhost:${PORT}`)
})
