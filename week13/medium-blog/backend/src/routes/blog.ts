import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: String;
        JWT_SECRET: String
    },Variables:{
        userId:String
    }
}>();

//check if the user has loged in 
//get the user id and pass it further  
blogRouter.use("/*", async(c, next)=>{
     const authHeader = c.req.header("authorization") || "";
     const user= await verify(authHeader, c.env.JWT_SECRET);

     if(user){
        const decoded = {userId:String(user.id)}
        c.set("userId", decoded.userId);
        await next();
     }else{
        c.status(403);
        return c.json({
            message:"you are not logged in "
        })
     }
})

blogRouter.post('/', async(c) => {
    const body = await c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate);

    const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content: body.content,
            authorId: Number(userId)
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
            content: body.content
        }
    })
  return c.json({
    id:blog.id
  })
})

blogRouter.get('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate)

    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id: body.id
            }
        })

        return c.json({
            blog
        });
    }catch(e){
        c.status(411);
        return c.json({
            message:"Error while fetching blog post"
        })
    }
  
})

blogRouter.get('/bulk', async(c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate);

    const blogs = await body.findMany();

    return c.json({
        blogs
    })
})





