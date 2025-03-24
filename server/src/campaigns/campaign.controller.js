const Campaign = require("./campaign.model");

const postACampaign = async (req, res) => {
    try {
        const newCampaign = await Campaign({...req.body});
        await newCampaign.save();
        res.status(200).send({message: "Campaign posted successfully", campaign: newCampaign});
    } catch (error) {
        console.error("Error while creating campaign")
        res.status(500).send({message: "Failed to create a campaign"});
    } 
}

// we export this by default on obj format because we will store all the logics on the routes
module.exports = {
    postACampaign
}