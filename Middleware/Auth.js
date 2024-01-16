const Auth1=(req,res,next)=>{
    console.log("This is auth 1")
    next()
}
const Special=(req,res,next)=>{
    console.log("This is for special")
    next()
}
module.exports={Auth1,Special}