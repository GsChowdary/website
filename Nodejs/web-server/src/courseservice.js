//CRUD functions

const courseModel = require("./courseschema");

exports.getAllPersons = async () => {
    return await courseModel.find();
}

// exports.getOnePerson = async (id) =>{
//     return awaitcourseModel.findById(id);
// }

exports.createcourse = async (course) => {
    return await courseModel.create(course);
}

// exports.updatePerson = async (id,course) =>{
//     return awaitcourseModel.findByIdAndUpdate(id,course);
// }

// exports.deletePerson = async (id) =>{
//     return awaitcourseModel.findByIdAndDelete(id);
// }
