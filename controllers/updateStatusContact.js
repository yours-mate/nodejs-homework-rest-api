const { Contact } = require("../utils/contactSchema");

const updateStatusContact = async (req, res, next) => {
  try {
    const { favorite } = req.body;
    const { contactId } = req.params;

    return await Contact.findByIdAndUpdate(contactId, favorite, {
      new: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
