const mongoose = require("mongoose");
const Users = mongoose.model("Users");

exports.createContact = async (req, res) => {
  const userId = req.params.id;
  const { contactEmail, name, cbu } = req.body;
  let user;

  Users.findById({ _id: userId })
    .then((userFound) => {
      user = userFound;

      if (contactEmail === user.email) {
        return res.status(400).json({ message: "You cannot add yourself" });
      }

      const contactExist = user.contacts.find((c) => c.email === contactEmail);
      if (contactExist) {
        return res.status(400).json({ message: "Contact already exists" });
      }

      const contact = {
        email: contactEmail,
        alias: name,
        cbu: cbu,
      };

      user.contacts.push(contact);
      user.save();

      return res.status(201).json({
        message: "Contact added successfully.",
        contact,
      });
    })
    .catch((error) => {
      res.status(400).json({ message: "Error.", error });
    });
};

exports.getContacts = (req, res) => {
  const userId = req.params.id;

  Users.findById({ _id: userId })
    .then((user) => {
      return res.status(200).send(user.contacts);
    })
    .catch((error) => {
      res.status(400).json({ message: "Error.", error });
    });
};

exports.deleteContact = (req, res) => {
  const userId = req.params.id;
  const contactEmail = req.body.contactEmail;

  Users.findOne({ _id: userId })
    .populate("contacts")
    .then((user) => {
      user.contacts = user.contacts.filter((c) => c.email !== contactEmail);
      user.save();
      res.status(200).json({ message: "Contact deleted successfully" });
    })
    .catch((e) => res.send(404).json(e));
};

exports.editContact = (req, res) => {
  const userId = req.params.id;
  const { contactEmail, newName } = req.body;
  
  Users.findOne({ _id: userId })
    .then((user) => {
      const contact = user.contacts.find((c) => c.email === contactEmail);
      contact.alias = newName;
      user.save();
      return res.status(200).json({ message: "Changes saved.", contact });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Something went wrong, try again later", err })
    );
};
