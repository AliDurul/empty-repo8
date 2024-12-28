"use strict"

const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

require('express-async-errors')

/* ------------------------------------------------------- */
// Database Connection:
const { dbConnection } = require('./src/configs/dbConnection')
const CustomError = require('./src/helpers/customError')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

app.use(express.json())

// app.use('/upload', express.static('./upload'))

app.use(require('./src/middlewares/authentication'))

// Run Logger:
// app.use(require('./src/middlewares/logger'))

app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to BlogLy API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        }
    })
})

// Routes:
app.use(require('./src/routes'))

app.use('*', (req, res) => {
    throw new CustomError('Route not found.', 404)
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log(`http://${HOST}:${PORT}`))

