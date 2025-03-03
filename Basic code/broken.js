const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


// app.get('/',(req,res) => {
//     throw new Error('BROKEN');
// });

// app.get('/',(req,res, next)=>{
//     fs.readFile('/file-does-not-exist', (err, data) => {
//         if (err) {
//             next(err);
//         } else {
//             res.send(data);
//         }
//     });
// });


app.port/user/:id/", (req, res) => {
    let  userid = req.params.id;
    res.send('User ID: ' +`{userid}`);
}); 


app.listen(port, () => {    
    console.log(`Example app listening at http://localhost:${port}`);
});
