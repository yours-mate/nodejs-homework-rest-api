const fs = require("fs").promises;
const path = require("path");
const uniqid = require("uniqid");
const getContacts = require("./getContacts");

const contactsPath = path.resolve("./models/contacts.json");

const listContacts = async (req, res, next) => {
  try {
    const contacts = await getContacts();

    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const contacts = await getContacts();
    const { contactId } = req.params;

    const contactById = contacts.find((contact) => contact.id === contactId);

    return res.json(contactById);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const contacts = await getContacts();
    const { contactId } = req.params;

    const filteredContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
    res.status(200).json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  const newContact = {
    id: uniqid(),
    name,
    email,
    phone,
  };

  try {
    const contacts = await getContacts();
    contacts.push(newContact);
    await fs.writeFile("./models/contacts.json", JSON.stringify(contacts));
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { contactId } = req.params;
    const contacts = await getContacts();

    const contact = contacts.find((item) => item.id === contactId);
    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    const contactIdx = contacts.findIndex((item) => item.id === contactId);

    contacts[contactIdx] = contact;

    await fs.writeFile("./models/contacts.json", JSON.stringify(contacts));
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
