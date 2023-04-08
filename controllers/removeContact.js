const { Contact } = require("../utils/contactSchema");

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contactToDelete = await Contact.findByIdAndDelete(contactId);

    res.status(200).json({
      message: `${contactToDelete} deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
