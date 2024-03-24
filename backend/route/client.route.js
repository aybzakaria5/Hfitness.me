const express = require('express');
const router = express.Router();
const clientController = require('../controller/client.controller');


router.get('/clients', clientController.getAllClients);
router.get('/client/:id', clientController.getClientById);
router.post('/client', clientController.createClient);
router.put('/client/:id', clientController.updateClient);
router.delete('/client/:id', clientController.deleteClient);

module.exports = router;