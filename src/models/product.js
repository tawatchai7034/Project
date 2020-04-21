import mongoose from 'mongoose';

const SchemaProduct = new mongoose.Schema ({
    //type of mongoose
        name:{
            type: String,
            required: true
        },
        discription:{
            type: String
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        price:{
            type: Number,
            required:true
        },
        createDateProduct:{
            type:Date,
            required: true,
            default:()=>Date.now()
        }
})
const Product = mongoose.model("Product",SchemaProduct)
export default Product