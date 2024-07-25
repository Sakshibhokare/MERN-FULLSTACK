// what is express: 
// example: logic is DOMRectReadOnly, when you call it, you giving your functionality to the world 
// people need to know the address of a doctor- this is what http server do
// express is the way to express your logic to the world 
const express = require("express")
//logic
function calc(n){
    let ans= 0;
    for(let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, res){
const n = req.query.n;
//express
const ans= calc(n);
res.send(ans);
})

//address
app.listen(3000);