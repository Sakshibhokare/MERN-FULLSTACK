import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'
import {withAccelerate} from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/utils/jwt/jwt'
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
app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user=await prisma.user.create({
    data:{
      email:body.email,
      password:body.password
    }
  })

//generate token
  const token = await sign({id:user.id}, c.env.JWT_SECRET )

  return c.json({
    jwt:token
  })
  
})

app.post('/api/v1/signin', async (c) => {
  //initialize prisma 
  const prisma = new PrismaClient({
    datasourceUrl:c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where:{
      email:body.email,
      password:body.password
    }
  });

  if(!user){
    c.status(403)
    return c.json({error:"user not found"});
  }

  const jwt = await sign({id:user.id}, c.env.JWT_SECRET);
  return c.json({jwt});
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
