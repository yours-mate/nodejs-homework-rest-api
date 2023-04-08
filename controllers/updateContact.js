const { Contact } = require("../utils/contactSchema");

const updateContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { contactId } = req.params;

    return await Contact.findByIdAndUpdate(
      contactId,
      { name, email, phone },
      {
        new: true,
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
