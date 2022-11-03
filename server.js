let express = require('express')
let mongoose = require('mongoose')
let path = require('path')
let user = require('./modals/user')
let indexRoute = require('./routes/indexRoute')
let userRoute = require('./routes/userRoute')

// connect database
mongoose.connect('mongodb://localhost/UserDiary3', (err) => {
  console.log(err ? err : 'sucessfully connected')
})

let app = express()

// capyure a form data
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'assets')))

// set a view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// routing middelware
app.use('/', indexRoute)
app.use('/user', userRoute)

// error handilig middelware
app.use((req, res, next) => {
  res.send('Page not found')
})

app.use((err, req, res, next) => {
  console.log(err)
})
app.listen(20000, () => {
  console.log('server listing port 20000')
})
