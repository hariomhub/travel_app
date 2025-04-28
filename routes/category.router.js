const express=require('express');
const hotelRouter=express.Router();

const Category=require('../models/category.model');

hotelRouter
.route('/')
.get(async (req,res)=>{
    try{
        const categories=await Category.find({});
        res.json(categories);
    } catch(err){
        res.status(404).json({message : "Could not find categories"})
    }
})

module.exports=hotelRouter;