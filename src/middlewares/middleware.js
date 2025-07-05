const sample = (req,res,next)=>{
    console.log('working middlware');
    next()
}

module.exports=sample