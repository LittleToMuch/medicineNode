const mongoose = require('mongoose');

const model = mongoose.model('shop_swiper', new mongoose.Schema({
    id:Number,
    pic:String
}));

module.exports = model