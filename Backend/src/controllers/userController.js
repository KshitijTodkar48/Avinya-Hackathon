const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const userSecret = process.env.USER_SECRET;

const generateJwtUser = (user) => {
  const payload = { username: user.username, role: "user" }; 
  return jwt.sign(payload , userSecret , { expiresIn:'24h'});
}

const userController = {
  me: (req, res) => {
    // Logic to get the current user
    return res.json({ username: req.user.username });
  },

  signUp: async (req, res) => {
    // Logic to sign up user
    const { username, age, aadharId, city, gender, bloodGroup } = req.body ;
    const user = await User.findOne({ aadharID: aadharId }) ;
    if(user)
    {
        return res.status(403).json({ message: "User already exists" });
    }
    const newUser = new User({ username, age, aadharID: aadharId, city, gender, bloodGroup }) ;
    await newUser.save() ;
    const token = generateJwtUser(newUser) ;
    res.json({ message: "User Signed Up successfully." , token }) ;
  },

  login: async (req, res) => {
    // Logic to log in user
    const { aadharId } = req.body ;
    const user = await User.findOne({ aadharID: aadharId }) ;
    if(user)
    {
        const token = generateJwtUser(user) ;
        return res.json({ message: "Logged in successfully." , token }) ;
    }
    res.status(403).json({ message: "User authentication failed."}) ;
  }
};

module.exports = userController;