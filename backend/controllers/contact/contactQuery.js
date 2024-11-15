import Contact from "../../model/Contact.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
