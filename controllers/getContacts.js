const { Contact } = require("../utils/contactSchema");

const getContacts = async () => {
  const result = await Contact.find();
  return result;
};

module.exports = getContacts;
