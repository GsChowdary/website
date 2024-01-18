//CRUD functions

const queryModel = require("./queryschema");

exports.getAllPersons = async () => {
    return await queryModel.find();
}

// exports.getOnePerson = async (id) =>{
//     return awaitqueryModel.findById(id);
// }

exports.createPerson = async (query) => {
    return await queryModel.create(query);
}

// exports.updatePerson = async (id,query) =>{
//     return awaitqueryModel.findByIdAndUpdate(id,query);
// }

// exports.deletePerson = async (id) =>{
//     return awaitqueryModel.findByIdAndDelete(id);
// }
