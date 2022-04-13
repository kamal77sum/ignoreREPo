const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller')
router.get('/', controller.get)
router.post('/post', controller.post)
router.get('/single/:id', controller.single)
router.put('/update/:id', controller.update)
router.delete('/delete/:id', controller.delete)




module.exports = router;