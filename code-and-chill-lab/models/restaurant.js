const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema ({
    name: { type: String },
    cuisine: { type: String },
    price: { type: String, enum: ["$", "$$", "$$$", "$$$$", "$$$$$"]},
    dateOpened: { type: Date }
})