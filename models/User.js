const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    isVerified: {
    type: Boolean,
    default: false
},

    addresses: [

        {

            fullName: String,

            phone: String,

            country: String,

            state: String,

            city: String,

            zipCode: String,
            landmark: String,

            address: String

        }

    ]

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);