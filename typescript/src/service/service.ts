import coursesModel from '../schema/schema';
import { Icourses } from '../typedef/def';
export class courseService {
    async get(): Promise<Icourses[]> {
        return await coursesModel.find();
    }

    async getOne(id: string) {
        return await coursesModel.findById(id);
    }

    async put(id: string, courses: Icourses) {
        return await coursesModel.findByIdAndUpdate(id, courses);
    }

    async post(courses: Icourses) {
        return await coursesModel.create(courses);
    }

    async delete(id: string) {
        return await coursesModel.findByIdAndDelete(id);
    }
}