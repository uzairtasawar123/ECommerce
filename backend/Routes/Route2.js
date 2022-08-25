const express = require('express');
const User = require('../Schema/UserSchema');
const bcrypt  = require('bcryptjs');
const JWT  = require('jsonwebtoken')
const JwtSecret = require('../JwtSecret');
const Auth = require('../JWT');
/////////////////////////////////
//const CreateToken = require('../JWT');
const Customer  = express.Router()

//////////////////////////////////


      ////////////////     Sign Up  /////////////////////////
     
Customer.post("/signup", async (req, res) => {
    try {
      const EmailPresent = await User.findOne({ email: req.body.email });
      if (EmailPresent) {
       return res.status(500).send("Please Enter a Unique Email ID");
      }
      const AddUser = await User.create({
          name:req.body.name,
          email:req.body.email,
          password:bcrypt.hashSync(req.body.password),
          phone:req.body.phone
      })
      res.status(200).send("User Created Successfully")
  
    } catch (error) {
        res.status(500).send("Some erorr occur")
    }
  }); 





  ////////////////////     Log In   ////////////////////////////
Customer.post('/login' , async (req , res)=>{
    try {
        const EmailPresent = await User.findOne({email:req.body.email})
        if(!EmailPresent){
            return res.status(500).send("Please Enter correct Email or Password")
        }
        else{
        
            const PasswordCorrect  =  bcrypt.compareSync(req.body.password , EmailPresent.password)
            if(PasswordCorrect){
                const token=JWT.sign({
                    _id: EmailPresent._id,
                    Name: EmailPresent.name,
                    Email: EmailPresent.email,
                    phone: EmailPresent.phone
                 },
                 JwtSecret)

               return res.status(200).send({
                    token
                })
            }
            else{
               return res.status(500).send("Incorrect Email or Password")
            }
        }


    } catch (error) {
       return res.status(500).send(error)
    }
})  

    ///////////////   Getting use info    //////////////////////////////
Customer.get('/getuser' , Auth, async (req ,res)=>{
    try {
        const userData = await User.findOne({_id: req.user._id})
        if(userData){
            return res.status(200).send({
                _id:userData._id,
                name:userData.name,
                email:userData.email,
                phone:userData.phone
            })       
         }
         else{
             return res.status(404).send("User Not found")
         }
    } catch (error) {
        return res.status(500).send(error)
    }
    
})

Customer.get('/userget/:id' , async (req , res)=>{
    try {

        const data = await User.findOne({_id:req.params.id})

        res.status(200).send({
            name:data.name,
            email:data.email,
            phone:data.phone
        })
    } 
    catch (error) {
        res.status(500).send(error)
    }

})


/////////////////////////////
module.exports = Customer