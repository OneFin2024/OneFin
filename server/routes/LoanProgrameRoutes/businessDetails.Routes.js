const router = require('express').Router();
const { getAllBusinessDetails, getOneBusinessDetail, addBusinessDetail, deleteBusinessDetail, updateBusinessDetail } = require('../../controllers/LoanControllers/businessDetailsController');

router.get('/getAllBusinessDetails', getAllBusinessDetails);
router.get('/getOneBusinessDetail/:id', getOneBusinessDetail);
router.post('/addBusinessDetail', addBusinessDetail);
router.delete('/deleteBusinessDetail/:id', deleteBusinessDetail);
router.patch('/updateBusinessDetail/:id', updateBusinessDetail);

module.exports = router;
