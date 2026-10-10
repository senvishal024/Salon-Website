
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbconnect = require("./Config/Db-connection");
const { router, clientRouter } = require("./Routes/SalonRoutes");

const app = express();

app.use(express.json());

const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

const PORT = process.env.PORT || 5000;

dbconnect();

app.use("/admin", router);
app.use("/newgeneration", clientRouter);

app.get("/", (req, res) => {
    res.send("Hello Server");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
