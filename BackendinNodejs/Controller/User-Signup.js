const Usersignup= require("../Model/UserModel-Signup");
exports.create =async (req,res)=>{
try{  
  const Email=req.body.Email;
  const finduser = await Usersignup.findOne({Email:Email}); 
  if(finduser){
  return res.status(201).json({
    message: " already created"
  });
  }
  else{
const created=await Usersignup.create({
First_Name:req.body.First_Name,
Last_Name:req.body.Last_Name,
Email:req.body.Email,
Contact_Number:req.body.Contact_Number,
Password:req.body.Password
})
return res.status(201).json({
  message: "created",created
});
}}
catch (error) {
  return res.status(500).json({
    message: "Server error",
  });
}}

exports.getuser=async (req,res)=>{
  try{
  const finduser = await Usersignup.find({});
  console.log(finduser);
  return res.status(200).json({
    message: "All users",finduser
  });
  }

  catch(error){
    return res.status(500).json({
      message: "server error"
    });      
  }
}

