const express=require("express");
const signup=require("../Controller/User-Signup");
const login=require("../Controller/User-loign");
const Task=require('../Controller/Task-adder');
const auth=require("../Middleware/Authentication");
const router = express.Router();

router.post('/signup',signup.create);
router.get("/getsignup",signup.getuser);
router.post('/checkuser',login.loginuser);

/////////////Task added////////////
router.post("/tasksadded",Task.taskcreated);
router.get("/gettasks",Task.gettask);
router.delete("/deletetasks/:id",Task.delete);
router.put("/updatetasks/:id",Task.update);
module.exports = router;