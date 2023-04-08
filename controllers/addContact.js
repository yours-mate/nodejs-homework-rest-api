const { Contact } = require("../utils/contactSchema");
const uniqid = require("uniqid");

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;
  return await Contact.create({
    id: uniqid(),
    name,
    email,
    phone,
  });
};

module.exports = addContact;
