// what is express: 
// example: logic is DOMRectReadOnly, when you call it, you giving your functionality to the world 
// people need to know the address of a doctor- this is what http server do
// express is the way to express your logic to the world 
const express = require("express")
//logic
function calc(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

const app = express();

//express gives two args req and res it gets called whenever the user is coming on the address
app.get("/", function (req, res) {
    const n = req.query.n; //localhost:3000/?n=30 output:435 will be visible on screen 
    //express
    const ans = calc(n);
    res.send(ans);
})

//address
app.listen(3000);


//2. Query: 
//  after the final route add ? and give parameters 
// how do we get the query parameter 
// will get as- req.query.n 

//3. req and res:
// reuest methods:
// GET:for asking something
// POST: put some data/ put new post on insta
// PUT: update/ update username 
// DELETE: to delete something 

// Status code 
// 200: everything went fine 
// 404: route does not exist 
// 500: something went wrong 
// 411: inputs were incorrect 
// 403: not allowed something/ trying to change password of account as a user who do not have the access to that account 

// 4. GET: 
const user = {
    name: "jonny",
    kidneys: [{
        healthy: false
    }]
}

// how many kidney he has 
app.get("/", (req, res0) => {
    const jonnyKidneys = user[0].kindeys;
    const numberOfKidney = kidneys.length;
    let number = 0; 4
    for (let i = 0; i < jonnyKidneys.length; i++) {
        number += i;
    }
    res.json({
        jonnyKidneys,
        number
    })
    //   console.log(jonnyKidneys) //able to get an array
})





// 5. Post 
//adding unhealthy kidney 
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})
// how do you send post request 
// go to postman.com 
// send data in body and change type to json 
// query is sending with browser url 
// app.use(express.json) important to write 





//6. put use to update
app.put("/", (req, res) => {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({}) //this is important to run this logic 
})




//7.DELETE
//removing all unhealthy kidneys 
app.delete("/", (req, res) => {
    //filter
    //only if at least one unhealthy kidney is there
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    const newKidneys = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (user[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newKidneys;
    res.json({
        msg: "done"
    })
})

// edge cases
// what if there is no kidneys
// we need to test here at lease one unhealthy kidney must be present else return status code 411 for wrong input
// we can define in another function also 
app.delete("/", (req, res) => {
    //filter
    //only if at least one unhealthy kidney is there
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    const newKidneys = [];
    if(atleastOneUnhealthyKidney){
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({
            msg: "done"
        })
    }
    else{
        res.json(411).json({
            msg:"You have no bad kidney"
        })
    }
})





