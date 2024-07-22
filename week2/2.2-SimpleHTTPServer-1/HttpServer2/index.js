const express = require("express");
const app = express();
const port = 4000;
//body-parser
//2 install body parser and import it 
const bodyParser = require("body-parser")
//middlewares
app.use(bodyParser.json());
//this will extract the json and put instead of req.body, the request must be post 
app.post("/",(req, res)=>{
    console.log(req.body);
    res.send("Http Server 3");
})


//3 use nodemon 




app.get("/router", (req, res)=>{
    //header body query parameters 
    //do machine leaning model
    res.json({
        name:"sakshi",
        age:21
    })
})


app.get("/",(req, res)=>{
    console.log(req.body);
    res.send("Http Server!!!");
})


//post request 
app.post('/conversations',(req,res)=>{
    console.log(req.headers)
    res.send({
        msg:"2+2=4"
    })
})


//fetch 
// suppose we a Button, on clicking on it something should happen, then the fetch method will fetch the data which is required to display by clicking on it 




app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})