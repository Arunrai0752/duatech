import mongoose from 'mongoose'
const schema=new mongoose.Schema({
name:String,
email:String,
mobile:String
},{timestamps:true})
export default mongoose.model('Lead',schema)