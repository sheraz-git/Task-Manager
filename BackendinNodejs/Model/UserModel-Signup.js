const mongoose=require("mongoose");
const {Schema}=mongoose;
const signup= new Schema({

    First_Name:{
        type:String,
        require:true
    },
    Last_Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Contact_Number:{
        type:Number,
        require:true
    },
    Password:{
        type:String,
        require:true        
    }
});
const signupuser = mongoose.model("usersignup", signup);
module.exports = signupuser;