const mongoose=require("mongoose")
const { type } = require("os")
const { boolean } = require("webidl-conversions")
const taskSchema=new mongoose.Schema({
    title:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Task',taskSchema)