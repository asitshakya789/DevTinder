const express = require('express');
const app = express();

const port = 5000;


const  {adminauth , userauth} = require('./middlewares/auth');

app.use('/admin', adminauth);

app.post('/user/login',  (req, res) => {
    res.send("user login successfull")
});

app.get('/user/data', userauth, (req, res) => {
    res.send("user  data sent  ")
});

app.get('/admin/deleteuser ', (req, res) => {
    res/send("user can be deleted ")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});