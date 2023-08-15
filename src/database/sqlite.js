import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./src/database/database.db");

process.on("SIGINT", () => {
    db.close(() => {
        console.log("Banco finalizado");
        process.exit(0);
    });
});

export default db;