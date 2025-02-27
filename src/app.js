const express = require("express");

const app = express();
const port = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Hello World namaste from the deshbord");
    res.send("Hello World");
    
});

// About route
app.get("/about", (req, res) => {
    res.send("About Us");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



