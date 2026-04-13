
import { model, Schema } from "mongoose";


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    }
}, { timestamps: true })

const productModel = model("product", productSchema);

export default productModel;