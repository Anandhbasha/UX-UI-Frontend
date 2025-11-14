import newUser from "../Model/schema.js"

export const read = async(req,res)=>{
    try{
        const existingData = await newUser.find()
        res.status(200).json(existingData)
    }catch(err){
        res.status(400).json(err)
    }
}
export const insert = async(req,res)=>{
    try{
        const {userName,userEmail,userAge,userPassword} =req.body
    const exits = await newUser.findOne({userEmail})
    if(exits){
        res.status(403).json({message:"User Already exist"})
    }
    const addNew = await newUser({userName,userEmail,userAge,userPassword}).save()
    res.status(201).json(addNew)
    }catch(err){
        res.status(408).json(err)
    }

}

export const update = (req,res)=>{
    const {name} = req.params
    const{userName} = req.body
    res.json(`${userName} Updated`)
}
export const deletes = (req,res)=>{
    const{name} = req.params
    res.json(`${name} Deleted successfully`)
}