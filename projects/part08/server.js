const express = require("express");
const app = express();
app.use(express.static("public"));

// getting the request and the response
app.get('/', (req, res) => {
    res.sendFile(_dirname + "/index.html");
})

app.get("/api/cakes", (req, res) => {
    const cakes = ["birthday cake", "red velvet cake", "chocolate cake", "cheese cake"];
    res.send(cakes);
})

// listening whatever request
app.listen (3000,() => {
    console.log("Im listening")
})