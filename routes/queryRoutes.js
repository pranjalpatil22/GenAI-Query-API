const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/query', authMiddleware, queryController.processQuery);
router.post('/explain', authMiddleware, queryController.explainQuery);
router.post('/validate', authMiddleware, queryController.validateQuery);

module.exports = router;
