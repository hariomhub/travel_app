const mongoose=require('mongoose');

const wishlistSchema=new mongoose.Schema({
    hotelId: {typeo :String, required: true}
})

const wishlist=mongoose.model("wishlist",wishlistSchema);

module.exports=wishlist;