import mongoose, { model } from 'mongoose'

const crudSchema = new mongoose.Schema(
    {
        userName:String,
        userAge:Number,
        userEmail:String,
        userPassword:String
    }
)

const newUser = mongoose.model("newUsers",crudSchema,"NewTable")

export default newUser