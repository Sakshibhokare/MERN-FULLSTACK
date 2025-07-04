// Serverless backend
// 1. what are backend servers
// serverless is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers.
// the term serverless doesn't mean there are no server involved
// instead it mean that developers and operators do not have to worry about the servers

//if the deployment is not serverless then if the server gets down then developer will be creating server, which mean someone will always taking care of it which is not good

//benefits of serverless : if no one is coming in your website then no server is allocated and no charge get applied,
// even if no one coming for 2 hrs on your website, no server is allocated till then

// famous serverless providers
// AWS Lambda
// google Cloud functions
// Cloudflare workers

//2. how cloudflare workers works: cloudflare workers do not use nodejs runtime, not bun
// they have create there own runtime v8 engine

//3. initializing a worker
// npm create cloudflare -- my-app
// npx wrangler login //to log in into the account
// npm run deploy // to deploy application

// express does not work on cloudflare so we use hono library instead
// command: npm create hono@latest hono-app
//easy to write code with hono, easy writing

// wrangler is use for communicating with cloudflare
//like howami that gives info about our account, help in deployment anbd login

//hono is a routing framework 