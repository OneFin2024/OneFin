const router = require('express').Router();



const {getAllLoans,getOneLoan,addLoan,deleteLoan,updateLoan }=require("../controllers/Loan.controller");

router.get("/getAllLoans",getAllLoans);
router.get("/getOneLoan/:id",getOneLoan);
router.post("/addLoan",addLoan);
router.delete("/deleteLoan/:id",deleteLoan);
router.patch("/updateLoan/:id",updateLoan);






module.exports = router;
