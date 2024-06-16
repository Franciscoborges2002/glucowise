import mongoose, { Document, Model } from 'mongoose';

interface Diabetes{
  dateTime: Date;
  level: number;
}

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  realName: string;
  tipoDiabetes: string;
  historicoDiabetes: Diabetes;
}

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  realName: { type: String, required: true },
  tipoDiabetes: { type: String, required: true },
});

const UserModel: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
