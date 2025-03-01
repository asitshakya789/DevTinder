const express = require("express");

const app = express();
const port = 3000;



// Home route
// this will match all the http methos  api calls to test
// this is the default route
// app.use("/", (req, res) => {
//     res.send("Hello World namaste from the deshbord");
//     res.send("Hello World");
    
// });

// app.use("/hello/2", (req, res) => {
//     res.send("Hey there im asit kumar");
// });
// app.use("/hello/3", (req, res) => {
//     res.send("hellow from the server")
// });


// // About route
// // this will only handle get call to /user
// app.get("/about", (req, res) => {
//     res.send({  firstname: "Asit", lastname: "Kumar" });

// });

// app.post("/post", (req, res) => {
//     res.send("Testing post call");
// });

// rejex route



// app.use("/user", (req, res) => {
//     console.log(req.query);
    
//     res.send("Hello from the user");
// });

app.get("/user/:userId",  (req, res) => {
    console.log(req.params);// tho handle the dyanamaic req
    
    console.log(req.query);
    res.send({
        name: "Asit Kumar",
        age: 25,
        city: "Uttar Pradesh"
    });
})


app.post("/user", (req, res) => {
    res.send("Post request is working fine");
    res.send("saving data to the databses")
});

app.delete("/user", (req, res) => {
    res.send("Delete request is working fine");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
