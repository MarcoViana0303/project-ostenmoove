const express = require('express');
const router = express.Router();
const {
    listAllTools, 
    listToolById, 
    createNewTool, 
    deleteToolById,
} = require('../controllers/tool.controller');

router.get('/tools', listAllTools);
router.get('/tools/:id', listToolById);
router.post('/tools', createNewTool);
router.delete('/tools/:id', deleteToolById);

module.exports = router;