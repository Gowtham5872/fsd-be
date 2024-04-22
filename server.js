const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const roomDetails = [];

app.post("/createRoom", (req, res) => {
    console.log(req.body);
    roomDetails.push({
        beds: req.body.beds,
        sq: req.body.sq,
        amenities: req.body.amenities
    });
   
    res.send(roomDetails);
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(4000, () => {
    console.log("Server started at http://localhost:4000");
});

