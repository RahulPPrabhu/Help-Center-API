import mongoose from "mongoose";

const CardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
});

export default mongoose.model('Card', CardSchema);