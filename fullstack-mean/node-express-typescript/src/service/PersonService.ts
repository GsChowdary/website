import personModel from '../schemas/PersonSchemas';
import { IPerson } from '../typedef/person.def';
export class PersonService{
    async get() : Promise<IPerson[]>{
        return await personModel.find();
    }

    async getOne(id: string){
        return await personModel.findById(id);
    }

    async put(id: string, person: IPerson){
        return await personModel.findByIdAndUpdate(id, person);
    }

    async post(person: IPerson){
        return await personModel.create(person);
    }

    async delete(id: string){
        return await personModel.findByIdAndDelete(id);
    }
}