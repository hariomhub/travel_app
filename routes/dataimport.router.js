const express = require('express');
// const mongoose = require('mongoose');
const Hotel = require('../models/hotelModels');
const hotels = require('../data/hotels');

const router = express.Router();

router
    .route('/')
    .post(async (req, res) => {
        try {
            await Hotel.deleteMany({});
            const HotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(HotelsInDB);
        } catch (err) {
            console.log(err);
            res.json({
                message: "Could not add data to DB"
            })

        }
    })

    module.exports=router;
