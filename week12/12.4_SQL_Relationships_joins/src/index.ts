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
// postgres=# SELECT * FROM users;
//  id | username |        email
// ----+----------+---------------------
//   1 | alice    | alice@example.com
//   2 | bob      | bob@example.com
//   3 | charlie  | charlie@example.com
// (3 rows)

// postgres=# SELECT * FROM addresses;
//  id | user_id |     address     |   city   |  country
// ----+---------+-----------------+----------+-----------
//   1 |       1 | 123 Main Street | New York | USA
//   2 |       2 | 456 High Street | London   | UK
//   3 |       2 | 789 Elm Street  | Sydney   | Australia

//  SELECT u.username, u.email, a.address, a.city, a.country
// FROM users u
// JOIN addresses a ON u.id = a.user_id;
//  username |       email       |     address     |   city   |  country
// ----------+-------------------+-----------------+----------+-----------
//  alice    | alice@example.com | 123 Main Street | New York | USA
//  bob      | bob@example.com   | 456 High Street | London   | UK
//  bob      | bob@example.com   | 789 Elm Street  | Sydney   | Australia
//1. Inner join 
//  Returns only matching rows from both tables.

// sql
// Copy code
// SELECT users.username, addresses.address
// FROM users
// INNER JOIN addresses ON users.id = addresses.user_id;

// 2. Left Join 
//  Returns all rows from the left table, and matching rows from the right (NULL if no match).

// sql
// Copy code
// SELECT users.username, addresses.address
// FROM users
// LEFT JOIN addresses ON users.id = addresses.user_id;
//  username |     address
// ----------+-----------------
//  alice    | 123 Main Street
//  bob      | 456 High Street
//  bob      | 789 Elm Street
//  charlie  |

//  RIGHT JOIN
// // ⟶ Returns all rows from the right table, and matching rows from the left (NULL if no match).
// SELECT users.username, addresses.address
// FROM users
// RIGHT JOIN addresses ON users.id = addresses.user_id;
// username |     address
// ----------+-----------------
//  alice    | 123 Main Street
//  bob      | 456 High Street
//  bob      | 789 Elm Street

// FULL JOIN in SQL (also called FULL OUTER JOIN)
// 📘 One-line Explanation:
// A FULL JOIN returns all rows from both tables, matching where possible, and filling with NULL where there's no match.
// SELECT users.username, addresses.address
// FROM users
// FULL JOIN addresses ON users.id = addresses.user_id;
//  username |     address
// ----------+-----------------
//  alice    | 123 Main Street
//  bob      | 456 High Street
//  bob      | 789 Elm Street
//  charlie  |
