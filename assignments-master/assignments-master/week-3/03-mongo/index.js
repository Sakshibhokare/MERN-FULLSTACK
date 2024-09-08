const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
// /admin request will go for first round and same for the user request will go to the second route
app.use("/admin", adminRouter)
app.use("/user", userRouter)


// we use to do this before, but the good practice is write routes and function separately 
// app.use("/admin/signup", (req, res)=>{

// })


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
