import Contact from "../../model/Contact.js";

export const createContact = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !company ||
    !jobTitle
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      message: "Contact created successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
