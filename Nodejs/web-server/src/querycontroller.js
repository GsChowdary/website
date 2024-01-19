const queryservice = require("./queryservice");

class querycontroller {
    constructor() {
        this.svc = new queryservice.queryservice();
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persons = yield this.svc.post(req.body);
                res.json({ data: persons, status: 'success' });
            }
            catch (e) {
                //@ts-ignore
                res.status(500).json({ error: e.message });
            }
        });
    }

}
exports.querycontroller = querycontroller;
