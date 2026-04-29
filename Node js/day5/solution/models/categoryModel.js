import { model, Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    }
});

const categoryModel = model("category", categorySchema);

export default categoryModel;
