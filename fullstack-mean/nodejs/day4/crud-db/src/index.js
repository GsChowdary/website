const express = require('express');
const mongoose = require('mongoose');

const personSvc = require('./personservice');

const app = express();
const port = 8080;

// app.use(express.static('website'));

app.use(express.json());
//Alternative option is //body-parser package

app.get('/', (req, res)=>{
    console.log("Incoming req URL", req.url);
    res.end('Hello To Contact Server : GET');
});

app.get('/person', async (req, res)=>{
    try{
        const persons = await personSvc.getAllPersons();
        res.json({data: persons, status: 'success'});
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

app.get('/person/:id', async (req, res)=>{
    try{
        const persons = await personSvc.getOnePerson(req.params.id);
        res.json({data: persons, status: 'success'});
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

app.post('/person', async (req, res)=>{
    try{
        const persons = await personSvc.createPerson(req.body);
        res.json({data: persons, status: 'success'});
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

app.put('/person/:id', async (req, res)=>{
    try{
        await personSvc.updatePerson(req.params.id,req.body);
        const persons = await personSvc.getOnePerson(req.params.id);
        res.json({data: persons, status: 'success'});
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

app.delete('/person/:id', async (req, res)=>{
    try{
        await personSvc.deletePerson(req.params.id);
        res.json({status: 'success'});
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

app.listen(port, ()=>{
    console.log(`Application is running on port ${port}`);
    mongoose.connect("mongodb://localhost/test")
    .then(()=>{console.log("DB connected!!")})
    .catch((e)=>{console.log("Unabnle to connect to DB", e)});
});