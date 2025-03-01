const express = require('express');
const app = express();

const port = 5000;


const  {adminauth , userauth} = require('./middlewares/auth');

app.use('/admin', adminauth);
app.use('/user', userauth);

app.get('/user', (req, res) => {
    res.send("user data sent ")
});

app.get('/admin/getalldata', (req, res) => {
    res.send("admin data sent ")
});

app.get('/admin/deleteuser ', (req, res) => {
    res/send("user canbe deleted ")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});