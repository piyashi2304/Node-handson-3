const express=require("express")
const app = express()
const route=require('./Route/UseRoute')
const { Auth1 } = require("./Middleware/Auth")

app.use(Auth1)
app.use('/api',route)



app.listen(4050,()=>{
    console.log("Server Started")
})

