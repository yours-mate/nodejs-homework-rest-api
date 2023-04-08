const { Schema, model } = require("mongoose");
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Please enter phone number"],
    },
    favorite: {
      type: Boolean,
      required: [true],
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("Contact", contactSchema);

module.exports = { Contact };
