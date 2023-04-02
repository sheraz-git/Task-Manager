
const Usersignup= require("../Model/UserModel-Signup");
const jwt=require("jsonwebtoken");

exports.loginuser = async (req, res) => {
  try {
     const Email = req.body.Email;
    const Password = req.body.Password;

    const finduser = await Usersignup.findOne({ Email: Email, Password: Password });

    if (!finduser) {
      return res.status(200).json({
        message: "User doesn't exist",
      });
    } else {
      const token = jwt.sign({ Email: `${Email}` }, "harry");
      return res.status(200).json({
        message: "login successful",token
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};


