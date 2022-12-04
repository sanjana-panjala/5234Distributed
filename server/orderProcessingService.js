const express = require("express");
const cors = require("cors");

const app = express();
const port = 7001;
const corsOptions = {
    origin:"*",
    credentials:true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())
app.listen(port, () => {
    console.log("RUN http://localhost:7000")
})

app.post("/execute_order", function (req, res) {
    console.log(req.body)
    return res.send(""+123456789);
})

app.get("/init_shipping", function async (req, res){
    return res.send(""+123456789);
})