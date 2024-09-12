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

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;