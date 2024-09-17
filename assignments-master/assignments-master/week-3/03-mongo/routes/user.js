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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseID= req.params.courseId; //get the course id from the URL
    const username = req.headers.username;
    //get the username and update the purchased Courses by using courseId 
    try{
        await User.updateOne({
            username:username
        },{
            "$push":{
                purchasedCourses: courseID
            }
        });
    }catch(e){
        console.log(e)
    }
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.username
    })

    console.log(user.purchasedCourses) //this will return the list of purchased courses 

    const courses = await Course.find({
        _id:{
            "in":user.purchasedCourses //will use the courseId coming from this line and will find the Course in Course table and then will return 
        }
    })
    res.json({
        courses:courses
    })

});

module.exports = router