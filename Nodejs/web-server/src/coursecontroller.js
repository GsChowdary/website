const courseservice = require("./courseservice");

class coursecontroller {
    constructor() {
        this.svc = new courseservice.courseservice();
    }
    get(res) {
        try {
            const courses = this.svc.get();
            res.json({ data: courses, status: 'success' });
        }
        catch (e) {
            //@ts-ignore
            res.status(500).json({ error: e.message });
        }

    }

}
exports.coursecontroller = coursecontroller;
