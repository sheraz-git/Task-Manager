const mongoose=require("mongoose");
const {Schema}=mongoose;
const Taskadd= new Schema({

    Task_Name:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    },
    Start_Date_Time:{
        type: String,
        default: new Date().toLocaleString(),
        required: true,
            },
    Duration:{
     type: String,
    required: true,
          },
    End_Date_Time: {
        type: String,
        default: new Date().toLocaleString(),
        required: true,
          },
        })
const usertask = mongoose.model("Taskadd", Taskadd);
module.exports = usertask;