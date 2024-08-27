
import { Schema, model,models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  father:{
  type:String,
  },
  gender:{
    type:String,
    default:false,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  image:{
    type:String,
  },
  role:{
    type:String,
    default:'user',
  },
  address:{
   type:String
  }
},{timestamps:true});


export default models.User || model('User',UserSchema);
