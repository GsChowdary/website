const express = require('express');

const app = express();
const port = 8080;

app.use(express.static('website'));

app.get('/contact', (req, res)=>{
    console.log("Incoming req URL", req.url);
    res.end('Hello To Contact Server : GET');
});

app.listen(port, ()=>{
    console.log(`Application is running on port ${port}`);
});