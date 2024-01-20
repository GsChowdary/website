const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const querySvc = require('./queryservice');
const courseSvc = require('./courseservice')

const app = express();
const port = 8080;

app.use(express.static('website'));

app.use(express.json());
app.unsubscribe(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log("Incoming req URL", req.url);
    res.end('Hello To Contact Server : GET');
});

app.get('/', async (req, res) => {
    try {
        const query = await querySvc.getAllPersons();
        res.json({ data: query, status: 'success' });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});
app.get('/courses', async (req, res) => {
    try {
        const courses = await courseSvc.getAllCourses();
        res.json({ data: courses, status: 'success' });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/query', async (req, res) => {
    try {
        const query = await querySvc.createquery(req.body);
        res.json({ data: query, status: 'success' });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
    mongoose.connect("mongodb://localhost/query")
        .then(() => { console.log("DB connected!!") })
        .catch((e) => { console.log("Unabnle to connect to DB", e) });
});