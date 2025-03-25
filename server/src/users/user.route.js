const express = require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY

router.post("/admin", async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await User.findOne({username});
        if(!admin) {
            res.status(404).send({message: "Admin not found"})
        }
        if(admin.password !== password) {
            res.status(401).send({message: "Invalid Credentials!"}) 
        }

        // this is the first value of jwt.sign after first value we will define user info then the 2nd value will be JWT_SECRET and the 3rd value will be expires in 1h

        const token = jwt.sign({id: admin._id, username: admin.username, role: admin.role}, 
            JWT_SECRET,
            {expiresIn: '1h'}
        ) 

        return res.status(200).json({
            message: "Admin logged in successfully",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        })

    } catch (error) {
        console.log("Failed to login as an Admin", error);
        res.status(401).send({message: "Failed to login as an Admin"});

    }
})

module.exports = router;