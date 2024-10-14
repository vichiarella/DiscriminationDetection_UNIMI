const mongoose = require("mongoose");

const Collection = new mongoose.Schema(
    {
        collection_name: {
            type: String,
            required: true,
        },
        texts: {
            type: [String], 
            ref: "Text", 
            default: []
        },
    },
    {timestamps: true}
);

Collection.index({collection_name: 1}, {unique: true});

module.exports = mongoose.model('Collection', Collection);