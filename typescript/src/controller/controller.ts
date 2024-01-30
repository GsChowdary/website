import { Request, Response } from 'express';
import { courseService } from '../service/service';
// import { Icourses } from '../typedef/courses.def';
export class coursesController {
    private svc: courseService;
    constructor() {
        this.svc = new courseService();
    }
    async get(req: Request, res: Response) {
        try {
            const courses = await this.svc.get();
            res.json({ data: courses, status: 'success' });
        } catch (e) {
            //@ts-ignore
            res.status(500).json({ error: e.message });
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const courses = await this.svc.getOne(req.params.id);
            res.json({ data: courses, status: 'success' });
        } catch (e) {
            //@ts-ignore
            res.status(500).json({ error: e.message });
        }
    }

    async put(req: Request, res: Response) {
        try {
            await this.svc.put(req.params.id, req.body);
            const courses = await this.svc.getOne(req.params.id);
            res.json({ data: courses, status: 'success' });
        } catch (e) {
            //@ts-ignore
            res.status(500).json({ error: e.message });
        }
    }

    async post(req: Request, res: Response) {
        try {
            const courses = await this.svc.post(req.body);
            res.json({ data: courses, status: 'success' });
        } catch (e) {
            //@ts-ignore
            res.status(500).json({ error: e.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await this.svc.delete(req.params.id);
            res.json({ status: 'success' });
        } catch (e) {
            //@ts-ignore
            res.status(500).json({ error: e.message });
        }
    }
}