const mongoose = require('mongoose');
const express = require('express');

const Campaign = require('../campaigns/campaign.model');
const userRouter = require('../users/user.route');  // Use a different variable
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const emergencyCampaignCount = await Campaign.aggregate([
            { $match: { emergency: true } },
            { $count: "emergencyCampaignCount" }
        ]);

        res.json({ emergencyCampaignCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
