const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ridanstha09:ridanstha09@sahayatridb.uwnj5.mongodb.net/")

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
    console.log('Server is running on port 3001')
})