const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
require('./db/dbcon')
const routes = require('./routes/route')

const app = express()
dotenv.config({path:'config.env'})

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    optionsSuccessStatus: 200,
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('uploads'))
app.use('/', routes)

const port = 5050
const host = 'localhost'

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})