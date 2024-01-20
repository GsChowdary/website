//CRUD functions

const courseModel = require("./courseschema");

exports.getAllCourses = async () => {
    return await courseModel.find();
}
