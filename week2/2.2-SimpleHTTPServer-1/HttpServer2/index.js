const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
//body-parser
//2 install body parser and import it 
const bodyParser = require("body-parser")
//middlewares
app.use(bodyParser.json()); 
//this will extract the json and put instead of req.body, the request must be post 
app.post("/",(req, res)=>{
    console.log(req.body); //it requires body parser to get data as .body
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
// req can have a body, query and so on 

app.post('/conversations',(req,res)=>{
    console.log(req.headers) //gives a object that will have some values i.e. auth
    res.send({
        msg:"2+2=4"
    })
})


//fetch 
// suppose we a Button, on clicking on it something should happen, then the fetch method will fetch the data which is required to display by clicking on it 
// fetch is a web API 



app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})

//get: use to get some data from the backend
// post: to post some data to the backend
// fetch: uses promises or something else 
