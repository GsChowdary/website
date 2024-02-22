import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { PersonController } from './controller/PersonController';
import mongoose from 'mongoose';
import cors from 'cors';

//For env File 
dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;

const personCtr = new PersonController();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.get('/person', async (req: Request, res: Response)=>{
  await personCtr.get(req,res);
});

app.get('/person/:id', async (req: Request, res: Response)=>{
  await personCtr.getOne(req,res);
});

app.post('/person', async (req: Request, res: Response)=>{
  await personCtr.post(req,res);
});

app.put('/person/:id', async (req: Request, res: Response)=>{
  await personCtr.put(req,res);
});

app.delete('/person/:id', async (req: Request, res: Response)=>{
  await personCtr.delete(req,res);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
  mongoose.connect(process.env.MONGO_DB_HOST || '')
    .then(()=>{console.log("DB connected!!")})
    .catch((e)=>{console.log("Unabnle to connect to DB", e)});
});