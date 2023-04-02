const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");
const router = express.Router();
const { contactSchema } = require("../../validations/middleware.js");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
    res.status(500).send("Server error");
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { key } = req.params;
    const contact = await getContactById(key);
    res.status(200).json(contact);
  } catch (err) {
    next(err);
    res.status(404).send({ message: "Not found" });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { error } = contactSchema.validate({ name, email, phone });
    if (error) {
      return res.status(400).json({ message: "missing required fields" });
    }
    const contact = await addContact({ name, email, phone });
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await removeContact(id);
    if (contact) return res.status(200).json({ message: "contact deleted" });
    return;
  } catch (err) {
    next(err);
    res.status(404).send({ message: "Not found" });
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const { error } = contactSchema.validate({ name, email, phone });
    if (error) {
      return res.status(400).json({ message: "missing fields" });
    }
    const contact = await updateContact(id, { name, email, phone });
    res.status(200).json(contact);
  } catch (err) {
    next(err);
    res.status(404).send({ message: "Not found" });
  }
});

module.exports = router;
