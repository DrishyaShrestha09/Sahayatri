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

// this function is used to get all campaigns
const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().sort({ createdAt: -1});
        res.status(200).send(campaigns);
    } catch (error) {
        console.error("Error while fetching campaigns")
        res.status(500).send({message: "Failed to fetch campaigns"});
    }
}

// this function is used to get a single campaign by ID
const getSingleCampaign = async (req, res) => {
    try {
        const {id} = req.params;
        const campaign = await Campaign.findById(id);
        if(!campaign) {
            res.status(404).send({message: "Campaign not found!"});
        }
        res.status(200).send(campaign);
    }   catch (error) {
          console.error("Error while fetching a campaign")
          res.status(500).send({message: "Failed to fetch a campaign"});
    }
}

// this function is used to update a campaign by ID
const updateCampaignData = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedCampaign = await Campaign.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedCampaign) {
            res.status(404).send({message: "Campaign not found!"});
        }
        res.status(200).send({
            message: "Campaign updated successfully",
            campaign: updatedCampaign
        });
    } catch (error) {
        console.error("Failed to update campaigns", error);
          res.status(500).send({message: "Failed update a campaign"});
    }
}

// this function is used to delete a campaign by ID
const deleteACampaign = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedCampaign = await Campaign.findByIdAndDelete(id);
        if(!deletedCampaign) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({
            message: "Campaign deleted successfully",
            campaign: deletedCampaign
        });
    } catch (error) {
        console.error("Error while deleting a campaigns", error);
        res.status(500).send({message: "Failed to delete a campaign"});
    }
}

// to get emergency campaign info
const getEmergencyCampaigns = async (req, res) => {
    try {
        const emergencyCampaigns = await Campaign.find({ emergency: true }).sort({ createdAt: -1 });
        res.status(200).send(emergencyCampaigns);
    } catch (error) {
        console.error("Error while fetching emergency campaigns", error);
        res.status(500).send({ message: "Failed to fetch emergency campaigns" });
    }
}

// we export this by default on obj format because we will store all the logics on the routes
module.exports = {
    postACampaign,
    getAllCampaigns,
    getSingleCampaign,
    updateCampaignData,
    deleteACampaign,
    getEmergencyCampaigns
}