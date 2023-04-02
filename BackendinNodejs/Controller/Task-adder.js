const taskadded = require("../Model/Task-add");

exports.taskcreated = async (req, res) => {
  try {
    const { Task_Name,Description,Duration,Start_Date_Time,End_Date_Time}= req.body;
    const tasks = await taskadded.findOne({ Task_Name: Task_Name });
    if (tasks) {
      return res.status(409).json({
        message: "Already added"
      });
    } 
    else {
      //  console.log("kkk");
//         const date = new Date();
//         const options = {  year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
// const formattedDate = date.toLocaleString('en-US', options);
// console.log(formattedDate);
        // const currentDate = new Date().toLocaleDateString(); // Get current date
        // const givenTime = "11:59 PM"; // Set the specific time you want to save
        // const datetime = new Date(currentDate + " " + givenTime).toLocaleString(); // Combine current date and given time
        
        const added = new taskadded({
        Task_Name:Task_Name,
        Description:Description,
        Start_Date_Time,
        Duration:Duration,
        End_Date_Time
        });
      await added.save();
      return res.status(200).json({
        message: "Added",
        added
      });
    }} 
  catch (error) {
    return res.status(500).json({
      message: "Server error"
    });
  }}

  
exports.gettask = async (req, res) => {
  try {
    const findtask = await taskadded.find({});
    console.log(findtask);
    return res.status(200).json({
      message: "All task",
      findtask
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error"
    });
  }
}
  
exports.delete = async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(taskId);

    const deletedTask = await taskadded.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task deleted successfully",
      deletedTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.update=async (req,res)=>{
  try {
    const taskId = req.params.id;
    console.log(taskId);

    const updatedTask = await taskadded.findByIdAndUpdate(  taskId,
      { $set: req.body },
      { new: true }
      );
    if(!updatedTask){
      return res.status(404).json({
        message: "No-Found"
      });
    }
    return res.status(200).json({
      message: "Updated successfully",
      updatedTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
}
