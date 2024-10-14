const mongoose = require("mongoose");

const Configuration = new mongoose.Schema(
    {
        name: {
            type: String

        },
        key: {
            type: String,
            required: true,
        },
        value: {
            type: String, 
            required: true
        },
    },
    {timestamps: true}
);


module.exports = mongoose.model('Configuration', Configuration);