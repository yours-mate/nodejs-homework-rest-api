const { Contact } = require("../utils/contactSchema");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await Contact.findById(contactId);

    return res.json(contactById);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
