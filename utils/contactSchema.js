const { Schema, model } = require("mongoose");
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for the contact"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("Contact", contactSchema);

module.exports = { Contact };
