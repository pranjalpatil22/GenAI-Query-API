const sqlite3 = require('sqlite3').verbose();
let db;

const init = (callback) => {
    db = new sqlite3.Database(':memory:', (err) => {
        if (err) throw err;
        console.log('Connected to SQLite in-memory database.');
        setupTables(callback);
    });
};

const setupTables = (callback) => {
    db.serialize(() => {
        db.run(`CREATE TABLE sales (id INTEGER PRIMARY KEY, product_name TEXT, sales INTEGER, date TEXT)`);
        db.run("INSERT INTO sales (product_name, sales, date) VALUES ('Laptop', 15, '2024-03-01')");
        db.run("INSERT INTO sales (product_name, sales, date) VALUES ('Phone', 30, '2024-03-02')");
        db.run("INSERT INTO sales (product_name, sales, date) VALUES ('Tablet', 12, '2024-03-03')");

        // ✅ Create `users` table
        db.run(`CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)`);
        db.run("INSERT INTO users (name, age) VALUES ('Alice', 25)");
        db.run("INSERT INTO users (name, age) VALUES ('Bob', 30)", callback);
    });
};

const getDB = () => {
    if (!db) {
        console.error("❌ Error: Database is not initialized. Call `init()` first.");
    }
    return db;
};

module.exports = { init, getDB };
