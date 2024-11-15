import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);

export default Contact;
