const express = require("express");
const router = express.Router();

// @route  GET    api/contacts
// @desc   get all the user's contact
// @access Private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

// @route  POST    api/contacts
// @desc   Add a new user
// @access Private
router.post("/", (req, res) => {
  res.send("Add a contact");
});

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
