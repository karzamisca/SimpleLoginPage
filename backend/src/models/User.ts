// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
    username: string;
    password: string;
}

// Define the user schema
const userSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);
export default User;
