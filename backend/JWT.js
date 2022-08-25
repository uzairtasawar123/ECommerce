const JWT = require('jsonwebtoken')
const JwtSecret = require('./JwtSecret')


/////////////////////   
const Auth  = (req , res , next)=>{
    const token = req.headers.auth
    if(!token){
        res.status(404).send("No token")
    }
    else{
        JWT.verify(token , JwtSecret , (err , decode)=>{
            if(err){
                return res.status(401).send("Invalid Token")
            }
            else{
                req.user = decode
                next()
            }

        })
    }
}

module.exports = Auth