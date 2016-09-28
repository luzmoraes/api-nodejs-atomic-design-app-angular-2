const express = require('express');
const router = express.Router();
const Controller = require("./organism");

// Create
router.post('/', (req, res, next) => {
  Controller.create(req, res);
});
// Retrieve
router.get('/', (req, res, next) => {
  Controller.find(req, res);
});
// get
router.get('/:id', (req, res, next) => {
  Controller.findOne(req, res);
});
// Update
router.put('/:id', (req, res, next) => {
  Controller.update(req, res);
});
// Delete
router.delete('/:id', (req, res, next) => {
  Controller.remove(req, res);
});

module.exports = router;
