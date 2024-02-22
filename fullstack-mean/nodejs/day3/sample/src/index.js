const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res)=>{
    res.end('Hello To Express Server');
});

app.get('/contact', (req, res)=>{
    res.end('Hello To Contact Server : GET');
});

app.put('/contact', (req, res)=>{
    res.end('Hello To Contact Server: PUT');
});

app.post('/contact', (req, res)=>{
    res.end('Hello To Contact Server : POST');
});

app.delete('/contact', (req, res)=>{
    res.end('Hello To Contact Server : Delete');
});

app.listen(port, ()=>{
    console.log(`Application is running on port ${port}`);
});