const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize, User} = require('./models')
const UserController = require('./controllers/UserController')
const SiswaController = require('./controllers/SiswaController')
const SppController = require('./controllers/SppController')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// User
app.use('/user', UserController)
// Siswa
app.use('/siswa', SiswaController)
// Spp
app.use('/spp', SppController)



app.listen(3000, async() => {
	console.log('server berjalan di port 3000')
	await sequelize.authenticate()
	console.log('Connected To Database')
})




