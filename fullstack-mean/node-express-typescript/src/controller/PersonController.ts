import { Request, Response } from 'express';
import { PersonService } from '../service/PersonService';
// import { IPerson } from '../typedef/person.def';
export class PersonController{
    private svc: PersonService;
    constructor(){
        this.svc = new PersonService(); 
    }
    async get(req: Request, res: Response){
        try{
            const persons = await this.svc.get();
            res.json({data: persons, status: 'success'});
        }catch(e){
            //@ts-ignore
            res.status(500).json({error: e.message});
        }
    }

    async getOne(req: Request, res: Response){
        try{
            const persons = await this.svc.getOne(req.params.id);
            res.json({data: persons, status: 'success'});
        }catch(e){
            //@ts-ignore
            res.status(500).json({error: e.message});
        }
    }

    async put(req: Request, res: Response){
        try{
            await this.svc.put(req.params.id,req.body);
            const persons = await this.svc.getOne(req.params.id);
            res.json({data: persons, status: 'success'});
        }catch(e){
            //@ts-ignore
            res.status(500).json({error: e.message});
        }
    }

    async post(req: Request, res: Response){
        try{
            const persons = await this.svc.post(req.body);
            res.json({data: persons, status: 'success'});
        }catch(e){
            //@ts-ignore
            res.status(500).json({error: e.message});
        }
    }

    async delete(req: Request, res: Response){
        try{
            await this.svc.delete(req.params.id);
            res.json({status: 'success'});
        }catch(e){
            //@ts-ignore
            res.status(500).json({error: e.message});
        }
    }
}