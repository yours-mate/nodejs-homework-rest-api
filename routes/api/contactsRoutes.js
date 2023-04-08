const express = require("express");
const {
  getContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../controllers");
const router = express.Router();
const {
  contactValidation,
  isValidId,
} = require("../../middlewares/contactValidation");

router.get("/", getContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", contactValidation, addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put("/:contactId", contactValidation, isValidId, updateContact);

module.exports = router;
