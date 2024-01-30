import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { coursesController } from './controller/controller';
import mongoose from 'mongoose';
import cors from 'cors';

//For env File 
dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;

const coursesCtr = new coursesController();

app.get('/', async (req: Request, res: Response) => {
    await coursesCtr.get(req, res);
});

app.get('/courses', async (req: Request, res: Response) => {
    await coursesCtr.get(req, res);
});

app.post('/courses', async (req: Request, res: Response) => {
    await coursesCtr.post(req, res);
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
    mongoose.connect(process.env.MONGO_DB_HOST || '')
        .then(() => { console.log("DB connected!!") })
        .catch((e) => { console.log("Unabnle to connect to DB", e) });
});