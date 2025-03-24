const express = require('express');
const Campaign = require('./campaign.model');
const { postACampaign, getAllCampaigns, getSingleCampaign, updateCampaignData, deleteACampaign } = require('./campaign.controller');
const router = express.Router();

// posting a book
router.post("/create-campaign", postACampaign)

// get all campaign
router.get("/", getAllCampaigns)

// single book endpoint
router.get("/:id", getSingleCampaign)

// uodate book endpoint
router.put("/edit/:id", updateCampaignData)

// delete book endpoint
router.delete("/:id", deleteACampaign )

module.exports = router;