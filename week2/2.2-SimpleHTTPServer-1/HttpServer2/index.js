const express = require("express");
const app = express();
const port = 3000;

app.get("/router", (req, res)=>{
    //header body query parameters 
    //do machine leaning model
    res.json({
        name:"sakshi",
        age:21
    })
})


app.get("/",(req, res)=>{
    res.send("Http Server 2");
})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})