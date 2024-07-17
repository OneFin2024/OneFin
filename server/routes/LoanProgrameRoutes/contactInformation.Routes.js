const router = require('express').Router();
const { getAllContactInformation, getOneContactInformation, addContactInformation, deleteContactInformation, updateContactInformation } = require('../controllers/../../controllers/LoanControllers/contactInformationController');

router.get('/getAllContactInformation', getAllContactInformation);
router.get('/getOneContactInformation/:id', getOneContactInformation);
router.post('/addContactInformation', addContactInformation);
router.delete('/deleteContactInformation/:id', deleteContactInformation);
router.patch('/updateContactInformation/:id', updateContactInformation);

module.exports = router;
