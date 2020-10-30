const mongoose = require("mongoose")

const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        minlength: 6,
    }
}, {collection: 'pbcollection'})

module.exports = mongoose.model('pbcollection', nameSchema)