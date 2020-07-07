const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.static('build'))

// All controllers go here

// End controllers

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/build/index.html`))
})

app.listen(PORT, ()=> {
    console.log(`I am listening on Port: ${PORT}`)
})