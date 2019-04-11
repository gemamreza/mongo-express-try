const express = require('express')
const app = express()
const port = 8000
const userRouter = require('./router/userRouter')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('<h1> Selamat datang di mongodb-express bung! </h1>')
})

app.use('/user', userRouter)

//app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log('Berjalan di port ' + port))



// GET ALL USER

// GET USER BY ID

// INSERT USER

// INSERT USERS

// UPDATE USER BY ID

// DELETE USER BY ID