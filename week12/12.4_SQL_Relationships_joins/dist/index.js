"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: 'postgresql://sakshi:mypassword@localhost:5432/postgres',
        });
        try {
            yield client.connect(); // ✅ Connect once
            const result = yield client.query(`
      CREATE TABLE IF NOT EXISTS users2 (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(55) UNIQUE NOT NULL
      );
    `);
            console.log('✅ Table created:', result.command);
        }
        catch (err) {
            console.error('❌ Error:', err.message);
        }
        finally {
            yield client.end(); // ✅ Always close connection
        }
    });
}
createUserTable();
