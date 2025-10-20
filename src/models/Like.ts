import mongoose, { Document, Model, Schema } from 'mongoose';

// Interface for the Like document
export interface ILike extends Document {
  file: Schema.Types.ObjectId;
  likedBy: Schema.Types.ObjectId;
  id:string;
}

const likeSchema = new Schema<ILike>({
  file: {
    type: Schema.Types.ObjectId,
    ref: 'File', // Reference to the File that was liked
    required: true,
  },
  likedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User who liked the file
    required: true,
  },
}, { timestamps: true });

likeSchema.index({ file: 1, likedBy: 1 }, { unique: true });

export const Like: Model<ILike> = mongoose.models.Like || mongoose.model<ILike>('Like', likeSchema);
