const express = require("express");
const mainRouter = require("./routes/index")
const app = express();

app.use("api/v1", mainRouter)
//if you have multiple version such as v1 and v2...
// then we can use this, using this request will be directed properly

// we should specify more
// suppose we have requests like
// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword

// /api/v1/account/transferMoney
// /api/v1/account/balance

//for this kind of request,
//the request will go from
//api/v1-> mainRouter -> userRouter