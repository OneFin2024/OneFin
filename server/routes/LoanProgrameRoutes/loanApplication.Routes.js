const router = require('express').Router();
const { getAllLoanApplications, getOneLoanApplication, addLoanApplication, deleteLoanApplication, updateLoanApplication } = require('../controllers/../../controllers/LoanControllers/loanApplicationController');

router.get('/getAllLoanApplications', getAllLoanApplications);
router.get('/getOneLoanApplication/:id', getOneLoanApplication);
router.post('/addLoanApplication', addLoanApplication);
router.delete('/deleteLoanApplication/:id', deleteLoanApplication);
router.patch('/updateLoanApplication/:id', updateLoanApplication);

module.exports = router;
