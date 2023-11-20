const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema ({
    name: { type: String, required: true },
    cuisine: { type: String ,enum: ["American", "Italian", "Mexican", 
    "Thai", "Greek", "Japanese"]},
    price: { type: String, enum: ["$", "$$", "$$$", "$$$$", "$$$$$"]},
    yearOpened: { type: Number }
},{timestamps:true})