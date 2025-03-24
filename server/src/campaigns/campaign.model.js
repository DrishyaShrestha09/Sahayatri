const mongoose = require('mongoose')

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    emergency: {
        type: Boolean,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    fundRequired: Number,
    fundRaised: Number,
    createdAt:{
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;