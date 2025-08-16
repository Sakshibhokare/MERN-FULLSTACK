//this files will all zod inputs structures 
import z from 'zod';

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

//this will be helpful for frontend 
export type SignupInput = z.infer<typeof signupInput>

//how can we import this file in our backend and frontend folder 
// we have to convert this folder to npm module 
// ideally will use monorepo now not this method 


// steps to convert into npm module 
// step 1: change the name properly 
// in package.json file ex. @100xdevs/medium-common prefix should be username 
// step 2: npm login 
// step 3: npm publish 
// file path should be  "main":"dist/index.js" npx tsc --b 
// step 4: create .nmpignore file and write src only, our src has ts file which we already have in dist folder 
// step 5: npm publish --access public 
// to confirm if published, go to registory npmjs.com/package/@100xdevs/medium-common  

// now just run npm i @100xdevs/medium-common 