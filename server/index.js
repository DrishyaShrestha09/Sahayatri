const express = require('express')
const app = express()
const port = process.env.PORT || 5000

require ('dotenv').config()

const mongoose = require('mongoose');

// Defining Routes


async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) =>{
        res.send('Hola Amigo mi nombre es Ridan Shrestha.!')
    })
}

main().then(() => console.log("Successfully connected mongodb"));

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})