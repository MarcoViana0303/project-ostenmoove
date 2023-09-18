const express = require('express');
const router = express.Router();
const {
  listAllTools,
  listToolById,
  createNewTool,
  deleteToolById,
  updateToolsStatus,
  reserveTools,
} = require('../controllers/tool.controller');

router.get('/tools', listAllTools);
router.get('/tools/:id', listToolById);
router.post('/tools', createNewTool);
router.delete('/tools/:id', deleteToolById);
router.put('/tools/:id', updateToolsStatus);
router.post('/tools/:id/reserve', reserveTools);

module.exports = router;
