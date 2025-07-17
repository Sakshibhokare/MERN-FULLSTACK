import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://postgres:mysecretpassword@localhost/postgres',
});

async function createUsersTable() {
  await client.connect()
  const result = await client.query(`
  CREATE TABLE users(
     id SERIAL PRIMARY KEY,
     username VARCHAR(50) UNIQUE NOT NULL,
     email VARCHAR(289) UNIQUE NOT NULL
  )`)
  console.log("result" + result);
}


//this is not secure way,
// if someone come and give you a query in param in a way to modify it 
// this can delete your all data 
// for example: if as a user i pass "DELETE * FROM users;"
// this will generate a different query 
// and delete all users from your db 
async function insertUserData(username:string, password:string) {
  // in this way we are giving the final query, first two things are empty and the next query 
  const result = await client.query(`
  INSERT INTO users (username) VALUES ('${username}')
  `)

  // right way 
//this will tell sql that the value are string not sql queries 
  const result2 = await client.query(`
  INSERT INTO users (username, password) VALUES ('$1', '$2')
  `, [username, password])
  console.log(result);
  
}

createUsersTable();
insertUserData("sakshi", "demo");
//this is called as sql injection 
insertUserData("'', '', '', DELETE * FROM users;", "demo")
