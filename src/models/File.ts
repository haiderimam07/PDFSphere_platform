import mongoose, { Document, Model, Schema } from 'mongoose';

// Interface for the File document
export interface IFile extends Document {
  pdfFile: string;
  thumbnail?: string;
  owner: Schema.Types.ObjectId;
  title: string;
  _id:mongoose.Types.ObjectId;
  subjectName?: string;
  subjectCode?: string;
  collegeTag?: string;
  isPublished: boolean;
  createdAt?:Date;
  updatedAt?:Date;
}

const fileSchema = new Schema<IFile>({
  pdfFile: {
    type: String, // URL from Cloudinary
    required: true,
  },
  thumbnail: {
    type: String, // URL from Cloudinary
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Creates a reference to the User model
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  subjectName: {
    type: String,
    trim: true,
  },
  subjectCode: {
    type: String,
    trim: true,
  },
  collegeTag: {
    type: String,
    trim: true,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

export const File: Model<IFile> = mongoose.models.File || mongoose.model<IFile>('File', fileSchema);
