const router = require('express').Router();
const { getAllGeneralInfo, getOneGeneralInfo, addGeneralInfo, deleteGeneralInfo, updateGeneralInfo } = require('../../controllers/LoanControllers/generalInfoController');

router.get('/getAllGeneralInfo', getAllGeneralInfo);
router.get('/getOneGeneralInfo/:id', getOneGeneralInfo);
router.post('/addGeneralInfo', addGeneralInfo);
router.delete('/deleteGeneralInfo/:id', deleteGeneralInfo);
router.patch('/updateGeneralInfo/:id', updateGeneralInfo);

module.exports = router;
