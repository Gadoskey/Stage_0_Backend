const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({
      email: "mustopha.yusufope@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Gadoskey/Stage_0_Backend.git",
    });
});

// Use the port from Vercel or default to port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// App export required for Vercel
module.exports = app;
