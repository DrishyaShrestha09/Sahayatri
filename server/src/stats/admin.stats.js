const mongoose = require('mongoose');
const express = require('express');

const Campaign = require('../campaigns/campaign.model');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const totalCampaign = await Campaign.countDocuments();

        const emergencyCampaignResult = await Campaign.aggregate([
            { $match: { emergency: true } },
            { $count: "count" }
        ]);

        // Ensure the count is always a number
        const emergencyCampaignCount = emergencyCampaignResult.length > 0 ? emergencyCampaignResult[0].count : 0;

        res.json({ totalCampaign, emergencyCampaignCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
