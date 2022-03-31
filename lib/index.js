let mongoose = require('mongoose')
let express = require('express')
let app = express()
app.use(express.json())
let snowboards = require('./snowboards.json')
let snowboardModel = require('./model.js')

let mongooseConfig = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-express-api')

mongoose.connection.on('connected', ()=> console.log('Connected to Database'))
mongoose.connection.on('disconnected', ()=> console.log('Disconnected from Database'))
mongoose.connection.on('error', error => console.error("Database Error", error))

// Create a snowboard
app.post('/snowboards', (request,response) => {
    let snowboard = request.body
    snowboardModel 
    .create(snowboard)
    .then(newBoard => response.json(newBoard)) 
})

// Redirects to database
app.get('/', (request, response)=> {
    response.redirect('/snowboards')
    console.log("redirecting")
})

// Read all snowboards
app.get('/snowboards', (request, response)=> {
    snowboardModel 
    .find()
    .then(results=> response.json(results))
})

// Read one by ID 
app.get('/snowboards/:id', (request, response)=> {
    let snowboardId = request.params.id
    snowboardModel
    .findById(snowboardId)
    .then(data=> response.json(data))
})


const PORT = 9000
let server = app.listen(PORT)
server.on('listening', ()=> console.log("PORT connected: " + PORT))
server.on('error', error=> console.error("error", error))


