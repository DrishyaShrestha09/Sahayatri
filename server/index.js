const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

require ('dotenv').config()

const mongoose = require('mongoose');

// Middlewares
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

// Defining Routes
const campaignRoutes = require('./src/campaigns/campaign.route')
app.use("/api/campaigns", campaignRoutes)

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