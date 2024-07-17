const router = require('express').Router();
const { getAllBusinessFinancialInformation, getOneBusinessFinancialInformation, addBusinessFinancialInformation, deleteBusinessFinancialInformation, updateBusinessFinancialInformation } = require('../../controllers/LoanControllers/businessFinancialInformationController ');

router.get('/getAllBusinessFinancialInformation', getAllBusinessFinancialInformation);
router.get('/getOneBusinessFinancialInformation/:id', getOneBusinessFinancialInformation);
router.post('/addBusinessFinancialInformation', addBusinessFinancialInformation);
router.delete('/deleteBusinessFinancialInformation/:id', deleteBusinessFinancialInformation);
router.patch('/updateBusinessFinancialInformation/:id', updateBusinessFinancialInformation);

module.exports = router;
