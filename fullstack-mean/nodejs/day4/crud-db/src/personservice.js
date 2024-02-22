//CRUD functions

const personModel = require("./personschema");

exports.getAllPersons = async () =>{
    return await personModel.find();
}

exports.getOnePerson = async (id) =>{
    return await personModel.findById(id);
}

exports.createPerson = async (person) =>{
    return await personModel.create(person);
}

exports.updatePerson = async (id, person) =>{
    return await personModel.findByIdAndUpdate(id, person);
}

exports.deletePerson = async (id) =>{
    return await personModel.findByIdAndDelete(id);
}
