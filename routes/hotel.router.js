const express=require('express');
const hotelRouter=express.Router();

// const hotels=require('../data/hotels');
const Hotel=require("../models/hotelModels");

hotelRouter
.route('/')
.get(async (req,res)=>{
    // res.json(hotels.data); // this is the local data
    const hotelCategory=req.query.category   //https://localhost:3500/api/hotels?category=National+Park
    try{
        let hotels;
        if(hotelCategory){
            hotels=await Hotel.find({category:hotelCategory});
        } else {
            hotels=await Hotel.find({});
        }
        
        hotels ? res.json(hotels) : res.status(404).json({message : "No Data Found"});
    } catch(err){
        console.log(err);
    }
})

module.exports=hotelRouter;