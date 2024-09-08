const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

//does not mean, this handles the /signup endpoints
// it will be /admin/signup /admin defined in the main file along with the function for /signup 
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;