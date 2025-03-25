const express = require('express');
const Campaign = require('./campaign.model');
const { postACampaign, getAllCampaigns, getSingleCampaign, updateCampaignData, deleteACampaign } = require('./campaign.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();

// posting a book and giving access to admin only for creating campaign using verifyAdminToken
router.post("/create-campaign", verifyAdminToken, postACampaign)

// get all campaign
router.get("/", getAllCampaigns)

// single book endpoint
router.get("/:id", getSingleCampaign)

// update book endpoint and giving access to admin only for updating campaign
router.put("/edit/:id", verifyAdminToken, updateCampaignData)

// delete book endpoint and giving access to admin only for deleting a campaign
router.delete("/:id", verifyAdminToken, deleteACampaign )

module.exports = router;