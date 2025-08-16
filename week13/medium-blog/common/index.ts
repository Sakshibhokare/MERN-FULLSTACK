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