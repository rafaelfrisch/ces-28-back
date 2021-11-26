import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import * as constants from '../settings';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function(next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  try {
    // generate a salt and hash password with salt
    const salt = await bcrypt.genSalt(Number(constants.saltWorkFactor));
    const hash = await bcrypt.hash(user.password, salt);
    // override the cleartext password with the hashed one
    user.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export const User = model('User', UserSchema, 'User');
