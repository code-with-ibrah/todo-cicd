const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3500;


app.get("/", (req, res) => {


    return res.send("asdfsad");
})







app.listen(port, () => {console.log("Server is running on port: http://localhost:" + port)});