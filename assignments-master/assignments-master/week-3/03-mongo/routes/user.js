const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course}= require("../db")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username= req.body.username;
    const password=rea.body.password;
    User.create({
        username,
        password
    })
    res.json({
        msg:"User created successfully"
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    //all published courses will be visible to the user 
    const response= await Course.find({
        isPublish:true
    });
    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseID= req.params.courseId; //get the course id from the URL
    const username = req.headers.username;
    //get the username and update the purchased Courses by using courseId 
    User.updateOne({
        username:username
    },{
        purchasedCourses:{
            "$push":courseID
        }
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router