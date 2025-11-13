export const read = (req,res)=>{
    res.json("Welcome to Node JS")
}
export const insert = (req,res)=>{
    const {email,password} =req.body 
    res.json(`${email},${password} succesfully `)
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