import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Person", PersonSchema);