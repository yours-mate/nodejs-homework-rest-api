const Joi = require("joi");
const { getContacts } = require("../controllers");

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(26).required(),
  phone: Joi.string().min(7).max(10).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});

const contactValidation = (req, res, next) => {
  const validatedContact = contactSchema.validate(req.body);
  if (validatedContact.error) {
    const [errorMessage] = validatedContact.error.details;
    return res.status(400).json({ message: errorMessage.message });
  }
  next();
};

const isValidId = async (req, res, next) => {
  const contacts = await getContacts();
  const { contactId } = req.params;
  const idCheck = contacts.every((item) => item.id !== contactId);
  if (idCheck) return res.status(404).json({ message: "Not found" });
  next();
};

module.exports = {
  contactValidation,
  isValidId,
};
