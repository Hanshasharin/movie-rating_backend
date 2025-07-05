const userModel = require("../models/usermodel");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const secretKey = "secretey"

const registerController =async (req,res)=>{
    const data = req.body
    const user = await userModel.findOne({email:req.body.email})
    console.log(user)
if(user){
res.status(400).send({message:"user already existed"})
}else{
 bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if (hash){
        data.password=hash
         const newUser = new userModel(data)
    newUser.save()
    res.send({message:"register"})
        console.log("sucessfully hashed");

    }
})

}
   






;


    // console.log("registering");
    // console.log(data);
   
    
}

const loginController = async (req,res)=>{
    const data = req.body
const user = await userModel.findOne({email:data.email})
    console.log("logging in");
    console.log(user);
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(err){
                    res.status(401).send('invalid credentials')

        }
    else if(result){
        var token = jwt.sign({ email:data.email }, secretKey);
        res.send({message:"login successfully completed", token:token})
    }
    else{
        res.status(401).send('invalid credentials')
    }
    
});
    // if (user && data.password === user.password){
    //     var token = jwt.sign({ email:data.email }, secretKey);
    //     res.send({message:"login successfully completed", token:token})
    // }
    // else{
    //     res.status(401).send('invalid credentials')
    // }  compared without bcrypt

    console.log(data);
    
}

module.exports ={registerController,loginController}