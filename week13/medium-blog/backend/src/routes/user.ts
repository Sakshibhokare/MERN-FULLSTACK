import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import z from 'zod';
import { signupInput } from "../zod";
export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:String
    }
}>()

// i will get these inputs from zod.ts file 
// const signupInput = z.object({
//     username: z.string().email(),
//     password: z.string().min(6),
//     name: z.string().optional()
// })
userRouter.post('/signup', async (c) => {
  //we have to initialize prisma client for each route we can not have global access the cloudflare
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate()) //use to send queries to Prisma’s global edge proxy instead of directly to your database.

  const body = await c.req.json();
//   implements zod library for sanitizing the input data
// sanatize  
const success = signupInput.safeParse(body);
if(!success){
    c.status(411);
    return c.json({
        message:"Inputs are not correct "
    })
}
  try{
    const user = await prisma.user.create({
    data:{
      email:body.email,
      password:body.password,
      name: body.name
    }
  })
  
  const jwt = await sign({
    id: user.id
  }, c.env.JWT_SECRET)

  return c.text(jwt)
  }catch(e){
    c.status(411);
    return c.text('Invalid')
  }
  
  
})

userRouter.post('/signin', async (c) => {
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

