const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
let Schema = mongoose.Schema;

const User = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: "email is required",
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email incorrect"],
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email" });
      }
    },
  },
  password: {
    type: String,
    required: "password is required",
  },
  resetCode: {
    type: String,
    default: null,
  },
  address: {
    type: String,
  },
  dni: {
    type: Number,
  },
  imgUrl:{
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  accounts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },
  ],
 
  contacts : [{
    email: String,
    name: String
  }]
});

User.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

User.methods.compare = function (password, isReset) {
  if (this.password || this.resetCode)
    return bcrypt.compareSync(
      password.toString(),
      isReset ? this.resetCode : this.password
    );
  else return false;
};

User.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
User.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: 36000000,
  });
  user.tokens = user.tokens.concat({ token });
  // user.save();
  return token;
};

module.exports = mongoose.model("Users", User);
