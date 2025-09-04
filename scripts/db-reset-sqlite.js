import { runSqlFile } from "../src/adapters/out/persistence/sqlite/db.js";

console.log("Resetting SQLite database...");

runSqlFile("src/adapters/out/persistence/sqlite/reset.sql");
runSqlFile("src/adapters/out/persistence/sqlite/schema.sql");
runSqlFile("src/adapters/out/persistence/sqlite/seed.sql");

console.log("Database reset done.");