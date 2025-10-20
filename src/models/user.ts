import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  id: string;
  fullname?:string;
  isVerified?:boolean;
  avatar?:string;
  college?:string;
  branch?:string;
  uploadedFiles:Schema.Types.ObjectId[];

}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  fullname:{
    type:String,
    trim:true,
  },
  isVerified:{
    type:Boolean,
    default:false,
  },
  avatar: {
    type: String, // URL from Cloudinary
  },
  college: {
    type: String,
    trim: true,
  },
  branch: {
    type: String,
    trim:true,
  },
  uploadedFiles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'File',
    },
  ],
},{timestamps:true});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
