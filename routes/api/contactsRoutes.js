const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");
const router = express.Router();
const {
  contactValidation,
  isValidId,
} = require("../../validations/middleware");

router.get("/", listContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", contactValidation, addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put("/:contactId", contactValidation, isValidId, updateContact);

module.exports = router;
