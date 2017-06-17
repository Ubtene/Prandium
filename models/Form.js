const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var FormSchema = new Schema({
  login: {
    type: String,
    unique: true,
    trim: true,
    required: "login required"
  },
  password: {
    type: String,
    trim: true,
    required: "password required"
  },
  email: {
  	type: String,
    trim: true,
    unique: true,
    required: "email required"
  },
  preferences: {
  	type: String,
    trim: true
  }
});

var Form = mongoose.model("Form", FormSchema);
module.exports = Form;
