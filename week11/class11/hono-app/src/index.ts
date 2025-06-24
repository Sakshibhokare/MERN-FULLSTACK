import { Hono } from 'hono'

const app = new Hono()
async function authMiddleware(c: any, next: any) {
  //c stands for context of this request, request, response
  if (c.req.header("Authorization")) {
    //do validations
    await next();
  } else {
    return c.text("you do not have access ")
  }
}

// app.post('/', authMiddleware, async(c)=>{
// 	const body = await c.req.json()

// 	console.log(body);
// 	console.log(c.req.header("Authorization")); //name of headers that you trying to access ex. auth
// 	console.log(c.req.query("param")); //param : the parameters which we are going to pass in the url

// 	return c.text('Hello hono!')
// })


// export default app;
