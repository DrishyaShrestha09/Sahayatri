const express = require('express');
const Campaign = require('./campaign.model');
const { postACampaign } = require('./campaign.controller');
const router = express.Router();

// posting a book
router.post("/create-campaign", postACampaign)

module.exports = router;