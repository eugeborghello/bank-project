const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const fs = require('fs')
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
  imgUrl: {
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
  const privateKey = await fs.readFileSync('./src/models/user/jwtRS256.key', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log({ data: data })
      return data;
    }
  });
  console.log({ data2: privateKey })
  console.log('hola')
  const tokenUser = await jwt.sign({ _id: user._id }, privateKey, {
    algorithm: 'RS256',
    expiresIn: 60 * 60
  });
  console.log('hola2')


  var token = `${tokenUser}`;

  const publicKey = await fs.readFileSync('./src/models/user/jwtRS256.key.pub', 'utf8');
  console.log({ publicKey, token })
  jwt.verify(
    token,
    publicKey,
    { algorithm: 'RS256' },
    (err, decoded) => {
      if (err) throw new Error('Invalid token');
      console.log(decoded.token);
    }
  );
  user.tokens = user.tokens.concat({ publicKey });
  console.log(publicKey)
  user.save();
  return publicKey;
};


module.exports = mongoose.model("Users", User);
