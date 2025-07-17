import { Client } from 'pg';

async function createUserTable() {
  const client = new Client({
    connectionString: 'postgresql://sakshi:mypassword@localhost:5432/postgres',
  });

  try {
    await client.connect(); // ✅ Connect once
    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS users2 (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(55) UNIQUE NOT NULL
      );
    `);
    console.log('✅ Table created:', result.command);
  } catch (err:any) {
    console.error('❌ Error:', err.message);
  } finally {
    await client.end();
  }
}

createUserTable();
