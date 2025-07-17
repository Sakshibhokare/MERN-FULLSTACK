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


// ####### relationship, Transactions and Joins 
// Relationship :
// suppose one user has mulitple adresses then will create a  separate table for addresses where will have id and user id 
// for same user_id  will have multiple addresses stored 
// that user_it will be our foreign key 

//when we say that user_it is the foreign key 
// then sql first check if that id already exists into the users table 
// if it does not exist it will throw an error and will nor store that value 

// CREATE TABLE addresses(
//   id SERIAL PRIMARY KEY,
//   user_id INTERGER NOT null,
//   City ... 
//   FOREIGN KEY (user_id) REFERENCE users(id) on DELETE CASCADE
// )
// ON DELETE CASCADE MEANS WHEN I DELETE USER FROM USERS TABLE ALL RELATED ENTRIES WILL BE DELETED 
// IF THE USER DOES NOT EXITS THE HIS ADDRESSES WILL BE DELETED 

// we have ON DELETE RISTRICT: THIS RESTRICT TO DELETE THE USER FROM USERS TABLE, 
// IF YOU WANT TO DELETE THE USER FROM USERS TABLE, first you will have to delete the records from addresses first then delete user from users 



//####### TRANSACTIONS 
// it is something when one query runs and tells that i am good to go for a transactions 
// after that all queries will run togther or none of them will run 
// if money is debited the the receiving query will also run 
// if one of them fails it will revert back ]
// example 
// BEGIN;  -- Start the transaction

// -- 1. Deduct from Alice
// UPDATE bank_accounts
// SET balance = balance - 200
// WHERE name = 'Alice';

// -- 2. Add to Bob
// UPDATE bank_accounts
// SET balance = balance + 200
// WHERE name = 'Bob';

// COMMIT;  -- Commit the transaction
// If something goes wrong (e.g., Bob's update fails), you can use:
// ROLLBACK;  -- Undo all changes


// ######## Joins 
