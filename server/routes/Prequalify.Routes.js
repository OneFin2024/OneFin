const router = require('express').Router();
const { getAllPrequalify, getOnePrequalify, addPrequalify, deletePrequalify, updatePrequalify } = require('../controllers/Loan.controller');

router.get('/getAllPrequalify', getAllPrequalify);
router.get('/getOnePrequalify/:id', getOnePrequalify);
router.post('/addPrequalify', addPrequalify);
router.delete('/deletePrequalify/:id', deletePrequalify);
router.patch('/updatePrequalify/:id', updatePrequalify);

module.exports = router;
