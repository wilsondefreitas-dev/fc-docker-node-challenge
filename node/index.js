const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
    res.send("<h1>hi, I'm live updating!</h1>");
});

app.listen(port, () => console.log(`Server running on ${port}`));
