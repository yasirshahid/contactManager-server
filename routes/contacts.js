const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

// import mongoose user & contact model
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route  GET    api/contacts
// @desc   get all the user's contact
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST    api/contacts
// @desc   Add a new user
// @access Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, relationShip } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        relationShip,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT    api/contacts/:id
// @desc   Update a contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("update the contact");
});

// @route  DELETE    api/contacts/:id
// @desc   Delete a contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("delete the contact");
});

module.exports = router;
