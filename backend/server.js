const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/adduser", (req, res) => {
    console.log("Hello World");
    res.send("rcv"+req.body);
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

