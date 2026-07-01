const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/api/patients", async (req, res) => {
  try {
    const response = await axios.get(
      "https://demo.lupinary.com/api/patients?user_id=1&clinic_id=1&page_no=0",
      {
        auth: {
          username: process.env.API_USERNAME,
          password: process.env.API_PASSWORD,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(error.response?.status || 500).json({
      success: false,
      message: error.response?.data || error.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});