const mongoose = require("mongoose");
const express = require("express");

const Campaign = require("../campaigns/campaign.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // 1. Total Campaign
    const totalCampaign = await Campaign.countDocuments();

    // 2. Total fund raised (sum of all totalfund raised from campaigns)
    const fundRaisedResult = await Campaign.aggregate([
      {
        $group: {
          _id: null,
          totalFundRaised: { $sum: "$totalFundRaised" },
        },
      },
    ]);

    const totalFundRaised = fundRaisedResult[0]?.totalFundRaised || 0;

    // 3. Total emergency campaign
    const emergencyCampaignResult = await Campaign.aggregate([
      { $match: { emergency: true } },
      { $count: "count" },
    ]);

    const emergencyCampaignCount =
      emergencyCampaignResult.length > 0 ? emergencyCampaignResult[0].count : 0;

    res
      .status(200)
      .json({ totalCampaign, totalFundRaised, emergencyCampaignCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
