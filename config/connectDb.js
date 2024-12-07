const mongoose=require('mongoose')

const connectDB=async ()=>{
    try{
        console.log(process.env.PORT)
        await mongoose.connect(process.env.DATABASE_URL)
    }
    catch(err){
console.error("ERROR \n"+err)
    }
}
module.exports=connectDB
