const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

//does not mean, this handles the /signup endpoints
// it will be /admin/signup /admin defined in the main file along with the function for /signup 
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;

    //check if a user with this username already exist
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title= req.body.title;
    const description= req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })

    res.json({
        msg:"Course created successfully", courseId: newCourse_id
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    const response= await Course.find({})
    res.json({
        courses:response
    })

    // this is the one of the way to get all courses 
    // Course.find({})
    // .then(function(response){
    //     res.json({
    //         courses:response
    //     })
    // })
});

module.exports = router;