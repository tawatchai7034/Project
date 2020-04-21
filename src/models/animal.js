// การบ้าน signUp animal
import mongoose from 'mongoose';

const SchemaAnimal = new mongoose.Schema ({
    //type of mongoose
        an_name:{
            type: String,
            required: true
        },
        an_discription:{
            type: String
        },
        an_age:{
            type: Number,
            required:true
        },
        an_price:{
            type: Number,
            required:true
        }
})
const Animal = mongoose.model("Animal",SchemaAnimal)
export default Animal