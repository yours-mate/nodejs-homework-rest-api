const path = require("path");
const fs = require("fs/promises");
const contactsPath = path.resolve("./models/contacts.json");

const getContacts = async () =>
  JSON.parse(await fs.readFile(contactsPath, "utf8"));

module.exports = getContacts;
