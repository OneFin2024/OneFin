const router = require('express').Router();
const { getAllRequestDetails, getOneRequestDetail, addRequestDetail, deleteRequestDetail, updateRequestDetail } = require('../../controllers/LoanControllers/requestDetailsController');

router.get('/getAllRequestDetails', getAllRequestDetails);
router.get('/getOneRequestDetail/:id', getOneRequestDetail);
router.post('/addRequestDetail', addRequestDetail);
router.delete('/deleteRequestDetail/:id', deleteRequestDetail);
router.patch('/updateRequestDetail/:id', updateRequestDetail);

module.exports = router;
