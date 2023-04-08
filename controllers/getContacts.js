const { Contact } = require("../utils/contactSchema");

const getContacts = async () => {
  console.log("it works");
  console.log(Contact.find({}));
  const result = await Contact.find({});
  return result;
};

module.exports = getContacts;
