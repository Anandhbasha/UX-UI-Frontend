import newUser from "../Model/schema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = async(req,res)=>{
    try {
        const {userName,userPassword,userEmail} = req.body
        const existingUser = await newUser.findOne({userEmail})
        if(existingUser){
            res.status(408).json({message:"User Already exist"})
        }
        const Salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userPassword,Salt)
        const insertNewData = await newUser({userName:userName,userPassword:hashedPassword,userEmail:userEmail}).save()
        res.status(208).json({message:"newUser Registerd Successfully",data:insertNewData})

    } catch (error) {
        res.status(413).json({message:"Unable to Add newUser"})
    }
}

export const loginUser = async(req,res)=>{
    try {
        const {userEmail,userPassword} = req.body
        const exist = await newUser.findOne({userEmail})
        if(!exist){
            res.status(408).json({message:"userNot Found"})
        }
        const match = await bcrypt.compare(userPassword,exist.userPassword)
        if(!match){
            res.status(409).json({message:"Invalid Password"})
        }
        const token = jwt.sign({userEmail},"abcdef",{expiresIn:"1m"})
        res.status(215).json({message:"Login Successfully",token:token})
    } catch (error) {
        res.status(425).json({message:"Login Failure"})
    }
}

export const verifyToken = async(req,res,next)=>{
    const auth = req.headers["authorization"]
    if(!auth){
        res.status(480).json({message:"No Token Provided"})
    }
    const token = auth.split(" ")[1]
    try{
        const decode = jwt.verify(token,"abcdef")
        req.user = decode
        next()
    }catch(err){
        res.status(407).json({message:"Access denied"})
    }
}