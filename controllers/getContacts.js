const { Contact } = require("../utils/contactSchema");

const getContacts = async () => {
  console.log("it works");
  return await Contact.find({});
};

module.exports = getContacts;
