require("dotenv").config()

const express = require("express")

const server = express()

const port = process.env.port

server.use(express.json())

server.listen(port, () => {
    console.log("listenin on",port)
})