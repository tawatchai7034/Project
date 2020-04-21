import mongoose from 'mongoose';

const SchemaUser = new mongoose.Schema ({
    //type of mongoose
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
})
const User = mongoose.model("User",SchemaUser)
export default User