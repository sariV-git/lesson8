const mongoose=require("mongoose")
const { type } = require("os")
const { boolean } = require("webidl-conversions")

const articleSchema=new mongoose.Schema({
    title:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    active:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Article',articleSchema)