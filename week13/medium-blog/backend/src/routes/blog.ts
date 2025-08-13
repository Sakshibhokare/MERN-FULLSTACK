import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: String;
        JWT_SECRET: String
    }
}>();


blogRouter.use("/*", (c, next)=>{
    //extract the user id 
    //pass it down to the route handler 
    next();
})

blogRouter.post('/', async(c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate);

    const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content: body.content,
            authorId: 1
        }
    })
  return c.json({
    id:blog.id
  })
})

blogRouter.put('/', async(c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate);

    const blog = await prisma.blog.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content: body.content,
            authorId: 1
        }
    })
  return c.json({
    id:blog.id
  })

  return c.text('Hello Hono!')
})

blogRouter.get('/:id', (c) => {
  return c.text('Hello Hono!')
})

blogRouter.get('/blog/bulk',(c)=>{

})





