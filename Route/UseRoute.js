const route=require("express").Router()
const {login,register,about,contact}=require('../Controller/Api')
const { Special } = require("../Middleware/Auth")


route.get('/login',Special,login)
route.get('/registered',register)
route.get('/about',about)
route.get('/contact',Special,contact)

module.exports=route