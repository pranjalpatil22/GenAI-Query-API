const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const queryRoutes = require('./routes/queryRoutes');
const db = require('./database/db');
const { init } = require('./database/db');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

init(() => {
    console.log("✅ Database initialized with tables and sample data.");

    // Register API Routes
    app.use('/api', queryRoutes);

    // Start Server
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});
