const express=require('express');
const hotelRouter=express.Router();

const Hotel=require('../models/hotelModels');

//localhost:3500/api/hotels/123456789ytfgvb

hotelRouter
.route('/:id')
.get(async (req,res)=>{
    try{
        const {id} =req.params // {id : 124346564775vdicwiyg}
        const hotel =await Hotel.findById(id);
            res.json(hotel)
    } catch(err){
        res.status(404).json({message : "No Hotel found"});
    }
})

module.exports = hotelRouter;