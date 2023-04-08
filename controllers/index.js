const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const updateContact = require("./updateContact");

module.exports = {
  getContactById,
  getContacts,
  removeContact,
  addContact,
  updateContact,
};
