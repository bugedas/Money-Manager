const mongoose = require('mongoose');

const {Schema} = mongoose;


const ShoppingSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    spent:{
        type: Number,
        required: true,
    },
    Comments: String,
    shoppedAt: Date,

});

const Shopping = mongoose.model('Shopping', ShoppingSchema);

module.exports = Shopping;