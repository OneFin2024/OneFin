const router = require('express').Router();
const { getAllApplicants, getOneApplicant, addApplicant, deleteApplicant, updateApplicant } = require('../../controllers/LoanControllers/applicantInformationController');

router.get('/getAllApplicants', getAllApplicants);
router.get('/getOneApplicant/:id', getOneApplicant);
router.post('/addApplicant', addApplicant);
router.delete('/deleteApplicant/:id', deleteApplicant);
router.patch('/updateApplicant/:id', updateApplicant);

module.exports = router;
