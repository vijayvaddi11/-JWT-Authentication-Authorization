import mongoose from "mongoose";
const {Schema} = mongoose;

const loginSchema = new Schema({
     email:{
          type: String         
     },
     password:{
          type: String
     }

});

export default mongoose.model(User,loginSchema);