const express=require('express');
const wishlist=require('../models/wishlist.model');

const router=express.Router();
router.route('/')
.post(async(req,res)=>{
    const newWishlist=new wishlist(req.body);
    try{
        const savedWishlist=await newWishlist.save();
        res.status(201).json(savedWishlist);
    } catch(err){
        // console.log(err);
        res.status(500).json({message:"Failed to create wishlist"});
        
    }
})

router.route('/:id')
    .delete(async(req, res)=>{
        try{
            await wishlist.findByIdAndDelete(req.params.id);
        } catch{
            res.status(500).json({message :"could not delete hotel from wishlist"});
        }
    })

router.route('/')
.get(async(req, res)=>{
    try{
        const wishlist=await wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message :"No items found in the wishlist"});
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})
module.exports=router;