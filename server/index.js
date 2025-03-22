const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User')
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000
require('dotenv').config()


async function main() {
    await mongoose.connect(process.env.DB_URL)
    app.get('/', (req, res) => {
        res.send("Hola Amigo, Welcome to the server!");
    })
}

main() .then(()=> console.log("Welcome to the server")).catch(err => console.log(err));

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Login Successful")
            } else {
                res.json("Invalid Password")
            }
        } else{
            res.json("User does not exist")
        }
    }) 
        
    
})
app.post('/register', (req, res) =>{
    UserModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log(`Server is running on ${port}`);
})