import { Schema, model } from 'mongoose';

const userSchema = Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    pattern: /^[a-z0-9]+@[a-z\.]+\.[a-z]{2,5}$/,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  Role: {
    type: String,
    enum: [admin, bachCoordinator, trainer, student],
  },
});
const User = model('users', userSchema);
export default User;
