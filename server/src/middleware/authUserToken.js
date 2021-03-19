const mongoose = require('mongoose')
const Users = mongoose.model("Users")
const jwt = require("jsonwebtoken");
const {TOKEN_SECRET } = process.env;



const authUserToken  = async (req, res, next) => {
  //middleware
  const token = req.header("Authorization");
  const data = jwt.verify(token, TOKEN_SECRET)
  console.log(data)

  try {
    const user = await Users.findOne({_id: data._id, 'tokens.token' : token})
    console.log(user)
     if(!user) {
       throw new Error('Not authorized to acces this resource')
     }
     req.user = user
     req.token = token
     next()
  } catch (error) {
    res.status(401).json({ msg: error.msg});
  }
};

module.exports = authUserToken;