const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

require("dotenv").config();

const mongoose = require("mongoose");

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Defining Routes
const campaignRoutes = require("./src/campaigns/campaign.route");
const getUserRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/campaigns", campaignRoutes);
app.use("/api/auth", getUserRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Hola Amigo mi nombre es Ridan Shrestha.!");
  });
}

main().then(() => console.log("Successfully connected mongodb"));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);

  //very very bad code
    const Campaign = require("./src/campaigns/campaign.model.js");
    app.post("/api/update-donation", async (req, res) => {
      const { campaignId, donationAmount } = req.body;

      try {
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
          return res.status(404).json({ error: "Campaign not found" });
        }

        // Updates the fundRaised field and adds the new donation to the current fundRaised
        campaign.fundRaised += parseFloat(donationAmount); 

        // Increasing the supporter count by 1 supporter per donation
        campaign.supportersCount = (campaign.supportersCount || 0) + 1;

        await campaign.save(); 

        res.json({
          message: "Donation added successfully",
          updatedCampaign: campaign,
        });
      } catch (error) {
        console.error("Error updating donation:", error);
        res.status(500).json({ error: "Failed to update donation" });
      }
    });
});
