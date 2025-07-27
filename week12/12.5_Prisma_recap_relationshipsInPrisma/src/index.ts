import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//this will generate the sql query, this is similar for any database
async function insertUser(username:string, password:string, firstname:string, lastname:string) {
    const response = await prisma.user.create({
        data:{
            username,
            password,
            firstname,
            lastname,

        }
    })
}

insertUser("demo", "demo", "demo", "demo");