const express = require('express');
const app = express();

const port = 5000;

// Route with multiple handlers (next function usage)
app.get('/example/b', 
    (req, res, next) => {
        console.log("The response will be sent by the next function");
        next();
    },
    (req, res) => {
        res.send("Hello from B!");
    }
);

// Middleware functions
const a = function (req, res, next) {
    console.log("CB0");
    next();
};

const b = function (req, res, next) {
    console.log("CB1");
    next();
};

const c = function (req, res) {
    res.send("Hello from C!");
};

// Route with multiple middleware functions in an array
app.get('/example/c', [a, b, c]);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
