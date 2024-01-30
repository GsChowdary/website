import mongoose from "mongoose";
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    courseName: String,
    courseDuration: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("courses", coursesSchema);