const courseservice = require("./courseservice");

class coursecontroller {
    constructor() {
        this.svc = new courseservice.courseservice();
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persons = yield this.svc.find();
                res.json({ data: persons, status: 'success' });
            }
            catch (e) {
                //@ts-ignore
                res.status(500).json({ error: e.message });
            }
        });
    }

}
exports.coursecontroller = coursecontroller;
