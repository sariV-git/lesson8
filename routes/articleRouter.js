const express=require("express")
const router=express.Router()
const Article=require("../models/Article")


router.post("/",async (req,res)=>{
    const {title}=req.body
    if(!title)
        {
            return res.status(400).send("ERROR")
        }
        const article=await Article.create({title:title})
        res.json(article)
})



module.exports=router