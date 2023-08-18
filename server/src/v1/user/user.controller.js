const express = require('express')
const userRouter = express.Router();

userRouter.get("/",(req ,res , next) =>{
    res.status(200).json({
        message : "Hello ExpressJS"
    })
}
)

module.exports =  userRouter