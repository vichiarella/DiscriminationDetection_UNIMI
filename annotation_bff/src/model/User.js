const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            // validate: {
            //     validator: validator.isEmail
            // }
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        userType: {
            type: String,
            required: true,
            enum: ["Admin", "AnnotationService", "LLM"]
        }
    },
    {timestamps: true}
);

User.index({email: 1}, {unique: true});

module.exports = mongoose.model("User", User);