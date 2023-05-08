const express = require('express')

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(201).json({
        STATUS_SERVER: "OK!!!",
        Main: "In process..."
    })
})


const PORT = 9000
app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT:${PORT}`)
})