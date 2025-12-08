import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await brcpt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = function (password) {
  const compare = brcpt.compare(password, this.password);
  if (compare) return compare;
};
export const User = model("User", userSchema);
