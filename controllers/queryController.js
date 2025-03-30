const { getDB } = require('../database/db');
const queryParser = require('../utils/queryParser');

exports.processQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query is required' });

    try {
        const db = getDB();
        if (!db) {
            return res.status(500).json({ error: "Database not initialized" });
        }

        const sql = queryParser.parse(query);
        console.log("Parsed SQL:", sql);

        // Ensure `db` is initialized
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error("Database Error:", err.message);
                return res.status(500).json({ error: err.message });
            }
            res.json({ query, sql, result: rows });
        });

    } catch (error) {
        console.error("Query Parser Error:", error.message);
        res.status(500).json({ error: "Invalid query format" });
    }
};

exports.explainQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query is required' });
    res.json({ query, explanation: queryParser.explain(query) });
};

exports.validateQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query is required' });
    
    res.json({ query, valid: queryParser.validate(query) });
};
