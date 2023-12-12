const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/jwt");
const userModel = require("../models/User");

exports.login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.loginuser(username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const passwordCompare = await bcrypt.compare(password, user[0].password);

    if (!passwordCompare) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const accessToken = jwt.sign({ userId: user.id, username: user.username }, config.secret, { expiresIn: '1h' });
  
    return res.status(201).send({ accessToken , user: user, message: 'Login Successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


exports.register = async (req, res) => {
  try {
      const {username , email , password}=req.body;
      // if (!req.body.username || !req.body.password || !req.body.email) {
      //   throw new Error("Username or password is missing!");
      //   }
      //   else{
      // const existingUser= await userModel.loginuser(username);
      // if(!existingUser){
        let hashedPassword=await bcrypt.hash(password,10);
        const newUser=await userModel.registeruser({username: username,email:email,password:hashedPassword});
        const token = jwt.sign({ userId: newUser.id, username: newUser.username }, config.secret, { expiresIn: '1h' });
        return res.status(201).send({token,user:newUser,message:'Register Successfully'});
      // }
    // }
  } catch (error) {
    console.error(error)
return res.status(500).send("Internal Server Error");   
  }
}
