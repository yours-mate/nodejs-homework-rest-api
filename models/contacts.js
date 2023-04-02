const fs = require("fs").promises;
const uniqid = require("uniqid");

const listContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));

    return contacts;
  } catch (err) {
    console.err(err.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));

    const contact = contacts.find((item) => item.id === contactId);
    return contact;
  } catch (err) {
    console.err(err.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));

    const filteredContacts = contacts.filter((item) => item.id !== contactId);

    if (filteredContacts.length !== contacts.length)
      return { message: "contact deleted" };
    return { message: "Not found" };
  } catch (err) {
    console.err(err.message);
  }
};

const addContact = async (body) => {
  try {
    const { name, email, phone } = body;
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));
    const newContact = {
      id: uniqid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile("./models/contacts.json", JSON.stringify(contacts));
    return newContact;
  } catch (err) {
    console.err(err.message);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const { name, email, phone } = body;
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));

    const contact = contacts.find((item) => item.id === contactId);
    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    const contactIdx = contacts.findIndex((item) => item.id === contactId);

    contacts[contactIdx] = contact;

    await fs.writeFile("./models/contacts.json", JSON.stringify(contacts));
  } catch (err) {
    console.err(err.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
