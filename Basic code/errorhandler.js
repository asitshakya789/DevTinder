const express = require('express'); // Fixed typo

const app = express();
const port = 5000;

// Global error-handling middleware
app.use("/",(err, req, res, next) => {
    console.error(err.message); // Log error for debugging
    res.status(500).send('Something went wrong'); // Send a proper error response
}); 

app.get('/getuserdata', (req, res, next) => {
    try {
        throw new Error('This is a custom error'); // Simulating an error
        res.send('User data sent'); // This will never execute
    } catch (error) {
        res.status(500).send('Something went wrong'); // Send a proper error response
    }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
