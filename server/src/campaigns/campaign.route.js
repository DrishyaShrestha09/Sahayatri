const express = require('express');
const Campaign = require('./campaign.model');
const { postACampaign, getAllCampaigns } = require('./campaign.controller');
const router = express.Router();

// posting a book
router.post("/create-campaign", postACampaign)

// get all campaign
router.get("/", getAllCampaigns)

module.exports = router;