import { Hono } from 'hono'
import { sign, verify } from 'hono/utils/jwt/jwt'
import { blogRouter } from './routes/blog'
import { userRouter } from './routes/user'
// const app = new Hono()

//types of env variables, it is required to define the type of env variables 
const app = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:String
    }
}>()


//middleware example
app.use('/api/v1/blog/*', async(c, next)=>{
  //get the header
  //verify the header
  //if the header is correct, we can preoceed 
  //if not, we return the user a 403 status code
  const header = c.req.header("authorization") || "";
  const token=header.split(" ")[1] //this is when we get bearer token 
  const response = await verify(header, c.env.JWT_SECRET)

  if(response.id){
    next();
  }else{
    c.status(403)
    return c.json({error:"unauthorized"})
  }
})


app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter)



export default app
