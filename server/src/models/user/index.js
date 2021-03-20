const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let Schema = mongoose.Schema;

const User = new mongoose.Schema({
  name: {
    type: String

  },
  lastName: {
    type: String

  },
  email: {
    type: String,
    required: 'email is required',
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email incorrect'],
  },
  password: {
    type: String,
    required: 'password is required',
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
    accounts: [{
    type: Schema.Types.ObjectId,
    ref: 'Account'
  }]
})


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

module.exports = mongoose.model('Users', User);
